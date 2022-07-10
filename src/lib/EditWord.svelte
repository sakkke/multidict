<script>
    import MonacoEditor from '$lib/MonacoEditor.svelte'
    import { supabase } from '$lib/supabaseClient'

    let disabled = false

    export let name

    export let value = JSON.stringify({
        data: {
            from: {
                '<LANGUAGE_FROM>': {
                    to: {
                        '<LANGUAGE_TO>': '<WORD_AFTER>',
                    },
                },
            },
        },
        name: name || '<WORD_BEFORE>',
    }, null, 2)

    const handleContent = event => {
        const content = event.detail

        value = content
    }

    const handleUpdate = async () => {
        try {
            disabled = true

            const date = new Date()

            const values = {
                ...JSON.parse(value),
                updated_at: date.toISOString(),
            }

            const { error } = await supabase
                .from('words')
                .upsert(values, { onConflict: 'id' })

            if (error) {
                throw error
            }

            alert('OK!')

            window.location.href = `/words/${values.name}`
        } catch (error) {
            alert(error.message)

            throw error
        } finally {
            disabled = false
        }
    }
</script>

<div>
    <div>Edit Word</div>
    <div>Data</div>
    <MonacoEditor on:content={handleContent} {value} />
    <div>
        <button {disabled} on:click={handleUpdate}>Update</button>
    </div>
</div>

