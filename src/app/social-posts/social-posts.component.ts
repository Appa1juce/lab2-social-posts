import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  myPosts: Post[] = [
    {
      title: 'Something about tuesday',
      thought: 'Today seems long',
    },
    {
      title: 'Angular is a pain',
      thought: 'Angular make Mitch angry',
    },
    {
      title: 'input,output',
      thought: 'interesting',
    },
  ];
  showForm: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number) => {
    this.myPosts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post);
    this.toggleForm();
  };

  toggleForm = () => {
    this.showForm = !this.showForm;
  };
}
