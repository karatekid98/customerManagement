import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Translate } from '../translate.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public lang = 'true';
  public selectedLang = true;
  constructor(private router: Router, private translateService: Translate) {}

  ngOnInit(): void {
    if (this.selectedLang) {
      /*add logics*/
    }
  }

  logOut(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  useLanguage(language): void {
    this.translateService.useLanguage(language);
  }

  public languageSelected(lang): void {
    if (lang === 'en') {
      localStorage.setItem('language', 'true');
      this.selectedLang = true;
    } else {
      localStorage.setItem('language', 'false');
      this.selectedLang = false;
    }
  }

  goToCustomers(): void {
    this.router.navigate(['/customers']);
  }

  goToBooks(): void {
    this.router.navigate(['/books']);
  }
}
