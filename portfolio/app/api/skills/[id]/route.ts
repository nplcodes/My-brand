import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Update a post
export const PUT =async (req: Request, res:Response) => {
    const params = req.url.split('/skills/')[1]
    const id =parseInt(params)

    const body = await req.json()
    const {
        title,
        description,
        category,
        image
    } = body

     const skillexist = await db.skill.findFirst({
        where: {
            id
        }
     })
     if(skillexist){
        try {
            const skill = await db.skill.update({
                where: {
                    id
                },
                data:{
                    title,
                    description,
                    category,
                    image
                }
            })
            if (skill) {
                try {
                    return NextResponse.json({
                        message: "Skill is successfully Updated",
                        data: skill,
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
            Message: "Skill not found!"
        })
     }

}

// Delete a post
export const DELETE =async (req: Request, res:Response) => {
    const params = req.url.split('/skills/')[1]
    const id =parseInt(params)

     const skillexist = await db.skill.findFirst({
        where: {
            id
        }
     })
     if(skillexist){
        try {
            const skill = await db.skill.delete({
                where: {
                    id
                }
            })
            if (skill) {
                try {
                    return NextResponse.json({
                        message: "Skill is successfully delete",
                        data: skill,
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
            Message: "Skill not found!"
        })
     }

}

// Get a single post
export const GET =async (req: Request, res: Response) => {
    const params = req.url.split('/skills/')[1]
     const id =parseInt(params)
    const singleskill = await db.skill.findFirst({
        where: {
            id
        }
    })
    if (singleskill) {
        try {
            return NextResponse.json({
                Message: "Single Skill: ",
                data: singleskill
            })
        } catch (error) {
            console.error(error)
        }
    }
    else{
        return NextResponse.json({
            Message: "No Skill found :)"
        })
    }
   
}