import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root'
})
export class PaisService{

    private _apiUrl: string = 'https://restcountries.com/v3.1';

    get httpParams(){
        return new HttpParams().set('fields', 'name,flags,cca2,capital,maps,translations,population,region');
    }

    constructor( private http: HttpClient){ }

    buscarPais( query:string ): Observable<Country[]>{
        const url = `${this._apiUrl}/name/${ query }`;

        return this.http.get<Country[]>(url, {params:this.httpParams});
    }

    buscarCapital( query: string ): Observable<Country[]>{
        const url = `${this._apiUrl}/capital/${ query }`;
        return this.http.get<Country[]>(url, {params:this.httpParams});
    }

    getPaisPorCodigo( id: string ):Observable<Country>{
        const url = `${this._apiUrl}/alpha/${ id }`;
        return this.http.get<Country>(url, {params:this.httpParams});
    }

    buscarRegion( region: string ): Observable<Country[]>{
        const url = `${this._apiUrl}/region/${region}`;
        return this.http.get<Country[]>(url, {params:this.httpParams});
    }
}