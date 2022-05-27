import { Cliente } from "./Cliente.js";

export class contaCorrente {
    static numeroDeContas = 0
    agencia;
    #cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor
        }
        
    }
    get cliente(){
        return this.#cliente
    }


    #saldo = 0;

    get saldo(){
        return this.#saldo
    }

    constructor(cliente, agencia){
        this.cliente = cliente
        this.agencia = agencia
        contaCorrente.numeroDeContas += 1
    }

    sacar(valor){
        if(this.#saldo >= valor){

            this.#saldo -= valor
            return valor
        
        }else{
            console.log("você não tem saldo o suficiente");
        }
        
    }

    depositar(valor){
        if(valor < 0) return

        this.#saldo += valor
    }

    tranferencia(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}