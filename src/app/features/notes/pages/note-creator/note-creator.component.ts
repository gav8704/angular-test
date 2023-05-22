import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEmptyString } from '../../../../helpers';
import { Note } from '../../models';
import { NotesService } from '../../services/notes.service';

interface CreateNoteForm {
  title: string;
  description: string;
}

const notEmptyStringRegExp = /^(\s+\S+\s*)*(?!\s).*$/;

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss'],
})
export class NoteCreatorComponent implements OnInit {
  createNoteForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly notesService: NotesService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get title(): CreateNoteForm['title'] {
    return (this.createNoteForm.value as CreateNoteForm).title;
  }

  get description(): CreateNoteForm['description'] {
    return (this.createNoteForm.value as CreateNoteForm).description;
  }

  get isFormValid(): boolean {
    return this.createNoteForm.valid;
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
    this.createNoteForm = this.fb.group({
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
