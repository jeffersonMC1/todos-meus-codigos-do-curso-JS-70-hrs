// export function calcular_area(num1,num2)
// {
//     const altura = num1
//     const largura = num2
//     const area = altura * largura
    
//     console.log(area);

// }

// const prim_num = Number(prompt("digite um numero:"))
// const seg_num = Number(prompt("digite o segundo numero"))

// calcular_area(prim_num,seg_num);

//----------------------------------------------------------------

// function funNome (nome,nom)
// {
// console.log(`olá ${nome}`);
// }

// funNome("felipe")
// funNome("jefferson")
// funNome("arthur")

//----------------------------------------------------------------

// function somar (num1,num2){
//     const soma = num1 + num2
//     return soma

// }

// const somatorio = somar(10,50)
// console.log(somatorio);

//------------------------------------------------------------------

// const Numeros = [12,32,43,53]

// function array(arrayNumeros){
//     const num1 = arrayNumeros[0]
//     const num2 = arrayNumeros[arrayNumeros.length -1]
//     return [num1,num2]
// }

// const numFiltrados = array(Numeros)

// console.log(numFiltrados);

//------------------------------------------------------------------

//função nao nomeada
// const soma = function(n1,n2){
//     return n1 + n2
// }

//------------------------------------------------------------------

//arrow function
// const somar = (n1, n2) =>{
//     return n1 + n2
// }

//--------------------------------------------------------------------

// function msg (){
//     const mensagem = "eu sou jefferson macedo, tenho 18 anos, moro em são leopoldo e sou estudante"
//     return mensagem
// }

// msg()
// console.log(msg());

//-------------------------------------------------------------------------------

// const nome = prompt("informe seu nome")
// const idade = Number(prompt(`informe sua idade ${nome}:`))
// const cidade = prompt(`informe sua cidade ${nome}:`)
// const profissao = prompt("informe sua profissão")

// function mostrar(nome,idade,cidade,profissao)
// {
//     return (`olá ${nome}, a sua idade é:${idade} você mora na cidade:${cidade} e trabalha como:${profissao}`)
// }

// mostrar(nome,idade,cidade,profissao)
// console.log(mostrar(nome,idade,cidade,profissao));

//------------------------------------------------------------------------------------------

// const num1 = Number(prompt("informe um numero"))
// const num2 = Number(prompt("informe mais outro numero"))

// function soma(num1,num2){
//     const somar = num1 + num2
//     return somar
// }

// soma(num1,num2)

// console.log(`a soma destes numeros é:${soma(num1,num2)}`);

//------------------------------------------------------------------------

// const num1 = Number(prompt("informe um numero"))
// const num2 = Number(prompt("informe mais outro numero"))

// function soma(num1,num2){
//     const somar = num1 + num2
//     return somar
// }

// soma(num1,num2)

// console.log(`a soma destes numeros é:${soma(num1,num2)}`);

//------------------------------------------------------------------------------------

// const n1 = Number(prompt("infrome um numero"))
// const n2 = Number(prompt("informe outro numero"))

// function somar (n1,n2){
//     return n1 % n2 === 0
// }

//-----------------------------------------------------------------------------------

// function mensagem(msg)
// {
//     const tamMsg = msg.length
//     const msgMaiscula = msg.toUppercase()

//     return [tamMsg , msgMaiscula]
// }

// console.log(mensagem("é na sola da bota, é na palma da bota"));

//------------------------------------------------------------------------------------------

// function somar(n1,n2){
//     return n1 + n2
// }

// function subtrair(n1,n2){
//     return n1 - n2
// }

// function multiplicar(n1,n2){
//     return n1 * n2
// }

// function dividir(n1,n2){
//     return n1 / n2
// }

// const n1 = Number(prompt("digite um numero"))
// const n2 = Number(prompt("digite outro numero"))

// console.log(`numeros inseridos ${n1} e ${n2}`);
// console.log(somar(n1,n2));
// console.log(subtrair(n1,n2));
// console.log(multiplicar(n1,n2));
// console.log(dividir(n1,n2));

//------------------------------------------------------------------------------

// const imprimir = (msg) => {
//     console.log(msg);
// }

// const receber = (n1,n2) => {
//     const somar = n1 + n2
//     imprimir(somar)
// }

// receber()

//-----------------------------------------------------------------------------------------------------

// const pessoa = {

// nome:"maria",
// idade:18,


// }

// const outraPessoa = {...pessoa}

// pessoa.nome = "mariana"

// console.log("pessoa: " , pessoa);
// console.log("outra pessoa: " , outraPessoa);

//-------------------------------------------------------------------------------------------

// const filme = {
//     //definição da função filmes
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
//     //inicio do vetor
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		],
//         //fim do vetor
//         //inicio do vetor 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
//         //fim do vetor de filmes
// }

// //o codigo vai imprimir os vetores/arrays
// console.log(filme.elenco[0])
// //imprime na tela o primeiro nome do elenco encontrado na posição 0
// console.log(filme.elenco[filme.elenco.length - 1])
// //mostra o ultimo nome do elenco
// console.log(filme.transmissoesHoje[2])
// //mostra a transmissão na posição 2 do array

//--------------------------------------------------------------------------------------------------------------

// const cachorro = {
//     //definição da função
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}
// //os 3 pontos copiam a função e a variavel gato recebe a função

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
// //a função tartaruga rebe a função gato e troca as letras

// //aqui o codigo esta chamando as funções
// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//--------------------------------------------------------------------------------------------------------------

// function minhaFuncao(objeto, propriedade) {
//     // a função espera dois valores
// 	return objeto[propriedade]
//     //os valores retornam para o usuario
// }

// const pessoa = {
//     //inicio do objeto
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// //função e objetos são chamados para aparecer ns tela do usuario
// console.log(minhaFuncao(pessoa, "backender"))
// //esta variavel foi definida como falsa
// console.log(minhaFuncao(pessoa, "altura"))
// //esta variavel nao foi definida no codigo, portando o valor dela sera undefined

//------------------------------------------------------------------------------------------------------------

// const pessoa = {
//     nome: "Vitor Hugo", 
//     apelidos: ["Vitinho", "Vitão", "Vit"]
//  }
 
//  function listarPessoa (pessoa){
//     return `meu nome é:${pessoa.nome} mas pode me chamar de:${pessoa.apelidos}`
    
//  }

//  const novoApelido = {
//     ...pessoa,
//     nome:"jefferson",
//     apelidos:["jeff","longuista","zé da manga"]
//  }

// listarPessoa(pessoa)

// console.log(listarPessoa(pessoa));
// console.log(listarPessoa(novoApelido));

//------------------------------------------------------------------------------------------------------------

// const pessoa = {
//     nome: jose,
//     idade: 30,
//     profissao:"desenvolvedor"
// }

// const pessoa2 = {
//     nome:"ana",
//     idade:21,
//     profissao:"CEO dela mesma"
// }

// function filtrarPessoa(usuario){
//     const nomePessoa = usuario.nome
//     const tamahoNome = usuario.nome.length
//     const idadePessoa = usuario.idade
//     const profissaoPessoa = usuario.profissao
//     const tamanhoProfissao = usuario.profissao.length

//     return(nomePessoa, tamahoNome, idadePessoa, profissaoPessoa, tamanhoProfissao)
// }

// console.log(filtrarPessoa(pessoa));
// console.log(filtrarPessoa(pessoa2));

//------------------------------------------------------------------------------------------------------------------------

const carrinho = []

const fruta = {
    nome:"morango",
    disponibilidade:true
}
const fruta2 = {
    nome:"banana",
    disponibilidade
}
const fruta3 = {
     
}




