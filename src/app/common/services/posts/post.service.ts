import { map, tap } from "rxjs/operators";
import { urlsafe } from "$common/utils/http.util";
import { API_POSTS } from "$common/constants/api.constant";
import { Post, POST_RESULT_MODEL } from "$common/models/post.model";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  addPosts(newPost: FormData): Promise<Post> {
    return this.http.post<Post>(API_POSTS, newPost).toPromise();
  }
  deletePostById(id: any) {
    return this.http.delete<Post>(urlsafe(API_POSTS, id)).toPromise();
  }
  getPostById(id: number | string): Promise<Post> {
    return this.http.get<Post>(urlsafe(API_POSTS, id)).toPromise();
  }

  fetchPost({ page = 1 }) {
    const params = new HttpParams().set("page", `${page}`);

    return this.http
      .get<POST_RESULT_MODEL>(urlsafe(API_POSTS, "posts"), { params })
      .toPromise();
  }

  likePostById(id: any, body: { data: any; user: any }) {
    return this.http
      .post<Post>(urlsafe(API_POSTS, id, "like"), body)
      .toPromise();
  }
  commentPostById(id: any, body: { data: any; user: any }) {
    return this.http
      .post<Post>(urlsafe(API_POSTS, id, "comment"), body)
      .toPromise();
  }
  deletePostComment(postId: any, commentId: any) {
    return this.http
      .delete<Post>(urlsafe(API_POSTS, postId, "comment", commentId))
      .toPromise();
  }
}
