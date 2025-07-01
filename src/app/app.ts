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
  students = [
    {name:"Jalpesh", age:20, Surname:"Nakum"},
    {name:"John", age:22, Surname:"Peter"},
    {name:"Shan", age:23, Surname:"Alex"}
  ]
}
