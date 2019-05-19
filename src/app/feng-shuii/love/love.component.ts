import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs";
import { BirthdateInputComponent } from '../birthdate-input/birthdate-input.component';
import { Love } from '../love';
import { FengshuiService } from '../fengshui-service.service';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})
export class LoveComponent implements OnInit {
  @Output() emitLove = new EventEmitter<Array<string>>();
  constructor(private service: FengshuiService) { }
  love$: Observable<Love>;
  ngOnInit() {
  }
  @ViewChild('user1') child1: BirthdateInputComponent;
  getUser() {
    return this.child1.date;
  }
  @ViewChild('user2') child2: BirthdateInputComponent;
  
  getUser2() {
    return this.child2.date;
  }
  getLove() {
    const user1 = this.getUser();
    const user2 = this.getUser2();
    return [user1, user2];
  }
  requestLove() {
    const users = this.getLove();
    this.love$ = this.service.getLove(users[0], users[1]);
  }
}
