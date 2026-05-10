
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";


const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }
  return secret;
};

const createUserAuth = async (payload: any) => {
  const { password, email, name, role } = payload;

  // ✅ Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 🔐 Hash password
  const hashedPass = await bcrypt.hash(password, 8);

  type UserRole = "BUYER" | "AGENT" | "ADMIN";
  const normalizedRole =
    typeof role === "string" ? role.toUpperCase() : undefined;
  const allowedRoles: UserRole[] = ["BUYER", "AGENT", "ADMIN"];
  const userRole =
    normalizedRole && allowedRoles.includes(normalizedRole as UserRole)
      ? (normalizedRole as UserRole)
      : "BUYER";

  // ✅ Create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPass,
      role: userRole,
    },
  });

  // 🔥 Create JWT token
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    getJwtSecret(),
    { expiresIn: "7d" }
  );

  return {
    token,
    user,
  };
};


const loginUserAuth=async (payload:any)=>{
   const user=await prisma.user.findUnique({
    where:{
        email:payload.email
    }
    
    
   
   })
   if(!user){
        throw new Error("User not found")
    }
    if (!user.password) {
      throw new Error("Password login is not available for this account");
    }
    const verifypass=await bcrypt.compare(payload.password,user.password)
    if(!verifypass){
        throw new Error("Invalid credential")
    }

    const userData={
        id:user.id,
        name:user.name,
        email:user.email,
        role:user.role,
    }
    const token=jwt.sign(userData,getJwtSecret(),{expiresIn:"7d"})

    return {
        token,
        user
    }
}

export const AuthService = {
    // Add service methods here
      createUserAuth,
      loginUserAuth
    };