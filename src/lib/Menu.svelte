<script>

    import Logo from "./Logo.svelte";
    import { page } from "$app/stores";

    const items = [
        {href:"/", label: 'Início'},
        {href:"sobre", label: 'Sobre'},
        {href:"/portfolio", label: 'Portfolio'},
        {href:"/contato", label: 'Contato'},
        {href:"/perguntas", label: 'Perguntas Frequentes'},

    ]

    const p = $page.url
    console.log(p)
</script>

<a href="/">
    <Logo/>
   </a>

{#each items as {href, label} }
{#if $page.url.pathname === href}
<a {href} class="text-gray-800 transition-colors font-light duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">{label}</a> 
    {:else}
<a {href} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">{label}</a>
{/if}
{/each}




