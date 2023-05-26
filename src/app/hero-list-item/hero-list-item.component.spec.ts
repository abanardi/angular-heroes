import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListItemComponent } from './hero-list-item.component';

describe('HeroListItemComponent', () => {
  let component: HeroListItemComponent;
  let fixture: ComponentFixture<HeroListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroListItemComponent]
    });
    fixture = TestBed.createComponent(HeroListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
