import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offers } from '../shared/offers.model';
import { OffersService } from '../offers.service';
import { interval, Observer, Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';



@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersService]
})
export class OfferComponent implements OnInit {

  public offer: Offers;

  constructor(private route: ActivatedRoute, private offerService: OffersService) {
    //this.route = route
   }

  ngOnInit(): void {
    this.offerService.getOffersForId(this.route.snapshot.params['id'])
    .then((Offers: Offers) => { 
      this.offer = Offers;
    })

    // this.route.params.subscribe((param: any) =>{
    //   console.log(param);
    // },
    // (erro: any) => console.log(erro), 
    // () => console.log('processamento concluído!!')
    // )

    let myObservableTest = new Observable((observer: Observer<any>) =>{
      observer.next(1)
      observer.next(3)
      //observer.error('deu ruim a parada aqui grande')
      observer.complete()
      
      
    });

   myObservableTest.subscribe({
      next(x){
        console.log(10);
        
      }, 

      error(err){
        console.log('isso é um erro');
        
      }, 

      complete() {
        console.log('done');
        
      },
      
   })

  }
}
