import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererexpertComponent } from './gererexpert.component';

describe('GererexpertComponent', () => {
  let component: GererexpertComponent;
  let fixture: ComponentFixture<GererexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererexpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
