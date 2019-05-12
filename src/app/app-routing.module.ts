import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'taskManager',
    component: TaskManagerComponent
  },
  {
    path: 'chess',
    component: ChessBoardComponent
  },
  {
    path: 'MyWebsite',
    component: MyWebsiteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
