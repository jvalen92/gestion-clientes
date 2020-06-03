import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Formulario } from '../models/forms';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  public formulario: Formulario
  public empleados: Empleado[]

  //variables principales
  public promedio: number;
  public salarios : number[]

  //objeto auxiliar para modificar un empleado
  public empleado: Empleado

  //lista de empleados para mostrar en la interfaz
  showEmpleados: String[]

  //variables bandera para mostrar contenido en la interfaz
  public flag: boolean;
  public actualizar: boolean;
  constructor() {

    this.formulario = new Formulario();
    this.empleados = []
    this.salarios = []
    this.promedio = 0;
    console.log(this.empleados);

    
    this.flag = false;
    this.actualizar = false;

    this.empleado = new Empleado(0, 0, 0, 0);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.formulario.empleados > 0 || this.formulario.meses > 0) {
      this.flag = true
    }

    console.log("formulario validado", this.flag);

    //valores del formulario
    let numEmpleados = this.formulario.empleados;
    let numMeses = this.formulario.meses;

    //variables para creacion de empleados
    let i = 0;
    let edad = 0
    let salario = 0;
    let pagoTotal = 0;

    while (i < numEmpleados) {

      edad = Math.floor(Math.random() * 60) + 21;
      salario = Math.floor(Math.random() * 50000) + 10000;
      pagoTotal = <any>numMeses * salario;

      this.empleados[i] = new Empleado(i, edad, salario, pagoTotal);
      this.salarios[i] = salario

      this.promedio = this.promedio + salario;

      i = i + 1;
    }

    this.showEmpleados = this.empleados
    this.promedio = this.promedio / numMeses

    this.actualizar = true;

  }

  updateForm(empleado) {
    console.log(empleado);
    let numMeses = this.formulario.meses;

    let newSalario = Number (prompt("ingrese el nuevo salario"));
    console.log(newSalario);
    empleado.salario = newSalario;
    empleado.pagoTotal = numMeses * newSalario;

    this.getPromedio(empleado.id,Number(newSalario),numMeses);


  }

  getPromedio(index:number,salario:number,meses:number){
    this.salarios[index] = salario;
    let total = 0;

    //calcula otra vez el promedio con los nuevos datos
    for (let i = 0; i < this.salarios.length; i++) {
      console.log(total,this.salarios[index]);
      
      total = total + +this.salarios[i];
    }

    this.promedio =  total / meses
    console.log(this.promedio);
    
  }

}
