import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-login-intro',
  templateUrl: './login-intro.page.html',
  styleUrls: ['./login-intro.page.scss'],
})
export class LoginIntroPage implements OnInit {

  loginInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  constructor(
    public angularFire: AngularFireAuth,
    public router: Router,
    private ngZone: NgZone,
    private firebaseAuthService: FirebaseAuthService
  ) {
    this.authRedirectResult = this.firebaseAuthService.getRedirectResult()
      .subscribe(result => {
        if (result.user)
          this.redirectLoggedUser();
        else if (result.error)
          this.submitError = result.error;
      });
  }

  ngOnInit() {
  }

  redirectLoggedUser() {
    this.ngZone.run(() => {
      this.router.navigate(['/dashboard/home']);
    });
  }

  signInWithGoogle() {
    this.firebaseAuthService.signInWithGoogle().then((result: any) => {
      if (result.additionalUserInfo) {
        this.firebaseAuthService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }

      // const token = result.credential.accessToken;
      this.redirectLoggedUser();
    }).catch((error) => {
      console.log(error);
    });
  }

  signInWithFacebook() {
    this.firebaseAuthService.signInWithFacebook().then((result: any) => {
      if (result.additionalUserInfo) {
        this.firebaseAuthService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }

      // const token = result.credential.accessToken;
      this.redirectLoggedUser();
    }).catch((error) => {
      console.log(error);
    });
  }

}
