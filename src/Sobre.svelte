<svelte:head>
	<link rel="stylesheet" href="/style/sobre.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
    import VoltarMenu from './VoltarMenu.svelte'
</script>

<h1>SOBRE</h1>
<p>
    Essa versão do jogo Nim foi desenvolvida pelos estudantes do 1º período do curso de Sistemas para Internet, do IFPE Campus Igarassu, 
    na disciplina de Lógica de Programação sob a orientação do professor Allan Diego Lima. 
</p>
<br>
<br>
<h3>
    Nossa equipe
    <br>
    <img src="https://uploads-ssl.webflow.com/62880a16b76ff004d7c4dab9/6288d8de521f039134f3bf2e_line-detail-4.svg" alt="">
</h3>

<p class="devs">
    Davi Luna
    <br>
    <a href="https://github.com/davifurao">
    <img class="icone" src="./public/images/github.png" alt="github">
    </a>
    <a href="">
        <img class="icone" src="./public/images/linkedin.png" alt="linkedin">
    </a>
</p>
<br>
<p class="devs">
    Liliane Alves
    <br>
    <a href="https://github.com/LiliAlves">
    <img class="icone" src="./public/images/github.png" alt="github">
    </a>
    <a href="https://www.linkedin.com/in/liliane-alves-219218100/">
        <img class="icone" src="./public/images/linkedin.png" alt="linkedin">
    </a>
</p>
<br>
<p class="devs">
    Suelen Salvino
    <br>
    <a href="https://github.com/suelensalvino">
    <img class="icone" src="./public/images/github.png" alt="github">
    </a>
    <a href="https://www.linkedin.com/in/suelensalvino/">
        <img class="icone" src="./public/images/linkedin.png" alt="linkedin">
    </a>
</p>
<br>
<br>
<br>
<VoltarMenu/>
<br>
<br>