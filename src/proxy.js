import { NextResponse } from 'next/server'

export function proxy(request) {

    const dummyUserData = {
        role: "admin",
        name: "John Doe",
        email: "dummy@gmail.com",
        id: 1
    }

    let isBlogsPage = request.nextUrl.pathname.startsWith('/blogs');
    // let isBlogsPage2 = request.nextUrl.pathname.startsWith()
    let isAdmin = dummyUserData?.role === "admin";

    if (isBlogsPage && !isAdmin) {
        return NextResponse.redirect(new URL('/sign_in', request.url))

    }
    return NextResponse.next();
}

export default proxy;


