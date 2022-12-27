import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-whre-it-is',
  templateUrl: './whre-it-is.component.html',
  styleUrls: ['./whre-it-is.component.css'], 
  providers:[OffersService]
})
export class WhreItIsComponent implements OnInit {
  public whereItIs: string = '';

  constructor( private route: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getWhereItIsforId(this.route.parent?.snapshot.params['id'])
    .then((resp:string) => {this.whereItIs = resp } )
  }
}
