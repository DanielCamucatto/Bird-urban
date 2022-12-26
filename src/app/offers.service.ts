import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Offers } from "./shared/offers.model";
import { URL_API } from './app.api';




@Injectable()
export class OffersService {

    // private url_api = 'http://localhost:3000/ofertas';

    constructor(private http: HttpClient){}

    public getOffers():Promise<Offers[]> {
        return firstValueFrom(this.http.get(`${URL_API}?destaque=true`))
            .then((resp : any) => resp)
    }

    public getOffersForCategory(category: string): Promise<Offers[]>{
        return firstValueFrom(this.http.get(`${URL_API}/ofertas?categoria=${category}`))
            .then((resp: any) => resp)
    }
    
    public getOffersForId(id: Number):Promise<Offers> {
        return firstValueFrom(this.http.get(`${URL_API}/ofertas?id=${id}`))
        .then((resp: any) => resp[0]) 
        
    }

    public getHowToUseforId(id: number): Promise<string>{
        return firstValueFrom(this.http.get(`${URL_API}/como-usar?id=${id}`))
        .then((resp: any) => {
            return resp[0].descricao;
        })
        
    }

}