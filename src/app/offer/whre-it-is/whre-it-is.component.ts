import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-whre-it-is',
  templateUrl: './whre-it-is.component.html',
  styleUrls: ['./whre-it-is.component.css']
})
export class WhreItIsComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ID rota pai:' , this.route.parent?.snapshot.params['id']);
    
  }

}
