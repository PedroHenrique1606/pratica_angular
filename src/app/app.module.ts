import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentlsComponent } from './components/first-componentls/first-componentls.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { RenderComponent } from './components/render/render.component';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { EventNetworkComponent } from './components/event-network/event-network.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { EmitterUserDataComponent } from './components/emitter-user-data/emitter-user-data.component';
import { TesterComponent } from './components/tester/tester.component';
import { EmmiterTesterComponent } from './components/emmiter-tester/emmiter-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentlsComponent,
    ParentDataComponent,
    FuncionariosComponent,
    IfRenderComponent,
    RenderComponent,
    LoginComponent,
    EventsComponent,
    EventNetworkComponent,
    EmitterComponent,
    ChangeNumberComponent,
    UserDataComponent,
    EmitterUserDataComponent,
    TesterComponent,
    EmmiterTesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
