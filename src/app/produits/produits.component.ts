import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from './Product';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public des = '';
  public price = '';

  public products: Product[] = new Array();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { designation: '', prix: '' }
    console.log(f.valid);  // false
    let p = new Product();
    p.designation = f.value.designation;
    p.price = f.value.prix;
    this.products.push(p);
    console.log(this.products);
  }
}
