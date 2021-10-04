import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, switchMap } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { RegisterForm } from '../models/register-view-models';

export const NG_CHATTER ='ngChatter';

@Injectable()
export class RegisterService{
  private readonly registrations: BehaviorSubject<RegisterForm[]>;

  get registrations$(): Observable<RegisterForm[]> {
    return this.registrations.asObservable();
  }

  constructor(private http: HttpClient) {
   NG_CHATTER;
   const initial: RegisterForm[] =
      localStorage.getItem(NG_CHATTER) === null
        ? [{
            screenName: '',
            selectedRoomChat: ''
          }]
        : JSON.parse(localStorage.getItem(NG_CHATTER) as any);
        this.registrations = new BehaviorSubject<RegisterForm[]>(initial);
  }

  register(currentRegisterForm: RegisterForm){
    console.log(`user register for service -> ${currentRegisterForm.screenName}`);
    console.log('service');
    const newRegisterFormCollection: RegisterForm[] = [...this.registrations.value, currentRegisterForm]
    localStorage.setItem(NG_CHATTER, JSON.stringify(newRegisterFormCollection));
    this.registrations.next(newRegisterFormCollection);
    }
  }
