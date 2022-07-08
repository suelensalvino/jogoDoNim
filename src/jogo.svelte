<script>
	
	let tabela= [1,1,1,1,1];
	let tabela1= [1,1,1,1];
	let tabela2= [1,1,1];
	let tabela3= [1];

	function remover(i){
    tabela = tabela.slice(0,-1)
		console.log(tabela)
  }
	
	function remover1(i){
    tabela1 = tabela1.slice(0,-1)
		console.log(tabela1)
  }
	
	function remover2(i){
    tabela2 = tabela2.slice(0,-1)
		console.log(tabela2)
  }
	function remover3(i){
    tabela3 = tabela3.slice(0,-1)
		console.log(tabela3)
  }
	
	

</script>

<h1>Jogo</h1>

<table>
	
		<tr>
			
				<td on:click={() => remover(tabela)}>
				{tabela}
				</td>
		</tr>
	
	<tr>
			
				<td on:click={() => remover1(tabela1)}>
				{tabela1}
				</td>
		</tr>
	
	<tr>
			
				<td on:click={() => remover2(tabela2)}>
				{tabela2}
				</td>
		</tr>
	
	<tr>
			
				<td on:click={() => remover3(tabela3)}>
				{tabela3}
				</td>
		</tr>
	
</table>
