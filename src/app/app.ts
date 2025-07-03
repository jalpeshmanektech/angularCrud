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
  task:string=""
  taskList:{id:number,task:string}[]=[]

  AddTask(){
    this.taskList.push({id:this.taskList.length+1, task:this.task})
  }

  DeleteTask(id:number){
    console.log(id);
    
    this.taskList=this.taskList.filter(x=> x.id!=id)
  }
}
