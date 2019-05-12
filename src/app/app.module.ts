import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MyWebsiteComponent } from './my-website/my-website.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ChessBoardComponent,
    MyWebsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
