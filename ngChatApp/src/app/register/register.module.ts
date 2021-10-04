import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterService } from './service/register.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [MatFormFieldModule, MatInputModule],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    
  ],
  providers: [RegisterService],
})
export class RegisterModule {}
