import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Love } from "../love";
import { FengshuiService } from "../fengshui-service.service";
import { Profile } from "../profile";

@Component({
  selector: "app-fengshui",
  templateUrl: "./fengshui.component.html",
  styleUrls: ["./fengshui.component.scss"]
})
export class FengshuiComponent implements OnInit {
  simpleSign: Observable<Profile>;
  love: Observable<Love>;

  constructor(private service: FengshuiService) {}

  ngOnInit() {}
  requestSign(birthday: string) {
    this.simpleSign = this.service.getProfile(birthday);
    console.log(this.simpleSign);
  }
  
}
