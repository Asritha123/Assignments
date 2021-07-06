
import{ NgModule} from '@angular/core'
import { routingComponents,TechRoutingModule } from '../app/tech-routing/tech-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AssignmentProductComponent } from './assignment-product/assignment-product.component';
import { SearchPipe } from './pipes/search.pipe';
import { PipePipe } from './sort/pipe.pipe';
import{ProductService} from './services/product.service';
import { NgcolorDirective } from './directives/ngcolor.directive';
import { CalculatorComponent } from './calculator/calculator.component';
import { ParentComponent } from './parentcomponent/parent/parent.component';
import { ChildComponent } from './childcomponent/child/child.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { JavaComponent } from './components/java/java.component';
import { WebComponent } from './components/web/web.component';
import { from } from 'rxjs';
import { TempComponent } from './components/temp/temp.component';
import { AngularComponent } from './components/angular/angular.component';
import { Html5Component } from './components/html5/html5.component';
import { AwsComponent } from './components/aws/aws.component';
import { JdbcComponent } from './components/jdbc/jdbc.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { OopsComponent } from './components/oops/oops.component';
import { ReactFormsComponent } from './components/react-forms/react-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    AssignmentProductComponent,
    SearchPipe,
    PipePipe,
    NgcolorDirective,
    CalculatorComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    routingComponents,
    TempComponent,
    AngularComponent,
    Html5Component,
    AwsComponent,
    JdbcComponent,
    JavaScriptComponent,
    OopsComponent,
    ReactFormsComponent,



  ],
  imports: [
    BrowserModule ,FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
