
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";


const secret="ssdfsfsdfsdfsfsfsdfgswrwer"

const createUserAuth = async (payload: any) => {
  const { password, email, name } = payload;

  // ✅ Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 🔐 Hash password
  const hashedPass = await bcrypt.hash(password, 8);

  // ✅ Create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPass,
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
    secret,
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
    const token=jwt.sign(userData,secret,{expiresIn:"7d"})

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