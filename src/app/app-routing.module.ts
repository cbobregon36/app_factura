import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard/home',
    loadChildren: () => import('./pages/dashboard/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/dashboard/invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'categorias_listar',
    loadChildren: () => import('./pages/dashboard/categorias/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'categorias_crear',
    loadChildren: () => import('./pages/dashboard/categorias/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'categorias_editar',
    loadChildren: () => import('./pages/dashboard/categorias/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'productos_crear',
    loadChildren: () => import('./pages/dashboard/productos/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'productos_listar',
    loadChildren: () => import('./pages/dashboard/productos/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'productos_editar',
    loadChildren: () => import('./pages/dashboard/productos/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'agregar_caracteristica',
    loadChildren: () => import('./pages/dashboard/productos/agregar-caracteristica/agregar-caracteristica.module').then( m => m.AgregarCaracteristicaPageModule)
  },
  {
    path: 'agregar_venta',
    loadChildren: () => import('./pages/dashboard/ventas/agregar-venta/agregar-venta.module').then( m => m.AgregarVentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
