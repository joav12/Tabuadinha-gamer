let botao = document.getElementById("butao");
let texto = document.getElementById("texto");
var numero = 0;

botao.addEventListener("click", function() {
  let numT = document.getElementById("NT").value

  texto.innerHTML = ``

  if(numT >= 100){
    texto.innerHTML = `O cara por favor, coloca um número menor, vai quebrar meu sitezinho bonito`

  }else{
    for(i=0; i < 10; i++){
      numero = numT * (i + 1)
   
       texto.innerHTML += `<p>${numT} X ${i + 1} = ${numero}</p>`
       
     }
  }

});