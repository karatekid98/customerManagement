import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Translate } from '../translate.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private translateService: Translate) { }

  ngOnInit(): void {
  }

  logOut(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }
  useLanguage(language): void {
    this.translateService.useLanguage(language);
  }
}
