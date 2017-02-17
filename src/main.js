"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //angular library,
//component is a function that enables us to create components, basic building blocks of an angular2 app
//a component controls a portion of our screen
var platform_browser_1 = require('@angular/platform-browser'); //needed for running Angular websites
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic'); //Angular library that will render the website, launch the app
//a component consists of decorator code and a class
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ultra Racing";
        this.carPart = {
            "id": 1,
            "name": 'Super Tires',
            "description": 'Thes tires are the very best',
            "inStock": 5
        };
    }
    AppComponent = __decorate([
        //Angular library that will render the website, launch the app
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n        <h2>{{carPart.name}}</h2>\n        <p>{{carPart.description}}</p>\n        <p>{{carPart.inStock}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//main module that loads our components
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [AppComponent],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [AppComponent] //the component that gets loaded first
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule); //load our AppModule
//# sourceMappingURL=main.js.map