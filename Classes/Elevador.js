class Elevador{    
    constructor(numAndares, capacidadeTotal){
        this.andarAtual = 0;
        this.totalAndares = numAndares;
        this.capacidadeTotal = capacidadeTotal;
        this.totalDePessoas = [];
    }

    get totalAndares(){
        return this._totalAndares;
    }

    set totalAndares(newValue){

        if(typeof newValue != "number"){
            this.totalAndares = 0;
            alert(`Era esperado tipo number foi recebido ${typeof newValue}, total de andares alterado para 0`);
        } else{
            this._totalAndares = newValue;
        }
    }


    entrar(passenger){
        if(this.totalDePessoas.length < this.capacidadeTotal){
            this.totalDePessoas.push(passenger);
        }
    }

    sair(passenger){
        let posicao = this.totalDePessoas.indexOf(passenger);

        if(posicao != -1){
            this.totalDePessoas.splice(posicao, 1);
        } else {
            alert("Passageiro não encontrado!");
        }
    }

    subir(){
        if(this.andarAtual < this.totalAndares){
            this.andarAtual++;
        }
    }
    
    descer(){
        if(this.andarAtual != 0){
            this.andarAtual--;
        }
    }

}

export { Elevador }