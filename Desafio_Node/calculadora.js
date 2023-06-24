class Calculadora{
    constructor(valores){
        this.valores = valores
    }

    #fatorial(valor){
        if (valor < 0){
            return "Fatorial inválido"
        } else if (valor == 0){
            return 1
        } else{
            let resultado = 1
            let index = valor
            for (let i = 0; i < valor; i++){
                resultado = resultado * index
                index = index - 1
            }
            return resultado
        }
    }

    #media(valores){
        let somatorio = 0
        for (let i = 0; i < valores.length; i++){
            somatorio += valores[i]
        }
        return somatorio / valores.length
    }

    #variancia(media, valores){
        let somatorio = 0
        let resultado
        for (let i = 0; i < valores.length; i++){
            resultado = (valores[i] - media) * (valores[i] - media)
            somatorio += resultado
        }
        return somatorio / valores.length
    }

    #desvio(variancia){
        return Math.sqrt(variancia)
    }

    #impares(valores){
        let string = ""
        for (let i = 0; i < valores.length; i++){
            if ((valores[i] % 2) != 0){
                string += valores[i]
                if (i != valores.length){
                    string += ","
                }
            }
        }
        return string
    }

    printAll(){
        console.log(`Fatorial do primeiro elemento: ${this.#fatorial(this.valores[0])}
Média aritmética: ${this.#media(this.valores)}
Variância: ${this.#variancia(this.#media(this.valores), this.valores)}
Desvio padrão: ${this.#desvio(this.#variancia(this.#media(this.valores), this.valores))}
Números ímpares: ${this.#impares(this.valores)}
        `)
    }
}

calculadora = new Calculadora([7, 8, 10, 24, 21, 38, 157, 3, 16])
calculadora.printAll()