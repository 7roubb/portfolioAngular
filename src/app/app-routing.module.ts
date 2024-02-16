import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomeComponent}from'./home/home.component';
import{ AboutmeComponent}from'./aboutme/aboutme.component';
import{ ExperienceComponent}from'./experience/experience.component';
import{ContactComponent} from './contact/contact.component'
import{CertificationComponent} from './certification/certification.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutmeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'certif', component: CertificationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
