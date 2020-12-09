import { Component, OnInit } from '@angular/core'
import { ProductsService } from 'src/app/libs/services/products.service'
import { MatDialog } from '@angular/material/dialog'
import { ProductsModel } from 'src/app/libs/models/products-model'

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
})
export class OthersComponent implements OnInit {
  others: ProductsModel[]
  singleProduct: ProductsModel = this._productsService.singleProduct
  cart: ProductsModel[] = this._productsService.cart

  constructor(
    private _productsService: ProductsService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this._productsService.getAllProducts().subscribe((products) => {
      this.others = products.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as ProductsModel
      }).filter((item) => item.category === "Others")
    })    
  }

  //ADD ITEM TO CART, OPEN MODAL FOR THE ITEM
  addToCart(id): void {
    this._productsService.addToCart(id)
  }
}
