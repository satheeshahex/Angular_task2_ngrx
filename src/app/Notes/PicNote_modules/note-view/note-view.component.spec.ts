import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicNoteViewComponent } from './note-view.component';

describe('CustomerViewComponent', () => {
  let component: PicNoteViewComponent;
  let fixture: ComponentFixture<PicNoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicNoteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicNoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
