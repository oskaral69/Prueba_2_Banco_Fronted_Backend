import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ver-tabla',
  templateUrl: './ver-tabla.component.html',
  styleUrls: ['./ver-tabla.component.css']
})
export class VerTablaComponent implements OnInit {

  constructor(router:Router) { }
  ngOnInit(): void {
  }

}
