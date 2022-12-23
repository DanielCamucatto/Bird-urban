import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offers } from '../shared/offers.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
  providers: [OffersService]
})

export class HomeComponent implements OnInit {

  public offers: Offers[];

  constructor(public offersService: OffersService) { }

  ngOnInit(): void {
  
    this.offersService.getOffers().then((offer: Offers[])=> {
      this.offers = offer;      
      console.log(offer);
      
    }) 
    .catch((erro: any) => {console.log(erro);
    })
  }

}
