import { connect } from "@/dbConfig/dbConfig";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export async function GET(){
  try {
    const response = await NextResponse.json({
        message:"Logout Successful",
        success:true
    })
    response.cookies.set("token","",{
        httpOnly:true,
        expires:new Date(),
    })
    return response
  } catch (error:any) {
    return NextResponse.json({error: error.message},{status:500})
  }
}