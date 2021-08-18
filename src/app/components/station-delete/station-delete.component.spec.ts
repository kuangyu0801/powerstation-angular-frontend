import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDeleteComponent } from './station-delete.component';

describe('StationDeleteComponent', () => {
  let component: StationDeleteComponent;
  let fixture: ComponentFixture<StationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
