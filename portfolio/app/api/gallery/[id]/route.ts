import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Delete a Photo
export const DELETE =async (req: Request, res:Response) => {
    const params = req.url.split('/gallery/')[1]
    const id =parseInt(params)

     const photoexist = await db.gallery.findFirst({
        where: {
            id
        }
     })
     if(photoexist){
        try {
            const photo = await db.gallery.delete({
                where: {
                    id
                }
            })
            if (photo) {
                try {
                    return NextResponse.json({
                        message: "Photo is successfully delete",
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
        } catch (error) {
            console.log(error)
        }
     }
     else{
        return NextResponse.json({
            Message: "Photo is not found!"
        })
     }

}