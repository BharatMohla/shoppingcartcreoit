import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-displayshippinginfo',
  templateUrl: './displayshippinginfo.component.html',
  styleUrls: ['./displayshippinginfo.component.css']
})
export class DisplayshippinginfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public movetoPayments(){
    this.router.navigate(['/payments']);
  }

}
