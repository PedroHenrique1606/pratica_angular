// change-number.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent {

  @Output() ChangeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.ChangeNumber.emit(this);
  }
}