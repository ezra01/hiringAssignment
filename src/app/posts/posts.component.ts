import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostKvService } from '../post-kv.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postKvService: PostKvService) {}
  posts: Post [] = [];
  // samplePost: Post={
  //   date: "Dec 2",
  //   username:"Suuuuuper_daemon",
  //   content: "Who made this post?",
  //   pic: ''
  // };
  getPosts(): void{
    this.postKvService.getPosts().subscribe(posts => this.posts = posts);
  }
  

  addPost(username: string, content: string, pic: string ): void {
    let date = new Date().toUTCString().slice(5, 11);
    username = username.trim();
    if (!username) { return; }
    this.postKvService.addPost({ date, username,content,pic } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }

  ngOnInit(): void {
    this.getPosts();
  }
   
}
