import { Component } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SocialAuthComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
