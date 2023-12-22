import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// create a post
export const POST =async (req: Request, res:Response) => {
    const body = await req.json()
    const {
        title,
        description,
        category,
        image
    } = body

    const skill = await db.skill.create({
        data:{
            title,
            description,
            category,
            image
        }
    })
    if (skill) {
        try {
            return NextResponse.json({
                message: "Skill successfully created",
                data: skill,
            },
            {
                status: 200
            }
            )
        } catch (error) {
            return NextResponse.json({
                message: "Error",
                error
            })
        }
    }
    else{
        return NextResponse.json({
            message: "Internal server error"
        },
        {
            status: 500
        })
    }
}

// Get all posts
export const GET =async (req: Request, res: Response) => {
    const skills = await db.skill.findMany()
    if (skills.length > 0) {
        try {
            return NextResponse.json({
                Message: "All Skills set: ",
                data: skills
            })
        } catch (error) {
            console.error(error)
        }
    }
    else{
        return NextResponse.json({
            Message: "No Skill found :)"
        })
    }
   
}

