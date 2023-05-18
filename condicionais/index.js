// const num1 = Number(prompt("informe um numero:"))
// const num2 = Number(prompt("informe um segundo numero"))

// function numeros(num1,num2){
//     if(num1 > num2)
//     {
//         console.log(`o ${num1} é maior que ${num2}`);
//     }
//     if (num1 < num2)
//     {
//         console.log(`o ${num1} é menor que ${num2}`);
//     }
//     if (num1 === num2)
//     {
//         console.log("os numeros são iguais");
//     }
// }
// numeros(num1,num2)

//---------------------------------------------------------------------

// let pais = prompt("informe o seu pais").toLowerCase()

// switch (pais) {
//     case "inglaterra":
//         console.log("ingles")
//         break
//     case "eua":
//         console.log("estudunidense")
//         break
//     case "brasil":
//         console.log("brasileiro");
//         break
//     default:
//         console.log("nacionalidade não encontrada");
//         break
// }

//-----------------------------------------------------------------------------

// let pokemon = prompt("informe um pokemon inicial:").toLowerCase()

// switch(pokemon){
//     case "bulbasauro":
//         console.log("bulbasauro: veneno e planta");
//         break
//     case "charmander":
//         console.log("charmander: fogo");
//     case "squirtle":
//         console.log("squirtle: agua");
//         break
//     case "pikachu":
//         console.log("pikachu: eletrico");
//         break
//     default:
//         console.log("informe o nome de um pokemon");
//         break
// }

//--------------------------------------------------------------------------

// const ensino = prompt("você concluiu o ensino medio?")
// const idade = Number(prompt("informe sua idade?"))
// const facul = prompt("você esta fazendo outra faculdade?")

// function matricula(ensino,idade,facul) {
//     if (ensino === "sim" && idade >= 18 && facul === "nao")
//      {
//        console.log("você pode se matricular, parabens!");
//      }  
//      else
//      {
//         if (idade < 18) 
//         {
//         console.log("você é menor de idade, segura tua emoção");            
//         }
//         if (ensino === "nao")
//         {
//             console.log("vai estuda, volta pra escola");
//         }
//         if (facul === "sim") 
//         {
//             console.log("termina essa primeiro...");
//         }
//     }



// }

// matricula(ensino,idade,facul)

//-------------------------------------------------------------------------------------------

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)
// //definições de variaveis e realiza as perguntas

// if (numero % 2 === 0) {
//     //este if faz uma divisão que pega o resto dela, caso o resto for 0 dará este resultado
//   console.log("Passou no teste.")

// } else {
//   console.log("Não passou no teste.")
//   //caso o resto da divisão for 1 ele não passara no teste
// }

// // -------------------------------------------------------------------------------------------------

// let fruta = prompt("Escolha uma fruta")
// let preco
// //inicia uma variavel e pergunta a fruta

// switch (fruta) {
//     //inicia um comando switch case e estabelece o preço nas frutas
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     //se a opção maça for escolhida sera apresentado o preço dela
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // tirando o break da pera o codigo ira apresentar uma falha e qualquer
// // escolha levara ao preço da pera

// -----------------------------------------------------------------------------------------------

// const numero = Number(prompt("Digite o primeiro número."))
// //primeira linha do codigo imprime a pergunta para o usuario

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//----------------------------------------------------------------------

// const idade = Number(prompt("digite a sua idade:"))

// if (idade >= 18)
// {
//     console.log("você pode dirigir");
// }
// else
// {
//     console.log("você não pode dirigir");
// }

//------------------------------------------------------------

// const turno = prompt("digite M(matutino), V(vespertino) e N(noturno)").toLowerCase()

// if (turno === "M".toLowerCase()) 
// {
// console.log("bom dia");    
// }
// if (turno === "V".toLowerCase())
// {
// console.log("boa tarde");   
// }
// if (turno === "N".toLowerCase()) 
// {
// console.log("boa noite");
// }

//---------------------------------------------------------------------------------------------

// const turno = prompt("digite M(matutino), V(vespertino) e N(noturno)").toLowerCase()

// switch (turno){
//       case "M":
//         console.log("bom dia");
//         break;
//       case "V":
//         console.log("boa tarde");
//         break;
//       case "N":
//         console.log("boa noite");
//         break;
// }

//-------------------------------------------------------------------------------------------




