<script>
    import { supabase } from '$lib/supabaseClient'

    const getWords = async () => {
        try {
            const { data, error, status } = await supabase
                .from('words')
                .select(`*`)

            if (error && status !== 406) {
                throw error
            }

            if (!data) {
                return
            }

            return data
        } catch (error) {
            alert(error.message)

            throw error
        }
    }
</script>

<div>
    <div>Words</div>
    {#await getWords()}
        <p>...waiting</p>
    {:then result}
        {#each Object.entries(result) as [key, value]}
            <ul>
                <li><code>{key}: {JSON.stringify(value)}</code></li>
            </ul>
        {/each}
    {:catch error}
        <p>{ error.message }</p>
    {/await}
</div>

