import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note, NoteForm } from '../../models';
import { tap, switchMap, BehaviorSubject } from 'rxjs';
import { selectNoteById } from '../../state/notes.selectors';
import { Store } from '@ngrx/store';
import { NotesService } from '../../services/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { notEmptyStringRegExp } from '../../../../constants/validators-patterns';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent {
  note$ = new BehaviorSubject<Note | undefined>(undefined);
  isEditMode$ = new BehaviorSubject<boolean>(false);

  noteForm!: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store,
    private readonly notesService: NotesService,
    private readonly fb: FormBuilder
  ) {
    this.initForm();
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.store.select(selectNoteById(params['noteId']))
        ),
        tap((note) => {
          note && this.updateForm(note);
          this.isEditMode$.next(false);
        })
      )
      .subscribe(this.note$);
  }

  get title(): NoteForm['title'] {
    return (this.noteForm.value as NoteForm).title;
  }

  get description(): NoteForm['description'] {
    return (this.noteForm.value as NoteForm).description;
  }

  get isFormValid(): boolean {
    return this.noteForm.valid;
  }

  handleCancel(): void {
    const { title, description } = this.note$.value as Note;

    this.isEditMode$.next(false);
    this.noteForm.patchValue({
      title,
      description,
    });
  }

  handleEdit(): void {
    this.isEditMode$.next(true);
  }

  handleSaveNote(): void {
    if (!this.note$.value) {
      return;
    }

    const updatedNote: Note = {
      ...this.note$.value,
      title: this.title,
      description: this.description,
    };
    this.notesService.updateNote(updatedNote);
  }

  handleDeleteNote(noteId: Note['id']): void {
    this.notesService.removeNote(noteId);
  }

  updateForm(note: Note): void {
    this.noteForm.patchValue({
      title: note?.title,
      description: note?.description,
    });
  }

  initForm(): void {
    this.noteForm = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.pattern(notEmptyStringRegExp)],
      ],
      description: [
        '',
        [Validators.required, Validators.pattern(notEmptyStringRegExp)],
      ],
    });
  }
}
