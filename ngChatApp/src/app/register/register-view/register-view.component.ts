import { AnimationBuilder } from '@angular/animations';
import { getParseErrors } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RegisterForm } from '../models/register-view-models';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {
  chatRooms: string[] = ['Fun with Taxes', 'The Dark-Web','Everything NG', 'Mystic-1-4-U'];
  registerForm!: FormGroup;

  constructor(private registerService:RegisterService, private router:Router)
    {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      screenName:new FormControl(null, [
        Validators.required
      ]),
      selectedChatRoom:new FormControl(null, [
        Validators.required
      ])
    })
  }

  onSubmit(registerFormValues: RegisterForm):void{
    console.log("Inside on submit")
    console.log("Screen name is " + registerFormValues.screenName)
    console.log("Chat Room is " + registerFormValues.selectedChatRoom[0])
    if(this.registerForm.invalid){
      console.log("Invalid but not returning for now")
      return ;
    }
    this.registerService.register(this.registerForm.value);

  }

}
