import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService : SpotifyService) { }

  ngOnInit() {
  }

  goToLoginPage() {
    window.location.href = this.spotifyService.getLoginUrl();
  }
}
