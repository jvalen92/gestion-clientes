export class Empleado {
    public id: Number;
    public edad: Number;
    public cargo: String;
    public salario: Number;
    public pagoTotal : Number;

    constructor(
        id : Number,
        edad : Number,
        salario : Number,
        pagoTotal : Number
    ) {
        this.id = id;
        this.edad = edad;
        this.cargo = "Analista";
        this.salario = salario;
        this.pagoTotal = pagoTotal;
        
}

}