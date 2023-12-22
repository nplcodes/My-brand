import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Update a post
export const PUT =async (req: Request, res:Response) => {
    const params = req.url.split('/blogs/')[1]
    const id =parseInt(params)

    const body = await req.json()
    const {
        title,
        description,
        category,
        priority,
        image
    } = body

     const postexist = await db.post.findFirst({
        where: {
            id
        }
     })
     if(postexist){
        try {
            const post = await db.post.update({
                where: {
                    id
                },
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
                        message: "Post successfully Updated",
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
        } catch (error) {
            console.log(error)
        }
     }
     else{
        return NextResponse.json({
            Message: "Post not found!"
        })
     }

}

// Delete a post
export const DELETE =async (req: Request, res:Response) => {
    const params = req.url.split('/blogs/')[1]
    const id =parseInt(params)

     const postexist = await db.post.findFirst({
        where: {
            id
        }
     })
     if(postexist){
        try {
            const post = await db.post.delete({
                where: {
                    id
                }
            })
            if (post) {
                try {
                    return NextResponse.json({
                        message: "Post successfully delete",
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
        } catch (error) {
            console.log(error)
        }
     }
     else{
        return NextResponse.json({
            Message: "Post not found!"
        })
     }

}

// Get a single post
export const GET =async (req: Request, res: Response) => {
    const params = req.url.split('/blogs/')[1]
     const id =parseInt(params)
    const singlepost = await db.post.findFirst({
        where: {
            id
        }
    })
    if (singlepost) {
        try {
            return NextResponse.json({
                Message: "Single post: ",
                data: singlepost
            })
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