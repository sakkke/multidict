<script>
    import { createEventDispatcher, onMount } from 'svelte'

    const dispatch = createEventDispatcher()

    let editorElement

    export let value

    onMount(async () => {
        const monaco = await import('monaco-editor')

        const editor = monaco.editor.create(editorElement, {
            value,
            language: 'json',
        })

        editor.onDidChangeModelContent(() => {
            const content = editor.getValue()

            dispatch('content', content)
        })

        return () => {
            editor.dispose()
        }
    })
</script>

<div bind:this={editorElement} style="min-height: 300px;"></div>

