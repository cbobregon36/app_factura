import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  categories: any[] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  async ngOnInit() {

    try{
      const response: any = await this.categoryService.allCategories();
      this.categories = response.data;
      console.log(response)
    }catch(err){
      console.error(err);
    }
  }

}
