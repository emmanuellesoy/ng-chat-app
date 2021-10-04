import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from 'src/app/register/models/register-view-models';
import { RegisterService } from 'src/app/register/service/register.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  chatRooms: string[] = ['Fun with Taxes', 'The Dark-Web','Everything NG', 'Mystic-1-4-U'];
  registerForm!: FormGroup;
  registrations: RegisterForm[] =[];

  constructor(private registerServce: RegisterService) { }

  ngOnInit(): void {   
    this.registerServce.registrations$.subscribe((registerData) => {
      this.registrations = registerData; 
    });
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
    console.log(registerFormValues.selectedChatRoom+ "name"+ registerFormValues.screenName);
    for(let i = 0; i < this.registrations.length; i++){
      if(this.registrations[i].screenName === registerFormValues.screenName && this.registrations[i].selectedChatRoom === registerFormValues.selectedChatRoom){
        console.log("success");
        return ;
      }
    }
    console.log(" outside");
  }


}
