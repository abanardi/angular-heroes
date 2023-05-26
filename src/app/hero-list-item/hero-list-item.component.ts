import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.css']
})
export class HeroListItemComponent {
  @Input() id:string | undefined;
  @Input() name:string | undefined;
  @Output() cardClick: EventEmitter<number> = new EventEmitter();

  // onClick(heroId: number){
  //   this.cardClick.emit(heroId);
  // }

}
