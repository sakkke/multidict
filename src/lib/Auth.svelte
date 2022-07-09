<script>
    import { supabase } from '$lib/supabaseClient'

    const handleLogin = async () => {
        try {
            const { user, session, error } = await supabase.auth.signIn({
                provider: 'google',
            }, {
                redirectTo: window.location.origin,
            })

            if (error) {
                throw error
            }

            alert('OK!')
        } catch (error) {
            alert(error.error_description || error.message)
        }
    }
</script>

<div>
    <button on:click={handleLogin}>Login with Google</button>
</div>

