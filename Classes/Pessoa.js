class Pessoa{
    constructor(name, dataDeNascimento, cidade){
        this.name = name;
        this.dataDeNascimento = dataDeNascimento;
        this.cidade = cidade;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName.charAt(0).toUpperCase() + newName.substring(1);
    }

    get dataDeNascimento(){
        return this._dataDeNascimento;
    }

    set dataDeNascimento(newDate){
        this._dataDeNascimento = newDate.split("/").reverse().join("/");
    }

    get cidade(){
        return this._cidade;
    }

    set cidade(newCity){
        this._cidade = newCity;
    }

    calcularIdade(){
        let dataAtual = new Date();
        let dataNascimento = new Date(this.dataDeNascimento);

        let tempoDoDia = 1000 * 60 * 60 * 24;
        let diff = Math.abs(dataAtual - dataNascimento);

        return ((diff/tempoDoDia)/365).toFixed(0);
    }

    static calcularIdade(data){
        let dataAtual = new Date();
        let dataNascimento = new Date(data);

        let tempoDoDia = 1000 * 60 * 60 * 24;
        let diff = Math.abs(dataAtual - dataNascimento);

        return ((diff/tempoDoDia)/365).toFixed(0);
    }

    apresentar(){
        return `${this.name} possui ${Pessoa.calcularIdade(this.dataDeNascimento)} anos de idade e atualmente está morando em ${this.cidade}`
    }


}

export { Pessoa }