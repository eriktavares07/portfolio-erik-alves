import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.controlAnimationOnStart();
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

  onMouseMove(event: any) {
    const button = document.querySelector<HTMLElement>('.banner');

    if (button) {
      const readout = document.querySelector('p');
      const { x, y } = button.getBoundingClientRect();
      button.style.setProperty('--x', `${event.clientX - x}`);
      button.style.setProperty('--y', `${event.clientY - y}`);
    }
  }

  activeLink(id: any) {
    let linksLi = document.querySelectorAll<HTMLElement>('.nav-item');
    if (linksLi) {
      linksLi.forEach((element: any) => {
        element.classList.remove('active');
      });
      const actualLink = document.getElementById(id);
      if (actualLink) actualLink.classList.add('active');
    }
  }

  controlAnimationOnStart() {
    let hi_title = document.getElementById('hi_title');
    let i_am_title = document.getElementById('i_am_title');
    let role_title = document.getElementById('role_title');
    let btn = document.getElementById('download-cv-btn');
    if (hi_title && i_am_title && role_title && btn) {
      i_am_title.style.display = 'none';
      role_title.style.display = 'none';
      hi_title.classList.add('typewriter');

      setTimeout(() => {
        hi_title?.classList.remove('typewriter');
        if (i_am_title) {
          i_am_title.style.display = 'flex';
          i_am_title.classList.add('typewriter');
        }
        setTimeout(() => {
          if (i_am_title && role_title) {
            i_am_title.classList.remove('typewriter');
            role_title.style.display = 'flex';
            role_title.classList.add('typewriter');
            setTimeout(() => {
              if (btn) btn.classList.add('active');
            }, 2000);
          }
        }, 2000);
      }, 2000);
    }
  }
}
