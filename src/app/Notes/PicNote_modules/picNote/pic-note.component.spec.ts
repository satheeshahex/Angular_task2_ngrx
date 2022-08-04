import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicNoteComponent } from './pic-note.component';

describe('CustomerAddComponent', () => {
  let component: PicNoteComponent;
  let fixture: ComponentFixture<PicNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
