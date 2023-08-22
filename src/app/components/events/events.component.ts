import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  show:boolean = false;

  //se eu não retornaar nada, retorna VOID
  clickEvent(): void{
    
    //sempre ele vai pegar o valor da variável ele vai interver, se é true vira false, se é false vira true.
     this.show = !this.show; //toggle
  }
}
