class Televisao{
    constructor(){
        this.canalAtual = 4;
        this.volumeAtual = 30;
    }
    
    get canalAtual(){
        return this._canalAtual;
    }

    set canalAtual(newCanal){
        if(typeof newCanal != "number"){
            console.log("O canal não mudará");
        } else {
            this._canalAtual = newCanal;
        }
    }

    aumentarVolume(){
        this.volumeAtual++;
    }
    
    diminuirVolume(){
        this.volumeAtual--;
    }

    aumentarCanal(){
        this.canalAtual++;
    }

    diminuirCanal(){
        this.canalAtual--;
    }

    trocarCanal(newCanal){
        this.canalAtual = newCanal; 
    }

    consultarCanal(){
        console.log(this.canalAtual);
    }

    consultarVolume(){
        console.log(this.volumeAtual);
    }
}

export { Televisao }