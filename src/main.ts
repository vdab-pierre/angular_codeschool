import {NgModule,Component} from '@angular/core'; //angular library,
//component is a function that enables us to create components, basic building blocks of an angular2 app
//a component controls a portion of our screen
import {BrowserModule} from '@angular/platform-browser'; //needed for running Angular websites
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//Angular library that will render the website, launch the app


//a component consists of decorator code and a class
@Component({
    selector:'my-app', //the css selector for the html el we want the component to load
    template:`<h1>{{title}}</h1>
        <h2>{{carPart.name}}</h2>
        <p>{{carPart.description}}</p>
        <p>{{carPart.inStock}}</p>`
}) //use to apply our component to our class:typescript feature
class AppComponent{
    title="Ultra Racing";
    carPart={
        "id":1,
        "name":'Super Tires',
        "description":'Thes tires are the very best',
        "inStock":5
    };
}

//main module that loads our components
@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule],//loads the required dependencies
    bootstrap:[AppComponent]//the component that gets loaded first
})
class AppModule{
}

platformBrowserDynamic().bootstrapModule(AppModule);//load our AppModule