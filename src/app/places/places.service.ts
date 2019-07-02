import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      "p1", 
      "Manhattan Mansion", 
      "In the heart of New York City.",         
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
      , 500
    ),
    new Place(
      "p2", 
      "L'Amour Toujours", 
      "Romantic place in Paris!", 
      "https://images.unsplash.com/photo-1471623600634-4d04cfc56a27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      , 198.99
    ),
    new Place(
      "p3", 
      "The Foggy Place", 
      "Not your average city trip!", 
      "https://images.unsplash.com/photo-1532081000137-2bd921a97119?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
      , 99
    )
  ];

  getPlaces() {
    return [... this._places];
  }

  constructor() { }
}
