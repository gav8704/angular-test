import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesToolbarComponent } from './notes-toolbar.component';

describe('NotesToolbarComponent', () => {
  let component: NotesToolbarComponent;
  let fixture: ComponentFixture<NotesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
