import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: String = '';
  public password: String = '';

  constructor(
    private route: Router,
    public authService: AuthServiceService
  ) { }

  async ngOnInit() {
  }

  handleLogin = async () => {

    try{
      const response: any = await this.authService.login({
        email: this.email,
        password: this.password
      });

      await Preferences.set({
        key: 'token',
        value: response.data?.token
      });
      this.route.navigate(['dashboard/home']);
    }catch(err){
      console.log("Error. ", err);
    }
    // this.authService.login(this.email, this.password).then(async(res: any) => {
    //   console.log("Full, ", res);
      // await Preferences.set({
      //   key: 'token',
      //   value: res.data?.token
      // });
      // this.route.navigate(['dashboard/home']);
    // })
    // .catch((err) => {
    //   console.log("Error, ", err);
    // });
    
  }
}
