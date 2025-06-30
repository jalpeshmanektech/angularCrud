import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularCrud';
  name = "Jalpesh";
  x = 10;
  y =20;
}
