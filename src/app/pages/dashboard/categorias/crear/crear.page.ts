import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  formCreateCategory = new FormGroup({
    name: new FormControl('', [Validators.required]) 
  });

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

  async handleCreateCategory() {
    try{
      const response = await this.categoryService.saveCategory(this.formCreateCategory.value);
      console.log(response);
      this.router.navigate(["categorias_listar"])
      .then(() => {
        window.location.reload();
      });
    }catch(err){
      console.error(err);
    }
  }
}
