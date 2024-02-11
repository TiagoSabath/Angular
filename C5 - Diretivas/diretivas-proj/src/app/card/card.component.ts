import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  produtos: string[] = [];
  menuType: string = "";

  constructor() {
    this.produtos = ["mouse", "teclado", "cabo", "font"];
  }

  ngOnInit(): void {

  }
  adicionar(){
    this.produtos.push("Tiago")
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }
}
