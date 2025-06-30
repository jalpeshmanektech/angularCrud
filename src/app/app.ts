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
name=""  
displayValue=""
SetValue(val:string){
  this.name=val;
}
SetChangedValue(val:Event){
  this.name=(val.target as HTMLInputElement).value;
}
GetValue(){
  this.displayValue = this.name;
}
}
