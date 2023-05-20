import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/ICategory';
import { IProductFeature } from 'src/app/interfaces/IProduct';
import { CategoryService } from 'src/app/services/category.service';
import { ProductFeatureService } from 'src/app/services/product-feature.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  id: any;

  categories: ICategory[] = [];
  features: IProductFeature[] = [];

  formUpdateProduct:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required])
  })
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductService,
    private categoryService: CategoryService,
    private productFeature:ProductFeatureService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit() {

    try{
      const {data: dataProduct}: any = await this.productService.getProduct(this.id);
      const {data: dataCategories}: any = await this.categoryService.allCategories();
      const {data: dataProductFeatures}: any = await this.productFeature.getProductFeature(this.id);

      this.categories = dataCategories;
      this.features = dataProductFeatures;

      this.formUpdateProduct.setValue({
        name: dataProduct.name,
        categoryId: dataProduct.categoryId,
      })
    }catch(err){

    }
  }

  handleUpdateProduct() {
    try{
      const response = this.productService.updateProduct(this.id, this.formUpdateProduct.value);
    }catch(err){
      console.error(err);
    }
  }
}
