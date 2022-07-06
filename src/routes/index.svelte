<script>
    import Auth from '$lib/Auth.svelte'
    import Profile from '$lib/Profile.svelte'
    import { supabase } from '$lib/supabaseClient'
    import { user } from '$lib/sessionStore'

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
    })
</script>

<div>
    {#if $user}
        <Profile />
    {:else}
        <Auth />
    {/if}
</div>

