import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//declarer des variables ou des fontions
//a utiliser dans ses codes html

export class AppComponent {
  actions : Array<any> = [
  {title: "Home", "route":"/home", icon : "house"},
  {title: "Products", "route":"/products", icon : "search"},
  {title: "New Product", "route":"/newProduct", icon : "safe"},
  ];

  currentAction :any;

  setCurrentAction(action :any){
    this.currentAction = action;
  }

}
