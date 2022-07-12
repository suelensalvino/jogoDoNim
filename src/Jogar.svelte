<script>
	import VoltarMenu from "./VoltarMenu.svelte";

	let tabela = ["", "", "", ""];
	let tabela1 = ["", "", ""];
	let tabela2 = ["", ""];
	let tabela3 = [""];
	var jogador1 = "Player 1";
	var jogador2 = "Player 2";
	var contador = 0;
	var ganhador = 0;

	var jogador = jogador1; //aqui onde pode trocar na tela o nome do player antes de começar o jogo

	function botaojogador2() {
		return (jogador = jogador2);
	}
	function botaojogador1() {
		return (jogador = jogador1);
	}

	function jogada() {
		if (jogador == jogador1 && contador == 3) {
			contador = 0;
			jogador = jogador2;
		} else if (jogador == jogador2 && contador == 3) {
			contador = 0;
			jogador = jogador1;
		} else {
			return "	";
		}
	}

	function parada(ganhador) {
		if (ganhador == 0) {
			return "START";
		} else if (ganhador == 10 && jogador == jogador1) {
			return "PARABÉNS! VOCÊ VENCEU";
		} else if (ganhador == 10 && jogador == jogador2) {
			return "PARABÉNS! VOCÊ VENCEU";
		} else {
			return "Que vença o melhor";
		}
	}

	function remover(i) {
		tabela = tabela.slice(0, -1);
		contador++;
		jogada();
		parada();
		ganhador++;
	}

	function remover1(i) {
		tabela1 = tabela1.slice(0, -1);
		contador++;
		jogada();
		parada();
		ganhador++;
	}

	function remover2(i) {
		tabela2 = tabela2.slice(0, -1);
		contador++;
		jogada();
		parada();
		ganhador++;
	}

	function remover3(i) {
		tabela3 = tabela3.slice(0, -1);
		contador++;
		jogada();
		parada();
		ganhador++;
	}

	let link = "/public/images/moeda.png";
</script>

<svelte:head>
	<link rel="stylesheet" href="/style/jogar.css" />
</svelte:head>

<body>
	<h1 class="start">
		{parada(ganhador)}
	</h1>
	<h1 class="player">
		{jogador}
		{jogada()}
	</h1>

	<table>
		<tr>
			<td on:click={() => remover(tabela)}>
				{#each tabela as tabela, i}{tabela}<img
						src={link}
						alt="yes"
					/>{/each}
			</td>
		</tr>

		<tr>
			<td on:click={() => remover1(tabela1)}>
				{#each tabela1 as tabela1, i}{tabela1}<img
						src={link}
						alt="yes"
					/>{/each}
			</td>
		</tr>

		<tr>
			<td on:click={() => remover2(tabela2)}>
				{#each tabela2 as tabela2, i}{tabela2}<img
						src={link}
						alt="yes"
					/>{/each}
			</td>
		</tr>

		<tr>
			<td on:click={() => remover3(tabela3)}>
				{#each tabela3 as tabela3, i}{tabela3}<img
						src={link}
						alt="yes"
					/>{/each}
			</td>
		</tr>
	</table>

	<br />
	<br />
	<br />
	<button on:click={() => botaojogador1()}>Jogador 1</button>
	<button on:click={() => botaojogador2()}>Jogador 2</button>
	<br />
	<br />
	<VoltarMenu />
</body>