import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //extends herda um classe
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia); //herda o construtor do construtor da classe pai
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
