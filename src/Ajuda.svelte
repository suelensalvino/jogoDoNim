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
<p>O jogo NIM foi desenvolvido para dois jogadores e cada um realiza jogadas alternadas. Cada jogada consiste em retirar de uma a três peças por linha ou coluna.
    Cabe a cada jogador decidir o número de peças a serem removidas por jogada. Para eliminar peças, é necessário clicar com o mouse sobre a peça desejada quando o jogador quiser. 
    A cada jogada realizada, o jogador deverá ser alternado clicando no botão que indica o número do jogador. O jogo acaba quando não houver mais peças disponíveis e o jogador que executou a última jogada, vence.
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
