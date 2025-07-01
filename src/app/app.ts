import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from './profile/profile';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Profile, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="dsd"
}
