<script>
    import { supabase } from '$lib/supabaseClient'
    import { user } from '$lib/sessionStore'
</script>

<div>
    {#each Object.entries($user) as [key, value]}
        <ul>
            <li><code>{key}: {JSON.stringify(value)}</code></li>
        </ul>
    {/each}
</div>

