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
  protected title = 'angularCrud';
  name:any = "Jalpesh";
  x:number = 10;
  y:number =20;

   ButtonClicked(){
        console.log("button clicked bro :)")
        this.sum(this.x,this.y)
    }

    sum(a:number, b:number){
      console.log(a + b);
    }
}
