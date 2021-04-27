import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links = [
    { text: 'About', href: '/about' },
    { text: 'Newsfeed', href: '/newsfeed' },
    { text: 'Login', href: '/login' },
    { text: 'Register', href: '/register' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
