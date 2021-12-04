import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostKvService {

  constructor( private http: HttpClient ) { }

  postkvUrl ="https://twotter-workers.twotter.workers.dev/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPosts(): Observable<Post[]>{
    let allposts= this.http.get<Post[]>(this.postkvUrl+"posts")
    .pipe(
      catchError(this.handleError<Post[]>('getPosts', []))
    );
    console.log(allposts)
    return allposts;
  }

  addPost(post:Post): Observable<Post>{
    return this.http.post<Post>(this.postkvUrl+"posts", post, this.httpOptions).pipe(catchError(this.handleError<Post>('addPost')));
  }

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}