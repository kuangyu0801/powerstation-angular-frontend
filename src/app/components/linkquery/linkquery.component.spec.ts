import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkqueryComponent } from './linkquery.component';

describe('LinkqueryComponent', () => {
  let component: LinkqueryComponent;
  let fixture: ComponentFixture<LinkqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
