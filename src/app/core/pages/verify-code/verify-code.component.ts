import { Component } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  imports: [SocialAuthComponent, RouterLink],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

}
