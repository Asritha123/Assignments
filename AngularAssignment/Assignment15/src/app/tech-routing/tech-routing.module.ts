import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../components/web/web.component'
import { JavaComponent } from '../components/java/java.component';
import { TempComponent } from '../components/temp/temp.component';
import { AngularComponent } from '../components/angular/angular.component';
import { Html5Component } from '../components/html5/html5.component';
import { AwsComponent } from '../components/aws/aws.component';
import { JdbcComponent } from '../components/jdbc/jdbc.component';
import { JavaScriptComponent } from '../components/java-script/java-script.component';
import { OopsComponent } from '../components/oops/oops.component';
import { TempDrivenComponent } from '../components/temp-driven/temp-driven.component';
import { ReactFormsComponent } from '../components/react-forms/react-forms.component';
const routes:Routes = [
  {path:'web', component:WebComponent,
  children:[
    {path:'angular', component:AngularComponent},
    {path:'html5', component:Html5Component },
    {path:'aws', component:AwsComponent },
  ] },
  {path:'java', component:JavaComponent,
children:[
  {path:'jdbc', component:JdbcComponent },
  {path:'javascript', component:JavaScriptComponent },
  {path:'oops', component:OopsComponent },
] },
  {path:'siblings', component:TempComponent},
  {path:'temp-forms',component:TempDrivenComponent},
  {path:'react-forms',component:ReactFormsComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent]

