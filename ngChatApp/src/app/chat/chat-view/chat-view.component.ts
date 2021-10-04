import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from 'src/app/register/models/register-view-models';
import { RegisterService } from 'src/app/register/service/register.service';
import { Chat } from '../model/chat.model';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  chatRooms: string[] = ['Fun with Taxes', 'The Dark-Web','Everything NG', 'Mystic-1-4-U'];
  registerForm!: FormGroup;
  registrations: RegisterForm[] =[];

  messageForm!:FormGroup;

  conversation:Chat[] = [];

  constructor(private registerServce: RegisterService) { }

  ngOnInit(): void {  
    this.messageForm= new FormGroup({
       message: new FormControl(null,[
         Validators.required
       ])
    }); 
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

  sendMessage(data:any):void{
   console.log(data.message);
   const newConversation: Chat[] = [{
     message: data.message,
     timeStamp: "+122",
     chatRoom: "Fun with Taxes",
     screenName: "RandomUser"
   }, ...this.conversation];
   this.conversation = newConversation;
   console.log("newConversation", newConversation);
   //this.conversation[0].message = data.message;

  }
}
