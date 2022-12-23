import { Component, OnInit } from '@angular/core';
import { Offers } from '../shared/offers.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'], 
  providers: [OffersService]
})
export class RestaurantComponent implements OnInit {

  public offers : Offers[]

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOffersForCategory('restaurante')
      .then((offers: Offers[]) => {
       this.offers = offers;
      })
  }

}
