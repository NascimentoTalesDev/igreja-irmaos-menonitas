import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest, response: NextResponse) {    
  const token = request.cookies.get("rule")?.value
  
  //const signInURL = new URL("/admin", request.url)
  
  //if (!token || !token.includes("NiMdA")) {
  //    return NextResponse.redirect(signInURL)
  //}
}

export const config = {
    matcher: ["/dashboard/:path*"]
} 