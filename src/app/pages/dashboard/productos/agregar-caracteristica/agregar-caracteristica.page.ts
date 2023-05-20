import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct';
import { IColor } from 'src/app/interfaces/Icolor';
import { ISize } from 'src/app/interfaces/Isize';
import { ColorService } from 'src/app/services/color.service';
import { ProductFeatureService } from 'src/app/services/product-feature.service';
import { ProductService } from 'src/app/services/product.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-agregar-caracteristica',
  templateUrl: './agregar-caracteristica.page.html',
  styleUrls: ['./agregar-caracteristica.page.scss'],
})
export class AgregarCaracteristicaPage implements OnInit {

  id: any;
  colors: IColor[] = [];
  sizes: ISize[] = [];
  product = {} as IProduct;

  formCreateProductFeature: FormGroup = new FormGroup({
    productId: new FormControl('', [Validators.required]),
    sizeId: new FormControl('', [Validators.required]),
    colorId: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required])
  });
  
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private productFeatureService: ProductFeatureService,
    private colorService: ColorService,
    private sizeService: SizeService,
    private router: Router
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.formCreateProductFeature.patchValue({
      productId: this.id
    });
  }

  async ngOnInit() {
    try{

      const {data: dataProduct}: any = await this.productService.getProduct(this.id);
      const {data: dataColors}: any = await this.colorService.allColors();      
      const {data: dataSizes}: any = await this.sizeService.allSizes();

      this.product = dataProduct;
      this.colors = dataColors;
      this.sizes = dataSizes;
    }catch(err){
      
      console.error(err);
    }
  }

  async handleCreateProductFeature() {
    try{
      const response = await this.productFeatureService.saveProductFeature(this.id, this.formCreateProductFeature.value);
      this.router.navigate([`productos_editar/${this.id}`])
      .then(() => {window.location.reload();})
    }catch(err){
      console.error(err);
    }
  }

}
