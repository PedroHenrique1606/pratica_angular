import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentlsComponent } from './components/first-componentls/first-componentls.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { IfRenderComponent } from './components/if-render/if-render.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentlsComponent,
    ParentDataComponent,
    FuncionariosComponent,
    IfRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
