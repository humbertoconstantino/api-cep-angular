import { Component } from '@angular/core';
import { Adress } from './models/adress';
import { CepServiceService } from './services/cep-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viacep';
  
  cepNumber : string = ""
  constructor(private cs: CepServiceService) { }
  andressUser = new Adress

  ngOnInit(): void {
   
  }

  consultar(){
    this.cs.getCep(this.cepNumber).subscribe(data => {
      this.andressUser = data
      console.log(this.andressUser.uf)
    })
  }
}
