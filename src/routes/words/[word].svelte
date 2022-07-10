<script>
    import EditWord from '$lib/EditWord.svelte'
    import { page } from '$app/stores'
    import { supabase } from '$lib/supabaseClient'

    const { word } = $page.params

    const getWord = async () => {
        try {
            const { data, error, status } = await supabase
                .from('words')
                .select(`*`)
                .eq('name', word)
                .single()

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
    {#await getWord()}
        <p>...waiting</p>
    {:then result}
        {#if result}
            <div><code>{ JSON.stringify(result) }</code></div>
        {:else}
            <p>Page not found</p>
        {/if}
        <EditWord name={word} value={JSON.stringify(result, null, 2)} />
    {:catch error}
        <p>{ error.message }</p>
    {/await}
</div>

