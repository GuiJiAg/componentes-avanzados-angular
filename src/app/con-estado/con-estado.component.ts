import { AlertaConfirmacionComponent } from './../alerta-confirmacion/alerta-confirmacion.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Tienda } from '../models/tienda.model';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.scss']
})
export class ConEstadoComponent implements OnInit {
  modeloTienda: Tienda = new Tienda();
  itemsComprados: Producto[];

  @ViewChild(AlertaConfirmacionComponent, {static: false}) alertaChild: AlertaConfirmacionComponent;

  constructor() {
    this.itemsComprados = [];
  }

  ngOnInit() {
  }

  seleccionarItem(item) {
    this.itemsComprados.push(item);
  }

  onProductoSeleccionado(productoEmitido: Producto) {
    this.seleccionarItem(productoEmitido);
  }

  getPrecioTotal() {
    let precioTotal = 0;

    this.itemsComprados.forEach((item) => {
      precioTotal += item.precio;
    });
    return precioTotal;
  }

  realizarPago() {
    this.alertaChild.mostrar();
  }
}
