import { Component, Output } from '@angular/core';
import { isFormArray } from '@angular/forms';
import {Products } from '../assets/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrRacks = [0, 0, 0];
  title = 'stock';


  @Output() arrCells:any;
  product = Products;
  itog: any = [];
  
  getData(racks: any, shelfs: any, cells:any){
    this.itog = this.numSequence(Number(racks));
    this.itog.forEach((it:any, index:any)=>{
      this.itog[index] = this.numSequence(Number(shelfs));
      this.itog[index].forEach((el:any, ind:any)=>{
        this.itog[index][ind] = this.numSequence(Number(cells));
        this.itog[index][ind].forEach((ell:any, innd:any)=>{
          this.itog[index][ind][innd] = this.shuffle(this.product);
        })
      })
    })
  }

  shuffle(arr: any) {
    return arr.sort(() => Math.random() - 0.6).slice(0, 3);
  }

  numSequence(n: number): Array<number> {
    return Array(n).fill([]);
  }
 
}