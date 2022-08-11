import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { appConstant } from '../app.constant';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  productId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(product => {
      
      this.productId=(product as any).id;

    });
     this.getProduct(this.productId);
    }
    getProduct(id: number):any {
      this.http.get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`).subscribe(product => {
        
        this.product = (product as any).products;
        console.log(product)
      })
    }

}
