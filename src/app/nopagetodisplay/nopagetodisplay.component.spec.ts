import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagetodisplayComponent } from './nopagetodisplay.component';

describe('NopagetodisplayComponent', () => {
  let component: NopagetodisplayComponent;
  let fixture: ComponentFixture<NopagetodisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopagetodisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopagetodisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
