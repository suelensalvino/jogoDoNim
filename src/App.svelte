<script>
	import Jogo from './Jogar.svelte'
	import ComoJogar from './Como-jogar.svelte'
	import Sobre from './Sobre.svelte'
	import Ajuda from './Ajuda.svelte'
	import Menu from './Menu.svelte'

	import { estado } from './Estado.js'
</script>

{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'jogar'}
	<Jogo/>
{:else if $estado === 'como-jogar'}
	<ComoJogar/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'ajuda'}
	<Ajuda/>
{/if}