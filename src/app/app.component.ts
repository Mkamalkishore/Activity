import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){
    
  }
  title = 'Assignment1';

  
  Home(){
    this.router.navigate(['home']);
  }

  Contactclick(){
    this.router.navigate(['contact']);
  }

  Headerclick(){
    this.router.navigate(['header']);
  }

  Footerclick(){
    this.router.navigate(['footer']);
  }
}
