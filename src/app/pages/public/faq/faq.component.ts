import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  panelOpenState = false;
  faqData = [
    { question: 'What is what ?', answer: 'What, is a what of a what' },
    { question: 'What is what ?', answer: 'What, is a what of a what' },
    { question: 'What is what ?', answer: 'What, is a what of a what' },
    { question: 'What is what ?', answer: 'What, is a what of a what' },
    { question: 'What is what ?', answer: 'What, is a what of a what' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
