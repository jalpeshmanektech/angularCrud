import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  color:Number = 1;
  displayInput:boolean = false;

  setColor(color:Number){
    this.color=color;
  }

  setInputColor(val:Event){
    this.color = parseInt((val.target as HTMLInputElement).value)
  }

  toggleBox(){
    this.displayInput=!this.displayInput;
  }
}
