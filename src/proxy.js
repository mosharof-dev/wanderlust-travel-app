import { NextResponse } from "next/server";
import { auth } from "./lib/auth";


export async function proxy(request) {
  

  const session = await auth.api.getSession({
      headers: request.headers 
  });
  
  console.log("Middleware Session Check:", session);

  // 2. Hardcoded 

  if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
  }

  // 3. Jodi session  (user logged in), 
  return NextResponse.next();
}

// Config s
export const config = {
  matcher: ['/destinations/:path', '/admin', '/myBooking'], 
}