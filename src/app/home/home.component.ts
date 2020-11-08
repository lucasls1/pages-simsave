import { Component, OnInit } from '@angular/core';
import {TextIfoService} from '../services/text-ifo.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: Array<any>;

  constructor(private textIfoService:TextIfoService) { }
  
  
  ngOnInit(): void {
    this.listar();
  }

listar(){
  this.textIfoService.listar().subscribe(dados => this.info = dados);
}

}
