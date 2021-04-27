import { urlsafe } from "./../../utils/http.util";
import { API_USERS } from "./../../constants/api.constant";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserProfileById(id: number | string) {
    return this.http.get(urlsafe(API_USERS, id, "profile")).toPromise();
  }
  getFollowersById(id: number | string) {
    return this.http.get(urlsafe(API_USERS, id, "followers")).toPromise();
  }
  getFollowingById(id: number | string) {
    return this.http.get(urlsafe(API_USERS, id, "following")).toPromise();
  }

  followUser(user: any) {
    return this.http.post(urlsafe(API_USERS, "follow"), user).toPromise();
  }
  unfollowUser(user: any) {
    return this.http.post(urlsafe(API_USERS, "unfollow"), user).toPromise();
  }
}
