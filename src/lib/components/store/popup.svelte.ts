let color: 'green' | 'red' | undefined = $state()
let text : string = $state('')

export let popup = $state({
    color: color,
    text: text
})