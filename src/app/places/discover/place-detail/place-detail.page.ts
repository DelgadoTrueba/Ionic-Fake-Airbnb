import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap) => {
      if(!paramMap.has("placeId")){
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }

      let placeId = paramMap.get("placeId");
      this.place = this.placesService.getPlace(placeId);
    });
  }

  onBookPlace(){
    //this.router.navigateByUrl("/places/tabs/discover")
    this.navCtrl.navigateBack("/places/tabs/discover");
  }

}
