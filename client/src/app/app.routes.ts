import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    { 'path': 'contact', component: ContactComponent }, 
    { 'path': 'messages', component: MessagesComponent },
    { 'path': 'login', component: LoginComponent }

];
