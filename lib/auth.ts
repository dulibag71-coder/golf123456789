import { createClient } from "@/lib/supabase/client"

export async function loginWithGoogle() {
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${location.origin}/auth/callback`,
            queryParams: {
                access_type: "offline",
                prompt: "consent",
            },
        },
    })

    if (error) {
        console.error("Error logging in with Google:", error)
        return { error }
    }

    return { error: null }
}

export async function logout() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error("Error logging out:", error)
        return { error }
    }

    window.location.href = "/"
    return { error: null }
}
