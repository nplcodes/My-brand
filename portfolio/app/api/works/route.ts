import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// create a post
export const POST =async (req: Request, res:Response) => {
    const body = await req.json()
    const {
        percentage,
        description,
        category,
        image
    } = body

    const work = await db.work.create({
        data:{
            description,
            category,
            percentage,
            image
        }
    })
    if (work) {
        try {
            return NextResponse.json({
                message: "Work is successfully created",
                data: work,
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
    const works = await db.work.findMany()
    if (works.length > 0) {
        try {
            return NextResponse.json({
                Message: "All works: ",
                data: works
            })
        } catch (error) {
            console.error(error)
        }
    }
    else{
        return NextResponse.json({
            Message: "No Work found :)"
        })
    }
   
}

