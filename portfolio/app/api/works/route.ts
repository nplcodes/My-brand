import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface PostRequestBody {
    title: string;
    colaborated: string;
    description: string;
    category: string;
    image: string;
}

export const POST = async (req: Request, res: Response) => {
    try {
        const body: PostRequestBody = await req.json();

        const { title, colaborated, description, category, image } = body;

        const works = await db.work.create({
            data: {
                title,
                description,
                category,
                colaborated,
                image,
            },
        });

        if (works) {
           return NextResponse.json(works);
        } else {
           return NextResponse.json({
                message: 'Internal server error',
            });
        }
    } catch (error) {
        console.error(error);

       return NextResponse.json({
            message: 'Internal server error',
        });
    }
};



// Get all posts
export const GET =async (req: Request, res: Response) => {
    const works = await db.work.findMany()
    if (works.length > 0) {
        try {
            return NextResponse.json(works)
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
