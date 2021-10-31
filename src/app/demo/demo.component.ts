import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  nombres = [ 'Tonatiuj', 'Brandon', 'Santiago' ];

  title = 'platzi-store';

  constructor() { }

  ngOnInit(): void {
  }



  addItem(){
    this.nombres.unshift( this.title );
    this.title = '';
  }
  removeItem( idx:number ){
    this.nombres.splice(idx, 1);
  }

}
