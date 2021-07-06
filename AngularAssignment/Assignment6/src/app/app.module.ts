import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AsrithaComponent } from '../app/components/asritha/asritha.component'
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { ProductAssignmentComponent } from './product-assignment/product-assignment.component';
import { CalculatorAssignmentComponent } from './calculator-assignment/calculator-assignment.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';

import { MycolorDirective } from './directives/mycolor.directive';
import { ColorDirective } from './directives/color.directive';




import { PipesComponent } from './pipes/pipescomponent/pipes.component';
import { UppercasePipe } from './pipes/uppercase.pipe';



@NgModule({
  declarations: [
    AppComponent,

    AsrithaComponent,
         HomeComponent,
         InterpolationComponent,
         EventBindingComponent,
         TwowayBindingComponent,
         PropertyBindingComponent,
         StructDirectiveComponent,
         ProductAssignmentComponent,
         CalculatorAssignmentComponent,
         AttributeDirectiveComponent,

         MycolorDirective,
                   ColorDirective,

                   PipesComponent,
                                      UppercasePipe,

  ],
  imports: [
    BrowserModule, FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
