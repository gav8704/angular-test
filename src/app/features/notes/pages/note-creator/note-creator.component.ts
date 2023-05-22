import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEmptyString } from '../../../../helpers';
import { Note, NoteForm } from '../../models';
import { NotesService } from '../../services/notes.service';
import { notEmptyStringRegExp } from '../../../../constants/validators-patterns';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss'],
})
export class NoteCreatorComponent implements OnInit {
  noteForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly notesService: NotesService
  ) {}

  ngOnInit(): void {
    this.initForm();
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

  createNote(): void {
    const now = new Date();
    const newNote: Note = {
      id: String(now.getTime()),
      date: String(now),
      title: this.title.trim(),
      description: this.description.trim(),
    };

    this.notesService.addNote(newNote);
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
