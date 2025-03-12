import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";

@Component({
  selector: 'app-register',
  imports: [RouterLink, SocialAuthComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
