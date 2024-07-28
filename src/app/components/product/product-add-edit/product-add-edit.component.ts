import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { HttpsharedService } from '../../../Service/httpshared.service';
import { CommonService } from '../../../Service/common.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../Shared/Modules/material.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ProductService } from '../../../Service/component-service/product.service';
import { AlertService } from '../../../Service/alert.service';

@Component({
  selector: 'app-product-add-edit',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule,
    FormsModule, NgxMatSelectSearchModule
  ],
  templateUrl: './product-add-edit.component.html',
  styleUrl: './product-add-edit.component.scss'
})
export class ProductAddEditComponent {
  productForm!: FormGroup;
  typeDisplay: string = 'Add'
  categoryData:any=[];
  vendorData: any = []; // Initialize as an empty array

  @ViewChild('multiSelect')
  multiSelect!: MatSelect; 
  
  constructor(private fb: FormBuilder,
    private commonService: CommonService, private httpCommonService: HttpsharedService, public myDialogRef: MatDialogRef<ProductAddEditComponent>,private productService:ProductService,private alertService:AlertService,    @Inject(MAT_DIALOG_DATA) public modalData: any) { }


  ngOnInit(): void {
    this.initializeForm();

    this.getCategory();
    this.productForm.get('categoryId')!.valueChanges.subscribe(categoryId => {
      this.onCategoryChangeGetVendor(categoryId);

    });
       
   
    this.typeDisplay = this.modalData ? this.modalData.type : 'Add';
    if(this.typeDisplay=='Edit' || this.typeDisplay=='View'){
      this.onCategoryChangeGetVendor(this.modalData?.product.categoryId._id);
    this.patchProductData(this.modalData?.product);
    }

    if(this.typeDisplay=='View'){
      this.disableForm();
    }
   
  }


  disableForm() {
    this.productForm.disable();
  }


  

  initializeForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      size: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      vendorId: ['', Validators.required],
      categoryId: ['', Validators.required],
      discount: ['', [Validators.required, Validators.min(0), Validators.max(100), Validators.pattern(/^\d+(\.\d{1,2})?$/)]]


    });

    

  }


  getCategory() {
    this.productService.getCategory()
      .subscribe((res: any) => {
        this.categoryData = res.data.categoryList;
      });
  }

  onCategoryChangeGetVendor(categoryId:string) {
    this.productService.getVendorsByCategory(categoryId)
      .subscribe((res: any) => {
        this.vendorData = res.data.vendorList;
        // this.productForm.get('vendorId')!.setValue(''); // Reset vendor selection

      });
  }





  patchProductData(product: any) {

    this.productForm.patchValue({
      name: product.name,
      discount:product.discount,
      price:product.price,
      size:product.size,
      categoryId:product.categoryId._id,
      vendorId:product.vendorId._id,
    });
    console.log(product.vendorId._id)
    
  }



  onSubmit() {
    if (this.productForm.invalid) {
      return
    }
    const productData = this.productForm.value;

    if (this.typeDisplay=='Edit') {
      this.productService.editProduct(this.modalData.product._id,productData).subscribe((res:any)=>{
        this.productForm.reset();
        this.alertService.success('Product Updated Successfully !!');

        this.myDialogRef.close(true);
  
        return;
      },(err:any)=>{
        this.alertService.warning(err?.error?.data?.error?err?.error?.data?.error:err?.error?.message)
  
      })
  
    }
    if(this.typeDisplay=='Add')
    this.productService.addProduct(productData).subscribe((res:any)=>{
      this.productForm.reset();
      this.alertService.success('Product Added Successfully !!');

      this.myDialogRef.close(true);


    },(err:any)=>{
      this.alertService.warning(err?.error?.data?.error?err?.error?.data?.error:err?.error?.message)

    })


 
  }


  onCancel() {
    this.myDialogRef.close();
  }




}
