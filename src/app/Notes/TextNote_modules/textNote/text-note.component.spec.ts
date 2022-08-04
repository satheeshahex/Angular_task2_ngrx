import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNoteComponent } from './text-note.component';

describe('CustomerAddComponent', () => {
  let component: TextNoteComponent;
  let fixture: ComponentFixture<TextNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
