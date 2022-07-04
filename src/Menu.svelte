<svelte:head>
	<link rel="stylesheet" href="/style/menu.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<h1>
	NIM
</h1>

<div class='menu' on:click={() => trocarEstadoDoJogo('jogar')}>
	Jogar
</div>

<div class='menu' on:click={() => trocarEstadoDoJogo('ajuda')}>
	Ajuda
</div>

<div class='menu' on:click={() => trocarEstadoDoJogo('sobre')}>
	Sobre
</div>