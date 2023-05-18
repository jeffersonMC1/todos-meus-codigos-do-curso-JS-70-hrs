import { doadores } from "."


export function Cadastrar(){

   const nome = prompt("informe o nome do paciente:")
   const idade = prompt("informe a idade do doador:")
   


    const doador = {
        nome:nome,
        idade:idade
    }


    doadores.push(doador)



}