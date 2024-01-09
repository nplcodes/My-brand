import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface Work {
    title: string;
    description: string;
    category: string;
    colaborated: string;
    image: File | string | null;
  }

// Update a post
export const PUT =async (req: Request, res:Response) => {
    const params = req.url.split('/works/')[1]
    const id =parseInt(params)

    const body = await req.json()
    const {
        colaborated,
        description,
        category,
        image
    } = body;

     const workexist = await db.work.findFirst({
        where: {
            id
        }
     })
     if(workexist){
        try {
            const work = await db.work.update({
                where: {
                    id
                },
                data:{
                    colaborated,
                    description,
                    category,
                    image
                }
            })
            if (work) {
                try {
                    return NextResponse.json({
                        message: "Post successfully Updated",
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
        } catch (error) {
            console.log(error)
        }
     }
     else{
        return NextResponse.json({
            Message: "Work not found!"
        })
     }

}

// Delete a post
export const DELETE =async (req: Request, res:Response) => {
    const params = req.url.split('/works/')[1]
    const id =parseInt(params)

     const workexist = await db.work.findFirst({
        where: {
            id
        }
     })
     if(workexist){
        try {
            const work = await db.work.delete({
                where: {
                    id
                }
            })
            if (work) {
                try {
                    return NextResponse.json({
                        message: "Work is successfully delete",
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
        } catch (error) {
            console.log(error)
        }
     }
     else{
        return NextResponse.json({
            Message: "Work is not found!"
        })
     }

}

// Get a single post
export const GET =async (req: Request, res: Response) => {
    const params = req.url.split('/blogs/')[1]
     const id =parseInt(params)
    const singleWork = await db.work.findFirst({
        where: {
            id
        }
    })
    if (singleWork) {
        try {
            return NextResponse.json({
                Message: "Single Work: ",
                data: singleWork
            })
        } catch (error) {
            console.error(error)
        }
    }
    else{
        return NextResponse.json({
            Message: "No Work is found :)"
        })
    }
   
}