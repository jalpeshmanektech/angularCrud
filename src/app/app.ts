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
  count=0
  handlerCount(val:string){
    if(val=="plus"){
      this.count++;
    }else if(val == "minus"){
      if(this.count > 0)
      {
        this.count--;
      }
    }else{
      this.count = 0;
    }
  }
}
