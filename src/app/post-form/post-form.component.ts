import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  submitPost = (form: NgForm) => {
    let newPost: Post = {
      title: form.form.value.title,
      thought: form.form.value.thought,
    };
    this.submitted.emit(newPost);
    form.reset();
  };
}
