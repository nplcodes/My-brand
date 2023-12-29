import { db } from "@/lib/db";
import { NextResponse } from "next/server";


// Add a photo
export const POST =async (req: Request, res:Response) => {
    const body = await req.json()
    const {
        image,
        description
    } = body;

    const photo = await db.gallery.create({
        data:{
            image,
        }
    })
    if (photo) {
        try {
            return NextResponse.json({
                message: "Photo is successfully Added",
                data: photo,
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
    const photos = await db.gallery.findMany()
    if (photos.length > 0) {
        try {
            return NextResponse.json(photos)
        } catch (error) {
            console.error(error)
        }
    }
    else{
        return NextResponse.json({
            Message: "No Photo found :)"
        })
    }
   
}

