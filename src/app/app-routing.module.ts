import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './Contact/Contact.component';
import { PortiflioComponent } from './portiflio/portiflio.component';
import { HomeComponent } from './home/home.component';
import { NotfoundedComponent } from './notfounded/notfounded.component';

const routes: Routes = [
  { path:'',component: HomeComponent , title: 'home'},
  { path:'about',component: AboutComponent , title: 'about'},
  { path:'portiflio',component: PortiflioComponent ,title: 'portiflio'},
  { path:'contact',component: ContactComponent , title: 'contact'},
  { path:"**",component: NotfoundedComponent , title: '404'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
