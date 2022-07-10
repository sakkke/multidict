<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let value

    const handleChange = event => {
        const content = event.target.value

        dispatch('content', content)
    }
</script>

<textarea on:change={handleChange} style="min-height: 300px; min-width: 100%; resize: none;" {value}></textarea>

