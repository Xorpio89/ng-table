import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Column } from '../models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: any[] = [];
  productColumns: Column[] = [
    { header: 'ID', property: 'id'},
    { header: 'Title', property: 'title', type: 'text', editable: true },
    {
      header: 'Category',
      property: 'category',
      type: 'text',
      editable: true,
    },
    {
      header: 'Description',
      property: 'description',
      type: 'textarea',
      editable: true,
    },
    { header: 'Price', property: 'price', type: 'number', editable: true },
    { header: 'Actions', property: 'actions', type: 'edit'},
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.apiService.getProducts().subscribe((data) => (this.products = data));
  }
}
