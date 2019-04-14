import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-displayheader',
  templateUrl: './displayheader.component.html',
  styleUrls: ['./displayheader.component.css']
})
export class DisplayheaderComponent implements OnInit {
  public productsinCart: any[];
  public showprod: any;
  public show: boolean;
  public disabled: boolean;
  public total: number;
  constructor(private http: Http) { }

  ngOnInit() {
    this.show = false;
    this.disabled = false;
    this.productsinCart = [];
    this.getJSON().subscribe(res => {
      console.log(res._body);
      var obj = res._body;
      obj = obj.replace(';', '');
      obj = JSON.parse(obj);
      this.productsinCart = obj.productsInCart;
      this.total = 0;
      for (let prod of this.productsinCart) {
        this.total += prod.p_price;
      }
    });


  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/cart.json");

  }

}
