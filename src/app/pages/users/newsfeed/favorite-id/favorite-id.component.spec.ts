import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteIdComponent } from './favorite-id.component';

describe('FavoriteIdComponent', () => {
  let component: FavoriteIdComponent;
  let fixture: ComponentFixture<FavoriteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
