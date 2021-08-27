import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxTextEditorModule } from 'ngx-text-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let config = {
    apiKey: "AIzaSyDJlfLVlG3BSmPmmwc1NlMwKPIC2F4Hq4g",
    authDomain: "scribe-65857.firebaseapp.com",
    databaseURL: "https://scribe-65857.firebaseio.com",
    projectId: "scribe-65857",
    storageBucket: "scribe-65857.appspot.com",
    messagingSenderId: "1064107472452",
    appId: "1:1064107472452:web:1d497be7df8f7226eb2e11",
    measurementId: "G-B11LNEXDDF"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgxTextEditorModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, LoginComponent, HomeComponent, CapitalizePipe, MenuComponent, MyblogsComponent, ProfileComponent, CreateComponent, PostComponent, ViewComponent, CommentsComponent, EditProfileComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, {provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
