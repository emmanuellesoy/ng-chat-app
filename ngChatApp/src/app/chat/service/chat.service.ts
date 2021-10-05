import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from '../model/chat.model';


export const NG_CONVERSTAION ='ngChatterOfChat';

@Injectable()
export class ChatService {
  private readonly chats: BehaviorSubject<Chat[]>;

  get chats$(): Observable<Chat[]> {
    return this.chats.asObservable();
  }

  constructor(private http: HttpClient) { 
    NG_CONVERSTAION
   const initial: Chat[] =
   localStorage.getItem(NG_CONVERSTAION) === null
     ? [{
        message:'',
        timeStamp:'',
        chatRoom:'',
        screenName:''
       }]
     : JSON.parse(localStorage.getItem(NG_CONVERSTAION) as any);

    this.chats = new BehaviorSubject<Chat[]>(initial);
  }

  sendChat(currentChat: Chat){
    // console.log(`user register for service -> ${currentChat.screenName}`);
    // console.log('service');
    // const newRegisterFormCollection: Chat[] = [...this.chats.value, currentChat]
    // localStorage.setItem(NG_CONVERSTAION, JSON.stringify(newRegisterFormCollection));
    // this.chats.next(newRegisterFormCollection);
    this.http
      .post<Chat[]>('https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage')
      .toPromise()
      .then((items) => {
        this.chats.next(items); //yo line le notify garxa, next ko meaning, yo inventory lai jasle subscribe gareko xa teslai notify janxa
      });

      https://us-central1-pka-forms-fef14.cloudfunctions.net/setMessage
  }

  fetchConversationChatList(): void {
    this.http
      .get<Chat[]>('https://us-central1-pka-forms-fef14.cloudfunctions.net/getMessages?room=')
      .toPromise()
      .then((items) => {
        this.chats.next(items); //yo line le notify garxa, next ko meaning, yo inventory lai jasle subscribe gareko xa teslai notify janxa
      });
  }

}
