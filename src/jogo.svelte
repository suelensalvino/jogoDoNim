<script>
	

	
	let tabela= ['','','',''];
	let tabela1= ['','',''];
	let tabela2= ['',''];
	let tabela3= [''];
	
	



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
<style>
button {
		color: #000;
		background-color: #BB99FF;
		padding: .75em 1.5em;
		border: 2px solid black;
		border-radius: .25em;
		box-shadow: -.25em .25em 0 #000;
		cursor: pointer;
	}
	
	
</style>
<table>
	
		<tr>
			
				<td> <button on:click={() => remover(tabela) } >
					
				
					</button>
				{#each tabela as tabela,i}{tabela}<img src=https://imagepng.org/wp-content/uploads/2017/10/circulo-preto.png alt='yes' width=10 heigth=10>{/each} 
				</td>
		</tr>
	
	<tr>
			
				<td><button on:click={() => remover1(tabela1)}></button>
				{#each tabela1 as tabela1,i}{tabela1}<img src=https://imagepng.org/wp-content/uploads/2017/10/circulo-preto.png alt='yes' width=10 heigth=10>{/each} 
				</td>
		</tr>
	
	<tr>
			
				<td><button on:click={() => remover2(tabela2)}></button>
				{#each tabela2 as tabela2,i}{tabela2}<img src=https://imagepng.org/wp-content/uploads/2017/10/circulo-preto.png alt='yes' width=10 heigth=10>{/each} 
				</td> 
		</tr> 
	
	<tr>
			
				<td><button on:click={() => remover3(tabela3)}></button> 
					{#each tabela3 as tabela3,i}{tabela3}<img src=https://imagepng.org/wp-content/uploads/2017/10/circulo-preto.png alt='yes' width=10 heigth=10>{/each} 
				</td> 
		</tr>
	
	
	
	
</table>
