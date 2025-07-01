import { Component, effect, signal } from '@angular/core';
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

  constructor(){
    effect(()=>{
      console.log(this.count());
    })
  }

  count:any=signal(10);
  selectedStudent="";
  students = [
    {name:"Jalpesh", age:20, Surname:"Nakum"},
    {name:"John", age:22, Surname:"Peter"},
    {name:"Shan", age:23, Surname:"Alex"}
  ]

  GetStudentData(val:string){
    this.selectedStudent= val;
  }

  UpdateCount(val:string){
    this.count.set(this.count()+1)
  }
}
