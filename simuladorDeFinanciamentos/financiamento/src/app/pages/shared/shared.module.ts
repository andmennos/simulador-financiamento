import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CalendarModule,
    IMaskModule,
  ],
  exports: [
    // MÓDULOS COMPARTILHADOS

    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    Calendar,
    IMaskModule,

    //COMPONENTES COMPARTILHADOS
  ],
})
export class SharedModule {}
