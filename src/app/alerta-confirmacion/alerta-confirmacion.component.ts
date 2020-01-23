import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta-confirmacion',
  templateUrl: './alerta-confirmacion.component.html',
  styleUrls: ['./alerta-confirmacion.component.scss']
})
export class AlertaConfirmacionComponent implements OnInit {
  public active: boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit() {
  }

  ocultar() {
    this.active = false;
  }

  mostrar() {
    this.active = true;
  }
}
