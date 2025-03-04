import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Datum } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'ekWsulU1Snz1EO5syXV05gaCUvMCASuk';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];
  public results: Datum[] = [];

  constructor(private http: HttpClient){
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  get history() {
    return [...this._history];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);
    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe(res => {
      this.results = res.data;
      localStorage.setItem('results', JSON.stringify(this.results));
    });
  }

}
