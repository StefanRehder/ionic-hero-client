import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroServiceProvider {
    private serviceUrl: string = 'http://localhost:8210';

    constructor(private http: HttpClient) { }

    public async getHeroes(): Promise<Hero[]> {
      return this.http.get<Hero[]>(`${this.serviceUrl}/hero/list`)
        .toPromise();
    }

    public async getHero(name: string): Promise<Hero> {
      return this.http.get<Hero>(`${this.serviceUrl}/hero/${name}`)
        .toPromise();
    }

    public async createHero(hero: Hero): Promise<Object> {
      let bodyObj = hero;

      let headers = new HttpHeaders()
        .append('Content-Type', 'application/json');

      return this.http.put(`${this.serviceUrl}/hero/${name}`, bodyObj, { headers })
        .toPromise();
    }

    public deleteHero(name: string): Promise<Object> {
      return this.http.delete(`${this.serviceUrl}/hero/${name}`)
        .toPromise();
    }

    // This function is just here as an example
    public getHeroesObservable(): Observable<Hero[]> {
      return this.http.get<Hero[]>(`${this.serviceUrl}/hero/list`);
    }
}
