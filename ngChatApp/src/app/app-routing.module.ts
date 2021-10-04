import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { RegisterViewComponent } from './register/register-view/register-view.component';

const routes: Routes = [
  { path: 'register', component: RegisterViewComponent },
  {path:'chat', component:ChatViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
