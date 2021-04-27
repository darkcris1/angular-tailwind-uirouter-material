import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface ImageModel {
  id: string;
  imageUrl: string;
  mimeType: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: "root",
})
export class ImgurService {
  imgurUrl = "https://img-hoster.herokuapp.com/photo";
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmlnaW5zIjpbInJlZ2V4Omluc3RhLXB3YVxcLm5ldGxpZnlcXC5hcHAiLCJyZWdleDpuZ3JvayIsImxvY2FsaG9zdCIsImluc3RhLXB3YS5uZXRsaWZ5LmFwcCIsImRhcmtjcmlzMS5naXRodWIuaW8iXSwiaWF0IjoxNTE2MjM5MDIyfQ.q82SptMb7xIWOXnLnXqhFg9_2ggRjCwZXlnKvrelydc";

  constructor(private http: HttpClient) {}
  uploadImage(imageForm: FormData) {
    const headers = new HttpHeaders().set("Authorization", this.token);
    return this.http
      .post<ImageModel>(this.imgurUrl, imageForm, { headers })
      .toPromise();
  }

  getImageDataById(id: any) {
    return this.http.get<ImageModel>(`${this.imgurUrl}/${id}`).toPromise();
  }
}
