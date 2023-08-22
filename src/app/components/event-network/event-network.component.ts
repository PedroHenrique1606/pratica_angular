import { Component } from '@angular/core';

@Component({
  selector: 'app-event-network',
  templateUrl: './event-network.component.html',
  styleUrls: ['./event-network.component.css']
})
export class EventNetworkComponent {
  showNetAndPass:boolean = false;
  networkName:string = 'Rapaz';
  networkPass:string = 'tá certo isso?';

  showNet(): void{
    this.showNetAndPass = true;
    const networkName = this.networkName;
    const networkPass = this.networkPass;
    console.log(`Rede: ${networkName}\nSenha: ${networkPass}`)
  }
}
