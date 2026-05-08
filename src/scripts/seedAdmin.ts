import { prisma } from "../lib/prisma";


async function seedAdmin() {
    try {
        
        const adminData = {
            name: "Jamal",
            email: "jamal@example.com",
            role: "ADMIN",
            password: "admin1234"
        }
        
        
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        });

        if (existingUser) {
            throw new Error("User already exists!!");
        }

        const signUpAdmin = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // origin:"http://localhost:4000"
                // origin:"https://skillbridge-frontend-bay.vercel.app/"
            },
            body: JSON.stringify(adminData)
        })



        if (signUpAdmin.ok) {
            console.log(" Admin created successfully")
        }
        

    } catch (error) {
        console.error(error);
    }
}

seedAdmin()