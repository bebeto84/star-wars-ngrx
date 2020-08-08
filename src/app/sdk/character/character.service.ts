import { SwapiArrayResponse } from '../shared.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO: transform to TS alias
import { API } from '../config';
import { Observable } from 'rxjs';
import { Character } from './character.model';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  // TODO: Use interceptor to cache request
  getDetail(id: string): Observable<Character> {
    return this.httpClient.get<Character>(`${API.endpoint.characters}/${id}`);
  }
}
