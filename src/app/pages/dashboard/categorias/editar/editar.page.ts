import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  id: any;

  formUpdateCategory = new FormGroup({
    name: new FormControl('', [Validators.required]) 
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    try{
      const {data}: any = await this.categoryService.getCategory(this.id);
      this.formUpdateCategory.setValue({
        name: data.name
      })
      console.log(data);
    }catch(err){
      console.error(err);
    }
  }

  async handleCreateUpdate() {
    try{
      const response = await this.categoryService.updateCategory(this.id, this.formUpdateCategory.value);
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
