import { ApiService} from './servicios/api/api.service'
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Solucion Prueba';
  constructor(private apiService: ApiService){
    console.log('El componente se a creado');
  }
  ngOnInit(){
    console.log('El componente se a inicializado');
    //this.ApiService.sendGetRequest().subscribe(Response => console.log(Response));
    this.apiService.sendGetRequest().subscribe(Response=>{
      console.log(Response);
    })
  }
}
