import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {}

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

  onMouseMove(event: any) {
    const button = document.querySelector<HTMLElement>('.banner');

    if (button) {
      const readout = document.querySelector('p');
      const { x, y } = button.getBoundingClientRect();
      button.style.setProperty('--x', `${event.clientX - x}`);
      button.style.setProperty('--y', `${event.clientY - y}`);
    }
  }
}
