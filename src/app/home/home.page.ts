import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mensagem: string = "";
  constructor() {}

    exibirMensagem(){
      this.mensagem = 'bem vindo ao teclado'
    }

}
