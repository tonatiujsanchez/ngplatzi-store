import { Component, EventEmitter, Input, OnChanges, OnDestroy, DoCheck, OnInit, Output, SimpleChange } from "@angular/core";
import { Product } from '../product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{
    @Input() product!: Product;
    @Output() productAdd: EventEmitter<Product> = new EventEmitter(); 

    today:Date = new Date();

    constructor(){
        console.log('1.-constructor');
        
    }
    // Detecta cuando el Input cambia
    // ngOnChanges( changes: SimpleChange): void {
    //     console.log('2.-ngOnChanges');      
    //     console.log(changes);
    // }
    // Se ejecuta cuando se inicaliza el componente
    ngOnInit(): void {
        console.log('3.-ngOnInit');
    }
    // Funciona parecido al ngOnChanges
    ngDoCheck(): void {
        console.log('4.-ngDoCheck');
        
    }
    // Se ejecuta cuando el compornete se quita de la interfaz
    ngOnDestroy(): void {
      console.log('5.-ngOnDestroy');
              
    }

    addCarrito(){
        // console.log('Agregar al carrito');
        this.productAdd.emit( this.product );
    }
}