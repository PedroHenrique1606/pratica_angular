import { Component } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent {
  canShow:boolean = true;
  name:string = 'Rogério';
}
