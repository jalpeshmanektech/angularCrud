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
count= signal(0);
displayheading = false;

constructor(){
  effect(()=>{
    if(this.count() == 2){
      this.displayheading = true,
      setTimeout(()=> this.displayheading= false, 2000)
    }else{
      this.displayheading = false
    }
  })
}

updateCount(){
  this.count.set(this.count()+1)
}

}
