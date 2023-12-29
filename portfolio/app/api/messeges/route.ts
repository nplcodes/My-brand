import { db } from "@/lib/db";
import { NextResponse } from "next/server";


interface MessageInfo {
    fname: string;
    surname: string,
    email: string,
    telephone: string,
    content_message: string
  }

// Add a photo
export const POST =async (req: Request, res:Response) => {
    const body: MessageInfo = await req.json()
    const {
        surname,
        fname,
        email,
        telephone,
        content_message
    } = body;

    const msg = await db.contact.create({
        data: {
            surname,
            fname,
            email,
            telephone,
            content_message
        }
    })
    if (msg) {
        try {
            return NextResponse.json(body)
        } catch (error) {
            return NextResponse.json(error)
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
    const msgs = await db.contact.findMany()
    if (msgs.length > 0) {
        try {
            return NextResponse.json(msgs)
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

