import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Input() colorHover: string | undefined;
  @Output() btnClick = new EventEmitter;
  hover:boolean = false;

  onClick(){
    this.btnClick.emit();
  }


}
