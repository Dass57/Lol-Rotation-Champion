import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpellComponent } from './card-spell.component';

describe('CardSpellComponent', () => {
  let component: CardSpellComponent;
  let fixture: ComponentFixture<CardSpellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSpellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
