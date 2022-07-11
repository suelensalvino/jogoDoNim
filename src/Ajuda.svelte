<svelte:head>
	<link rel="stylesheet" href="/style/ajuda.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
  import VoltarMenu from './VoltarMenu.svelte'
</script>

<h1>Dúvidas sobre o jogo</h1>

<p class="destaque">NÃO SABE COMO FUNCIONA O JOGO?</p>
<p>O jogo NIM foi pensado para dois jogadores que podem ser duas pessoas ou uma pessoa e uma máquina.
  Cada jogador realiza jogadas alternadas. Um movimento consiste em retirar algumas peças de uma única coluna; 
  cabe a cada jogador decidir o número de peças a serem  removidas.
  Para eliminar as peças, é necessário deslocar o mouse sobre a quantidade desejada, clicando quando você quiser removê-las, a quantidade selecionada deve mudar de cor indicando que mais uma jogada foi executada. 
  O jogo acaba quando não houver mais peças disponíveis e o jogador que fez a última jogada, vence.
</p>

<h1>Suporte</h1>
<p>Se você precisa de ajuda, seja com problemas técnicos, dificuldades para jogar e etc, por favor, fale com o suporte através do e-mail:</p>
<p>suporte-jogonim@gmail.com</p>
<br>
<br>
<br>
<VoltarMenu/>
<br>
<br>