import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import {ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offers-bookings',
  templateUrl: './offers-bookings.page.html',
  styleUrls: ['./offers-bookings.page.scss'],
})
export class OffersBookingsPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap) => {
      if(!paramMap.has("placeId")){
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }

      let placeId = paramMap.get("placeId");
      
      this.place = this.placesService.getPlace(placeId);
      
    });
  }

}
