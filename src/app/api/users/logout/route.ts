import { NextResponse } from "next/server";

export async function GET(request: NextResponse) {
    try{
        const response = NextResponse.json({message: "User logged out successfully", success: true})
        response.cookies.delete("token");
        return response
    }catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}