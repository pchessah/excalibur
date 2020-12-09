import { Component, OnInit } from '@angular/core'
import { ProductsService } from 'src/app/libs/services/products.service'
import { MatDialog } from '@angular/material/dialog'
import { ProductsModel } from 'src/app/libs/models/products-model'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvs: ProductsModel[]
  singleProduct: ProductsModel = this._productsService.singleProduct
  cart: ProductsModel[] = this._productsService.cart

  constructor( private _productsService: ProductsService,
    public dialog: MatDialog,) { }

    ngOnInit(): void {
      this.getAllProducts()
    }
  
    getAllProducts(){
      this._productsService.getAllProducts().subscribe((products) => {
        this.tvs = products.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as {}),
          } as ProductsModel
        }).filter((item) => item.category === "TVs")
      })    
    }
  
    //ADD ITEM TO CART, OPEN MODAL FOR THE ITEM
    addToCart(id): void {
      this._productsService.addToCart(id)
    }
}
