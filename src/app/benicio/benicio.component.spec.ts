import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenicioComponent } from './benicio.component';

describe('BenicioComponent', () => {
  let component: BenicioComponent;
  let fixture: ComponentFixture<BenicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
