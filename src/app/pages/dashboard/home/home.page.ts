import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuItems: Array<any> = [
    {
      label: "Inicio",
      to: "/dashbord",
      icon: "home-outline"
    },
    {
      label: "Categorias",
      to: "/categorias_listar",
      icon: "people-outline"
    },
    {
      label: "Productos",
      to: "/productos_listar",
      icon: "fast-food-outline"
    },
    {
      label: "Ventas  ",
      to: "/agregar_venta",
      icon: "document-outline"
    },
  ];

  menuConfigItems: Array<any> = [
    {
      label: "Parametrización gral",
      to: "/dashboard-general-conf",
      icon: "cog-outline"
    },
    {
      label: "Cerrar sesión",
      to: "/dashbord",
      icon: "log-out-outline"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
