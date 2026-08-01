import { NextResponse } from "next/server";  // Ginagamit ang NextResponse para magpadala ng response pabalik sa client.

export async function POST(request) {  // Ito ang API Route mo.
    const { email, password } = await request.json();  // {} called this object destructuring, response.json() server to client


    if(email === "Eran@gmail.com" && password === "123") {
            
        return NextResponse.json({  // NextResponse.json is the answer for client side bu json pedeng array nexted json
            success: true,
            message: "API is working"
        })
    }else {
        return NextResponse.json({
            success: false,
            message: "Invalid email or password"
        })
    }
}

// fetch("/api/login", {   when you created this automatic nextJs this function call this
//     method: "POST"
// })
// Ang request ay object na naglalaman ng lahat ng ipinadala ng client.
//     const { email, password } = await request.json();

// Kasama rito ang:

// request
// │
// ├── headers
// ├── body
// ├── method
// ├── url
// └── cookies