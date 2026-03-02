import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                email: { label: "Email", type: "email", placeholder: "your email" },
                password: { label: "Password", type: "password", placeholder: "your password" }
            },
            async authorize(credentials, req) {
                console.log(credentials, "Credentials from authorize")
                const user = { id: 1, name: "John Doe", email: "john@example.com" }

                if (user) {
                    return user
                }
                return null
            }
        })
    ]
})

export { handler as GET, handler as POST }