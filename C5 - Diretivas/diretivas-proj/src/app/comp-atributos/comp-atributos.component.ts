import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {

estilo: string = "enabled"
corFundo: string = "blue"
corDaFonte: string = "red"
item: string = ""
lista: string[] = []
isEnableBlock: boolean = true

trocar(){
  if(this.estilo === "disable"){
    this.estilo = "enabled"
  }else{
    this.estilo = "disable"
  }
}

adicionarLista(){
  this.lista.push(this.item)
}

}
