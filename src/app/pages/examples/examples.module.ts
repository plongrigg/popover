import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms/forms';
import { MatInputModule } from '@angular/material/input';
import { MdePopoverModule } from '@fgrid-ngx/mde';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ErrorModule } from '../error/error.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PageExamplesBuilderComponent } from './builder/builder.component';
import { PageExamplesComponent } from './examples.component';
import { PageExamplesFormComponent } from './form/form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MdePopoverModule,
    ExamplesRoutingModule,
    ErrorModule,
  ],
  declarations: [
    PageExamplesComponent,
    PageExamplesFormComponent,
    PageExamplesBuilderComponent
  ]
})
export class ExamplesModule { }
