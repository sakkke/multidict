<script>
    import { user } from '$lib/sessionStore'
</script>

<div>
    <div>Profile</div>
    {#each Object.entries($user) as [key, value]}
        <ul>
            <li><code>{key}: {JSON.stringify(value)}</code></li>
        </ul>
    {/each}
</div>

