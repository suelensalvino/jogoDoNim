<svelte:head>
	<link rel="stylesheet" href="/style/jogar.css">
</svelte:head>
<script>
	
	
	let tabela= ['','','',''];
	let tabela1= ['','',''];
	let tabela2= ['',''];
	let tabela3= [''];
	
	var contador=0;
	

	
	function parada(contador){
		if (contador==10){
			 return 'Parabéns!!!Você ganhou'
		}else{
			return 'Bom jogo'
		}
	}
	
	function remover(i){
    tabela = tabela.slice(0,-1)
		console.log(tabela);
		
		t()
		console.log(contador)
  }
	
	function t(tabela){
		if(tabela=[]){
			contador++
		}
	}
	
	function remover1(i){
    tabela1 = tabela1.slice(0,-1)
		console.log(tabela1);
		t1()
		console.log(contador)
	
  }
	
	function t1(tabela1){
		if(tabela1=[]){
			contador++
		}
	}
	
	function remover2(i){
    tabela2 = tabela2.slice(0,-1)
		console.log(tabela2);
		t2()
	console.log(contador)
		
  }
	function t2(tabela2){
		if(tabela2=[]){
			contador++ 
		}
	}
	
	function remover3(i){
    tabela3 = tabela3.slice(0,-1)
		console.log(tabela3);
	t3()
		console.log(contador)
	
  }
	function t3(tabela3){
		if (tabela3=[]){
			contador ++
		}
	}

	
	
let link= '/public/images/moeda.png'
</script>






<body>
	


<h1>
	{parada(contador)}
	</h1>




<table>
	
		<tr>
			
				<td on:click={() => remover(tabela)}>
				{#each tabela as tabela,i}{tabela}<img src={link} alt='yes'>{/each} 
				</td>
		</tr>
	
	<tr>
			
				<td on:click={() => remover1(tabela1)}>
				{#each tabela1 as tabela1,i}{tabela1}<img src={link} alt='yes'>{/each} 
				</td>
		</tr>
	
	<tr>
			
				<td on:click={() => remover2(tabela2)}>
				{#each tabela2 as tabela2,i}{tabela2}<img src={link} alt='yes'>{/each} 
				</td> 
		</tr> 
	
	<tr>
			
				<td on:click={() => remover3(tabela3)}> 
					{#each tabela3 as tabela3,i}{tabela3}<img src={link} alt='yes'>{/each} 
				</td> 
		</tr>
	
	
	
	
</table>

	</body>
