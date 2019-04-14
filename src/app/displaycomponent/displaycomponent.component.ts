import { Component, OnInit,ViewChild } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';
@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrls: ['./displaycomponent.component.css']
})
export class DisplaycomponentComponent implements OnInit {
  @ViewChild('modal') modal:any;

  public productsinCart:any[];
  public showprod:any;
  public startDate:string;
  public endDate:string;
  public location:string;
  public metric:string;
  public show:boolean;
  public disabled:boolean;
  public chartType: string = 'bar';

  public chartDatasets: Array<any>;

  public chartLabels: Array<any>;

  public chartColors: Array<any>;

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor(public http:Http, private router:Router) { 
    

  }

  ngOnInit() {
    this.show=false;
    this.disabled=false;
    this.productsinCart=[];
    this.getJSON().subscribe(res =>{
      console.log(res._body);
      var obj=res._body;
      obj=obj.replace(';','');
      obj=JSON.parse(obj);
      this.productsinCart=obj.productsInCart;
    });
    
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/cart.json");

  }

  public movetoShipping(){
    this.router.navigate(['/shipping']);
  }
  
  openModal(id){

    var modal=document.getElementById('myModal');
    modal.style.display = "block";


  }
  closeModal(){
    var modal=document.getElementById('myModal');
    modal.style.display="none";
  }

}
