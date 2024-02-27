import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest, response: NextResponse) {
  var token: string | undefined = request.cookies.get("user")?.value
  let rule: string;

  const signInURL = new URL("/", request.url)

  if (!token) {
    return NextResponse.redirect(signInURL)
  }

  if (token) {
    let user = JSON.parse(token);
    rule = user?.rule?.name;
    console.log(rule);
  }

}

export const config = {
  matcher: ["/dashboard/:path*"]
}