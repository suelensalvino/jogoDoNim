<svelte:head>
	<link rel="stylesheet" href="/style/botao.css">
</svelte:head>

<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<div class='menu' on:click={() => trocarEstadoDoJogo('menu')}>Voltar
</div>