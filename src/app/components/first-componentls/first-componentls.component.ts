import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-componentls',
  templateUrl: './first-componentls.component.html',
  styleUrls: ['./first-componentls.component.css']
})

export class FirstComponentlsComponent {
  @Input() userName:string  = ''
  @Input() userData!: {email:string, role:any};
  
  
  name: string = "Pedro";
  age: number = 18;
}
