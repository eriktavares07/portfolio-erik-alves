import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-erik-alves';

  ngAfterViewInit() {
    let toggle = document.querySelector('.toggle');
    let topbar = document.querySelector('.topbar');
    let nav = document.querySelector('.nav');
  }

  onToggleClick() {
    let toggle = document.querySelector('.toggle');
    let topbar = document.querySelector('.topbar');
    let main = document.querySelector('.main');
    let nav = document.querySelector('.nav');
    if (toggle != null && topbar !== null && nav !== null && main !== null) {
      toggle.classList.toggle('active');
      topbar.classList.toggle('active');
      nav.classList.toggle('active');
      main.classList.toggle('active');
    }
  }

  toogleMenu() {
    let main = document.querySelector('.main');
    let nav = document.querySelector('.nav');
    if (nav !== null && main !== null) {
      nav.classList.remove('active');
      main.classList.remove('active');
    }
  }

  switchTheme() {
    let themeSwitch = document.querySelector('.themeSwitch');
    let body = document.querySelector('body');
    if (themeSwitch !== null && body !== null) {
      body.classList.toggle('dark');
    }
  }
}
