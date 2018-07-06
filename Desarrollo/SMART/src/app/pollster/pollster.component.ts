import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pollster',
  templateUrl: './pollster.component.html',
  styleUrls: ['./pollster.component.css']
})
export class PollsterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onClickLogout(){
    this.authService.logout();
  }


}
