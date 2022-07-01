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

<div class='menu' on:click={() => trocarEstadoDoJogo('como-jogar')}>
	Como jogar
</div>

<div class='menu' on:click={() => trocarEstadoDoJogo('ajuda')}>
	Ajuda
</div>

<div class='menu' on:click={() => trocarEstadoDoJogo('sobre')}>
	Sobre
</div>