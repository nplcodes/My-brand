import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Add a photo
export const POST =async (req: Request, res:Response) => {
    const body = await req.json()
    const {
        name,
        surname,
        email,
        telephone,
        message
    } = body;

    const msg = await db.messages.create({
        data:{
            name,
            surname,
            email,
            telephone,
            message,
        }
    })
    if (msg) {
        try {
            return NextResponse.json({
                message: "Message is successfully sent",
                data: msg,
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

// Get all Photos
export const GET =async (req: Request, res: Response) => {
    const msgs = await db.messages.findMany()
    if (msgs.length > 0) {
        try {
            return NextResponse.json({
                Message: "All Messages: ",
                data: msgs
            })
        } catch (error) {
            console.error(error)
        }
    }
    else{
        return NextResponse.json({
            Message: "No Message is found :)"
        })
    }
   
}

