import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisService{

    private _apiUrl: string = 'https://restcountries.com/v3.1';

    constructor( private http: HttpClient){ }

    buscarPais( query:string ): Observable<Country[]>{
        const url = `${this._apiUrl}/name/${ query }`;

        return this.http.get<Country[]>(url);
    }
}