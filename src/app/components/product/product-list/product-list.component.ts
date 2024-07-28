import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../Shared/Modules/material.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../../Service/common.service';
import { PageEvent } from '@angular/material/paginator';
import { ProductAddEditComponent } from '../product-add-edit/product-add-edit.component';
import { AlertService } from '../../../Service/alert.service';
import { ProductService } from '../../../Service/component-service/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule, MatDialogModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  securityBuildrForm!: FormGroup;
  productData: any;
  page = 1;
  limit = 10;
  sort = '-createdAt';
  search = '';
  totalProduct:number=0;


  displayedColumns: string[] = ['sno', 'name', 'price', 'discount','size', 'category','vendor','actions'];
  dataSource = new MatTableDataSource<any>();
  constructor(private fb: FormBuilder,
    private matdialog: MatDialog,
    private alert:AlertService,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  pageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    console.log(this.limit, 'limit...')
    this.getProducts()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.search=filterValue.trim().toLowerCase();
  }








  addEditProduct(particularidData: any, type: any) {
    const dialogRef = this.matdialog.open(ProductAddEditComponent, {
      width: '1000px',
      height: 'auto',
      data: { product: particularidData, type: type }
    })

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
      if (res) {

        this.getProducts();
      }
    })
  }

  delete(productId:any){
    this.productService.deleteProduct(productId).subscribe((res: any) => {
      this.alert.success("Product Deleted!!")
      this.getProducts();
    }, (err: any) => {
      // Handle error
    });
  }

  getProducts() {
    this.dataSource.data = this.productData;
    let data = {
      limit:this.limit,
      page: this.page,
      search:this.search
    };
    this.productService.getProduct(data).subscribe((res: any) => {
      console.log(res.results, 'res..')
      this.productData = res.data.products;
      this.dataSource.data = this.productData;
      this.totalProduct=res?.data?.count;
    }, (err: any) => {
      // Handle error
    });
  }



}
