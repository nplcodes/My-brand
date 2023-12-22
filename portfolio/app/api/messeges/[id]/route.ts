import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Delete a Photo
export const DELETE =async (req: Request, res:Response) => {
    const params = req.url.split('/messeges/')[1]
    const id =parseInt(params)

     const messageexist = await db.messages.findFirst({
        where: {
            id
        }
     })
     if(messageexist){
        try {
            const message = await db.messages.delete({
                where: {
                    id
                }
            })
            if (message) {
                try {
                    return NextResponse.json({
                        message: "Message is successfully deleted",
                        data: message,
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
            Message: "Message is not found!"
        })
     }

}