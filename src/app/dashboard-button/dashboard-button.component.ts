import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.css']
})
export class DashboardButtonComponent {
  @Input() text: string | undefined;
  @Input() heroId: string| undefined;
  @Input() color: string | undefined;
  @Input() colorHover: string | undefined;
  @Output() btnClick = new EventEmitter;
  hover:boolean = false;

  onClick(){
    this.btnClick.emit(this.heroId);
  }


}
