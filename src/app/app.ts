import { Component } from '@angular/core';
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
  name = "Jalpesh";
  x = 10;
  y =20;

   ButtonClicked(){
        console.log("button clicked bro :)")
        this.InnerFunction()
    }

    InnerFunction(){
      console.log("2nd function")
    }
}
