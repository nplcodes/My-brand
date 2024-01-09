import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// create a post
export const POST =async (req: Request, res:Response) => {
    const body = await req.json()
    const {
        title,
        description,
        category,
        priority,
        image
    } = body;

    const post = await db.post.create({
        data:{
            title,
            description,
            category,
            priority,
            image
        }
    })
    if (post) {
        try {
            return NextResponse.json({
                message: "Post successfully created",
                data: post,
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
    const posts = await db.post.findMany()
    if (posts.length > 0) {
        try {
            return NextResponse.json(posts)
        } catch (error) {
            console.error(error)
        }
    }
    else{
        return NextResponse.json({
            Message: "No Post found :)"
        })
    }
   
}

