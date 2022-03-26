import { Component } from '@angular/core';
import { AllService } from './services/all.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = false;
 
  responsesinfiltro : any[] = [];
  responseconfiltro : any[] = [];
 
  modelo = "";
 
  /**
   *
   */
  constructor(public allService: AllService) {
    
    
  }
 
  async onClick(){
    this.isVisible = true;
 
    
    console.log(this.modelo)
    this.responsesinfiltro = await this.allService.getAll({
      "modelo": this.modelo
    });
    this.responseconfiltro = this.responsesinfiltro.filter(el => el.modelo === this.modelo);
  }
}

