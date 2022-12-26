import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/offers.service';


@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [OffersService]
})
export class HowToUseComponent implements OnInit {

  public howToUse: string = '';

  constructor(private route: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getHowToUseforId(this.route.parent?.snapshot.params['id'])
    .then((resp:string) => {this.howToUse = resp} )
    
  }

}
