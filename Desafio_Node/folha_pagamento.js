class Pagamento{
    constructor(vlr_hora, qnt_horas){
        this.vlr_hora = vlr_hora
        this.qnt_horas = qnt_horas
    }

    calculoPagamento(){
        let salario_bruto = this.vlr_hora * this.qnt_horas
        let imposto_renda
        let imposto_renda_taxa
        if (salario_bruto <= 900){
            imposto_renda = 0
            imposto_renda_taxa = 0
        } else if (salario_bruto <= 1500){
            imposto_renda = salario_bruto * 0.05
            imposto_renda_taxa = 5
        } else if (salario_bruto <= 2500){
            imposto_renda = salario_bruto * 0.1
            imposto_renda_taxa = 10
        } else{
            imposto_renda = salario_bruto * 0.2
            imposto_renda_taxa = 20
        }
        let INSS = salario_bruto * 0.1
        console.log(`Salário bruto (${this.vlr_hora} * ${this.qnt_horas}) : R$ ${salario_bruto.toFixed(2)}
( - ) IR (${imposto_renda_taxa}%)           : R$ ${imposto_renda.toFixed(2)}
( - ) INSS (10%)        : R$ ${INSS.toFixed(2)}
FGTS (11%)              : R$ ${(salario_bruto * 0.11).toFixed(2)}
Total de Descontos      : R$ ${(imposto_renda + INSS).toFixed(2)}
Salário Líquido         : R$ ${(salario_bruto-(imposto_renda + INSS)).toFixed(2)}
        `) 
    }
}

let pagamento = new Pagamento(5, 220)
pagamento.calculoPagamento()