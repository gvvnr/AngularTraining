import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePadComponent } from './note-pad.component';

describe('NotePadComponent', () => {
  let component: NotePadComponent;
  let fixture: ComponentFixture<NotePadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
