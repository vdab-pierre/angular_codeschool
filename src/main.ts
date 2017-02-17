import {NgModule,Component} from '@angular/core'; //angular library,
//component is a function that enables us to create components, basic building blocks of an angular2 app
//a component controls a portion of our screen
import {BrowserModule} from '@angular/platform-browser'; //needed for running Angular websites
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//Angular library that will render the website, launch the app


//a component consists of decorator code and a class
@Component({
    selector:'my-app', //the css selector for the html el we want the component to load
    template:'<h1>Ultra Racing</h1>'
}) //use to apply our component to our class:typescript feature
class AppComponent{}

//main module that loads our components
@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule],//loads the required dependencies
    bootstrap:[AppComponent]//the component that gets loaded first
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);//load our AppModule