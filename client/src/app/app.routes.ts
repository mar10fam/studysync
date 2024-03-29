import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './messages/messages.component';
import { MyStudyPartnersComponent } from './my-study-partners/my-study-partners.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        'path': '',
        component: HomeComponent,
        'title': 'home'
    },
    {
        'path': 'contact',
        component: ContactComponent,
        'title': 'contact'
    },
    {
        'path': 'messages',
        component: MessagesComponent,
        'title': 'messages'
    },
    {
        'path': 'myStudyPartners',
        component: MyStudyPartnersComponent,
        'title': 'myStudyPartners'
    },
    {
        'path': 'login',
        component: LoginComponent,
        'title': 'loginPage'
    }
];
