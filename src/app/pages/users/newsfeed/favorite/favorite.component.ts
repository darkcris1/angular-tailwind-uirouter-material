import { Component, OnInit } from '@angular/core';
import { user } from '$store/user.store';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  items = Array(9).fill(null);
  constructor() {}

  ngOnInit(): void {}
  changeName() {
    user.update((data) => {
      data.name = Math.random().toString();

      return data;
    });
  }
}
