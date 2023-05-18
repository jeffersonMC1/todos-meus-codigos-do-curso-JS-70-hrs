import { Cadastrar } from "./cadastros";

let senha
let msg

export const doadores= []

while (op <= 5) {

    senha = Number(prompt("informe uma senha para entrar no sistema:"))

    if (senha === 123) {
        alert("senha correta");

        while (true) {
           msg = (` ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ====
           1. Cadastrar doador
           2. Listar doadores
           3. Buscar doador por tipo sanguíneo
           4. Buscar doador por data da última doação
           5. Sair`)

           alert(msg)
            let op = Number(prompt("Escolha uma opção:"))

            if (op === 1)
            {
              Cadastrar
            }

            

        }

    }
    else {
        window.alert("senha incorreta")
        senha= 13
        break
    }
}

