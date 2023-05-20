import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  products: IProduct[] = [];

  constructor(
    private productService: ProductService
  ) { }

  async ngOnInit() {
    try{
      const {data}: any = await this.productService.allProducts();
      this.products = data;
    }catch(err){
      console.error(err);
    }
  }

}
