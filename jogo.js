function nim(array,l,c){//l=linha  c=coluna
  for (i=l;i<array.length;i++){
    for(j=c;j<array.length;j++){
     if (j==c) {//condição de parada na coluna
       array[i][j]= null//declaracao para 'retirar' o elemento
       } 
      else{j++}//incrementa no laço
    }
  }
}



array =[
  [1,2,3],
  [1,2],
  [1]
]

nim(array,0,0)//somente para exemplificar

console.log(array)//para testar o codigo



//falta a condição de parada e a identificação do botão
