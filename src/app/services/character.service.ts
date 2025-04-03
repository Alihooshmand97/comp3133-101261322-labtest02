import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }
  
  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`https://hp-api.onrender.com/api/character/${id}`);
  }
  
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`https://hp-api.onrender.com/api/characters/house/${house}`);
  }
  
  
}
