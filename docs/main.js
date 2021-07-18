(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Projects\portfolio-erik-alves\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AppComponent {
    constructor() {
        this.title = 'portfolio-erik-alves';
    }
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 229, vars: 0, consts: [[1, "container"], [1, "nav"], ["href", "#banner", 3, "click"], ["href", "#about", 3, "click"], ["href", "#services", 3, "click"], ["href", "#projects", 3, "click"], ["href", "#testimonials", 3, "click"], ["href", "#contact", 3, "click"], [1, "themeSwitch", 3, "click"], [1, "main"], [1, "topbar"], ["href", "#", 1, "logo"], [1, "toggle", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["id", "banner", 1, "banner"], [1, "content"], [1, "imgBack"], ["src", "../assets/img/profile-cat.jpeg", "alt", "", 1, "profile-img"], ["href", "#", 1, "btn"], [1, "socialMedias"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-github"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["id", "about", 1, "about", "adjust"], [1, "title"], [1, "textBox"], [1, "imgBx"], ["src", "../assets/img/profile-cat.jpeg", "alt", ""], ["id", "services", 1, "services", "adjust"], [1, "serviceBox"], ["id", "projects", 1, "projects", "adjust"], [1, "workBox"], [1, "textBx"], ["id", "testimonials", 1, "testimonials", "adjust"], [1, "testimonialsBox"], ["id", "contact", 1, "contact", "adjust"], [1, "contactForm"], [1, "row"], ["type", "text", "name", "", "id", "", "placeholder", "First Name "], ["type", "text", "name", "", "id", "", "placeholder", "Last Name "], ["type", "text", "name", "", "id", "", "placeholder", "Email"], ["type", "text", "name", "", "id", "", "placeholder", "Mobile No."], [1, "row2"], ["name", "", "id", "", "cols", "30", "rows", "4", "placeholder", "Message"], ["type", "submit", "value", "Send"], [1, "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener() { return ctx.toogleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { return ctx.toogleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { return ctx.toogleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { return ctx.toogleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_16_listener() { return ctx.toogleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_19_listener() { return ctx.toogleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_21_listener() { return ctx.switchTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Erik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_26_listener() { return ctx.onToggleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Erik Alves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "I'm a Creative Front End WebDeveloper.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Download My CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "em", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "em", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita eius deleniti? Hic eum iure perspiciatis. Temporibus facere voluptas excepturi, vero, velit cupiditate perferendis at iure accusantium, ducimus aperiam corporis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis voluptates alias iste eos nulla vero illum quas. Id aut, eligendi consequatur facere deserunt aperiam similique dolorem beatae dolores aliquid quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dolore impedit debitis eum repellendus, eos fugiat ipsa eaque temporibus sapiente perferendis. Sit cupiditate ex nostrum fugit praesentium sapiente accusamus ut. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, officiis, consectetur minima vitae mollitia nobis repellendus nihil aspernatur nemo quod sed iure qui ipsa at maiores, ea eos hic dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur? Non pariatur perspiciatis asperiores iure sed ipsum esse error, totam aut unde quas perferendis incidunt sit hic rerum nulla nobis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur dolore deserunt voluptatum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Web Design 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur accusantium natus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Web Design 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur accusantium natus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Web Design 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur accusantium natus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Web Design 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur accusantium natus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Web Design 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur accusantium natus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Web Design 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequatur accusantium natus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Recent Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sint accusantium magnam laboriosam cupiditate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Project 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Project 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Project 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Project 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Project 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Project 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Project 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Project 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Project 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sint accusantium magnam laboriosam cupiditate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, animi sit! Aperiam, nulla eaque cupiditate, tenetur est incidunt nesciunt sunt a mollitia, similique repellat in corporis! Quo tenetur id beatae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Someone Famouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Website Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, animi sit! Aperiam, nulla eaque cupiditate, tenetur est incidunt nesciunt sunt a mollitia, similique repellat in corporis! Quo tenetur id beatae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Someone Famouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Website Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, animi sit! Aperiam, nulla eaque cupiditate, tenetur est incidunt nesciunt sunt a mollitia, similique repellat in corporis! Quo tenetur id beatae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Someone Famouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Website Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, animi sit! Aperiam, nulla eaque cupiditate, tenetur est incidunt nesciunt sunt a mollitia, similique repellat in corporis! Quo tenetur id beatae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Someone Famouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Website Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Let's say hi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sint accusantium magnam laboriosam cupiditate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "textarea", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n  height: 100%;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  background-color: var(--color-white);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  right: 0;\n  transition: width 0.5s, right 0.5s;\n}\n.nav.active[_ngcontent-%COMP%] {\n  width: 0;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px 40px;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  list-style: none;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n  white-space: normal;\n  display: flex;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: var(--color-black);\n  font-weight: 500;\n  letter-spacing: 2px;\n  opacity: 0.5;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.main[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - 300px);\n  background: var(--color-white);\n  left: 0;\n  min-height: 100vh;\n  transition: width 0.5s, left 0.5s;\n}\n.main.active[_ngcontent-%COMP%] {\n  width: calc(100% - 0px);\n}\n.main[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: calc(100% - 300px);\n  left: 0;\n  background: var(--color-white2);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  height: 60px;\n  padding: 0 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10000;\n  transition: width 0.5s, right 0.5s;\n}\n.dark[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.main[_ngcontent-%COMP%]   .topbar.active[_ngcontent-%COMP%] {\n  width: calc(100% - 0px);\n}\n.main[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: var(--color-black);\n  font-weight: 700;\n  text-decoration: none;\n  font-size: 1.4em;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.main[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  color: var(--color-black);\n}\nsection[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\n.banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.banner[_ngcontent-%COMP%]   .imgBack[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 300px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n.banner[_ngcontent-%COMP%]   .imgBack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nh3[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 1.4em;\n  color: var(--color-black);\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\np[_ngcontent-%COMP%] {\n  color: #777;\n}\n.btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  background: var(--color-black2);\n  font-weight: 400;\n  letter-spacing: 1px;\n  margin-top: 10px;\n  text-decoration: none;\n  color: #fff;\n}\n.socialMedias[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  display: flex;\n}\n.socialMedias[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.socialMedias[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.05);\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: var(--color-black);\n  font-size: 1.2em;\n}\n.socialMedias[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--color-black2);\n  color: #fff;\n}\n.adjust[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  padding: 0 40px;\n  padding-top: 80px;\n  background: var(--color-white);\n  color: var(--color-black);\n  display: inline-block;\n  width: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 1.2em;\n  margin-bottom: 30px;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -10px;\n  width: 50px;\n  height: 1px;\n  background: var(--color-black);\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .textBox[_ngcontent-%COMP%] {\n  width: 49%;\n  min-width: 49%;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.services[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  margin: 40px 0;\n  gap: 20px;\n}\n.services[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 50px 20px;\n  display: flex;\n  background: var(--color-white2);\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.services[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px;\n}\n.services[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-weight: 600;\n  color: var(--color-black);\n  text-align: center;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.services[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin: 40px 0;\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .workBox[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .workBox[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform: translateY(0);\n  transition: 0.5s ease-in-out;\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .workBox[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .workBox[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .workBox[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--color-black2);\n  transform: translateY(100%);\n  transition: 0.5s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .workBox[_ngcontent-%COMP%]:hover   .textBx[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .workBox[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1em;\n}\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin: 40px 0;\n}\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .testimonialsBox[_ngcontent-%COMP%] {\n  background: var(--color-white2);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n  padding: 20px;\n}\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .testimonialsBox[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .testimonialsBox[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .testimonialsBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .testimonialsBox[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 1em;\n  color: var(--color-black);\n  line-height: 1.2em;\n  font-weight: 600;\n  border-right: 4px solid var(--color-black);\n  padding-right: 10px;\n}\n.testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .testimonialsBox[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: initial;\n  color: #aaa;\n  letter-spacing: 1px;\n  font-weight: 300;\n  font-size: 0.7em;\n}\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n}\n.contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 700px;\n  margin-top: 20px;\n}\n.contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-top: 20px;\n}\n.contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n.contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  outline: none;\n  color: var(--color-black);\n  background: var(--color-white2);\n  font-size: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 200px;\n}\n.contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background: var(--color-black2);\n  color: #fff;\n  padding: 10px 30px;\n  display: inline-block;\n  font-weight: 500;\n  letter-spacing: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  text-transform: uppercase;\n  max-width: 150px;\n  border: none;\n}\n.copyright[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  padding: 10px 40px;\n  text-align: center;\n}\n\n.themeSwitch[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 40px;\n  width: 30px;\n  height: 30px;\n  background: var(--color-black);\n  cursor: pointer;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--color-white);\n}\n.themeSwitch[_ngcontent-%COMP%]::before {\n  content: \"\uF186\";\n  font-family: fontAwesome;\n}\n.themeSwitch[_ngcontent-%COMP%]::after {\n  content: \"Switch to Dark mode\";\n  position: absolute;\n  left: 40px;\n  font-size: 0.7em;\n  color: var(--color-black);\n  white-space: nowrap;\n  font-weight: 300;\n  letter-spacing: 1px;\n  pointer-events: none;\n}\n.dark[_ngcontent-%COMP%]   .themeSwitch[_ngcontent-%COMP%]::after {\n  content: \"Switch to Light mode\";\n}\n@media (max-width: 992px) {\n  .themeSwitch[_ngcontent-%COMP%] {\n    left: 20px;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    right: -100%;\n  }\n\n  .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .nav.active[_ngcontent-%COMP%] {\n    width: 100%;\n    right: 0;\n    z-index: 1000;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0;\n  }\n\n  .main.active[_ngcontent-%COMP%] {\n    left: -100%;\n  }\n\n  .main[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%] {\n    width: 100%;\n    right: 0;\n    padding: 0 20px;\n  }\n\n  .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .banner[_ngcontent-%COMP%]   .imgBack[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n\n  .banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .adjust[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    padding-top: 80px;\n  }\n\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .textBox[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n\n  .about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 20px;\n  }\n\n  .services[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .services[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .projects[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .testimonials[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .contact[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtBQUVGO0FBQ0E7RUFDRSxRQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxVQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUVBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FBQUY7QUFHQTtFQUNFLHVCQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxPQUFBO0VBQ0EsK0JBQUE7RUFFQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUFERjtBQUlBO0VBQ0UsMkNBQUE7QUFERjtBQUlBO0VBQ0UsdUJBQUE7QUFERjtBQUlBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREY7QUFJQTtFQUNFLGtC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QUFBO0VBTkY7O0VBU0E7SUFDRSxxQ0FBQTtFQU5GOztFQVNBO0lBQ0UscUNBQUE7RUFORjtBQUNGO0FBVUE7RUFDRTtJQUNFLHFDQUFBO0VBUkY7O0VBV0E7SUFDRSxxQ0FBQTtFQVJGOztFQVdBO0lBQ0UscUNBQUE7RUFSRjs7RUFXQTtJQUNFLHFDQUFBO0VBUkY7O0VBV0E7SUFDRSxtQkFBQTtFQVJGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzLCByaWdodCAwLjVzO1xufVxuXG4ubmF2LmFjdGl2ZSB7XG4gIHdpZHRoOiAwO1xufVxuXG4ubmF2IHVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG59XG5cbi5uYXYgdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2IHVsIGxpIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubmF2IHVsIGxpIGE6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBsZWZ0OiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cywgbGVmdCAwLjVzO1xufVxuXG4ubWFpbi5hY3RpdmUge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbn1cblxuLm1haW4gLnRvcGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZTIpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsIHJpZ2h0IDAuNXM7XG59XG5cbi5kYXJrIC5tYWluIC50b3BiYXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubWFpbiAudG9wYmFyLmFjdGl2ZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xufVxuXG4ubWFpbiAudG9wYmFyIC5sb2dvIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEuNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubWFpbiAudG9wYmFyIC50b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cblxuc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uYmFubmVyIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYW5uZXIgLmltZ0JhY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYmFubmVyIC5pbWdCYWNrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaDMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnAge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJsYWNrMik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zb2NpYWxNZWRpYXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNvY2lhbE1lZGlhcyBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zb2NpYWxNZWRpYXMgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5zb2NpYWxNZWRpYXMgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJsYWNrMik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWRqdXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlIGgyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGl0bGUgaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmxhY2spO1xufVxuXG4uYWJvdXQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5hYm91dCAuY29udGVudCAudGV4dEJveCB7XG4gIHdpZHRoOiA0OSU7XG4gIG1pbi13aWR0aDogNDklO1xufVxuXG4uYWJvdXQgLmNvbnRlbnQgLmltZ0J4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5hYm91dCAuY29udGVudCAuaW1nQnggaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2VydmljZXMgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBtYXJnaW46IDQwcHggMDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uc2VydmljZXMgLmNvbnRlbnQgLnNlcnZpY2VCb3gge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUyKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZUJveCBpbWcge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbi5zZXJ2aWNlcyAuY29udGVudCAuc2VydmljZUJveCBoMiB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNlcnZpY2VzIC5jb250ZW50IC5zZXJ2aWNlQm94IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0cyAuY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbi5wcm9qZWN0cyAuY29udGVudCAud29ya0JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0cyAuY29udGVudCAud29ya0JveCAuaW1nQngge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3RzIC5jb250ZW50IC53b3JrQm94OmhvdmVyIC5pbWdCeCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG59XG5cbi5wcm9qZWN0cyAuY29udGVudCAud29ya0JveCAuaW1nQnggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJvamVjdHMgLmNvbnRlbnQgLndvcmtCb3ggLnRleHRCeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFjazIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdHMgLmNvbnRlbnQgLndvcmtCb3g6aG92ZXIgLnRleHRCeCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLnByb2plY3RzIC5jb250ZW50IC53b3JrQm94IC50ZXh0QnggaDMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuXG4udGVzdGltb25pYWxzIC5jb250ZW50IC50ZXN0aW1vbmlhbHNCb3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLnRlc3RpbW9uaWFsc0JveCAuaW1nQngge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXN0aW1vbmlhbHMgLmNvbnRlbnQgLnRlc3RpbW9uaWFsc0JveCAuaW1nQnggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGVzdGltb25pYWxzIC5jb250ZW50IC50ZXN0aW1vbmlhbHNCb3ggcCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnRlc3RpbW9uaWFscyAuY29udGVudCAudGVzdGltb25pYWxzQm94IGg0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICBsaW5lLWhlaWdodDogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnRlc3RpbW9uaWFscyAuY29udGVudCAudGVzdGltb25pYWxzQm94IGg0IHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgY29sb3I6ICNhYWE7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFjdCAuY29udGFjdEZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGFjdCAuY29udGFjdEZvcm0gLnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb250YWN0IC5jb250YWN0Rm9ybSAucm93MiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRhY3QgLmNvbnRhY3RGb3JtIC5yb3cgaW5wdXQsXG4uY29udGFjdCAuY29udGFjdEZvcm0gLnJvdzIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZTIpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNvbnRhY3QgLmNvbnRhY3RGb3JtIC5yb3cyIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY29udGFjdCAuY29udGFjdEZvcm0gLnJvdzIgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmxhY2syKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBkYXJrIHRoZW1lKi9cbi50aGVtZVN3aXRjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA0MHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cblxuLnRoZW1lU3dpdGNoOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GhlwiO1xuICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XG59XG5cbi50aGVtZVN3aXRjaDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlN3aXRjaCB0byBEYXJrIG1vZGVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MHB4O1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRhcmsgLnRoZW1lU3dpdGNoOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiU3dpdGNoIHRvIExpZ2h0IG1vZGVcIjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC50aGVtZVN3aXRjaCB7XG4gICAgbGVmdDogMjBweDtcbiAgfVxuXG4gIC5uYXYge1xuICAgIHJpZ2h0OiAtMTAwJTtcbiAgfVxuXG4gIC5uYXYgdWwge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgfVxuXG4gIC5uYXYuYWN0aXZlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAubWFpbi5hY3RpdmUge1xuICAgIGxlZnQ6IC0xMDAlO1xuICB9XG5cbiAgLm1haW4gLnRvcGJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5cbiAgLm5hdmlnYXRpb24gdWwge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgfVxuXG4gIC5iYW5uZXIgLmltZ0JhY2sge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG5cbiAgLmJhbm5lciBoMyxcbi5iYW5uZXIgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmFkanVzdCB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICB9XG5cbiAgLmFib3V0IC5jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmFib3V0IC5jb250ZW50IC50ZXh0Qm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYWJvdXQgLmNvbnRlbnQgLmltZ0J4IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLnNlcnZpY2VzIC5jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbiAgLnByb2plY3RzIC5jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNlcnZpY2VzIC5jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG5cbiAgLnByb2plY3RzIC5jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG5cbiAgLnRlc3RpbW9uaWFscyAuY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgfVxuXG4gIC5jb250YWN0IC5jb250YWN0Rm9ybSAucm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map