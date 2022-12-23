import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offers } from '../shared/offers.model';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'], 
  providers: [OffersService]
})
export class FunComponent implements OnInit {

  public offers: Offers[]

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOffersForCategory('diversao')
      .then((offers: Offers[]) => {
        this.offers = offers;
      })
  }

}
