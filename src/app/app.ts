import { Component, computed, effect, signal } from '@angular/core';
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
  x=signal(10);
  y=signal(10);
  answer = computed(()=>this.x()+this.y())

  UpdateValue(){
    this.x.set(100);
  }
}
