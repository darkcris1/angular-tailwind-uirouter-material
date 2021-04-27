import { user } from '$store/user.store';
import { Component, OnInit } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/angular';

@Component({
  selector: 'app-favorite-id',
  templateUrl: './favorite-id.component.html',
  styleUrls: ['./favorite-id.component.scss'],
})
export class FavoriteIdComponent implements OnInit {
  favoriteId: string;
  user = user;

  constructor(private router: UIRouterGlobals) {
    this.favoriteId = router.params.id;
  }

  ngOnInit(): void {}
}
