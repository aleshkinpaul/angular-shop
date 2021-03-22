import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFavouriteComponent } from './button-favourite.component';

describe('ButtonFavouriteComponent', () => {
  let component: ButtonFavouriteComponent;
  let fixture: ComponentFixture<ButtonFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
