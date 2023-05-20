import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  categories: ICategory[] = [];

  formCreateProduct: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required])
  })

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router:Router
  ) { }

  async ngOnInit() {
    try{
      const {data}: any = await this.categoryService.allCategories();
      this.categories = data;
    }catch(err){

    }
  }

  async handleCreateProduct() {
    try{
      const {data}: any = await this.productService.saveProduct(this.formCreateProduct.value);
      this.router.navigate([`productos_editar/${data.id}`])
      .then(() => {window.location.reload();})
    }catch(err){
      console.error(err);
    }
  }
}
