import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';



@Component({
  selector: 'app-student-personal-form',
  templateUrl: './student-personal-form.component.html',
  styleUrls: ['./student-personal-form.component.scss']
})

export class StudentPersonalFormComponent implements OnInit,AfterViewInit {

  ngAfterViewInit() {
    this.getAddresAutoComplete();
    //this.mapInitializer();
  }
 // @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  @ViewChild('mapInput', {static: false}) addressText: ElementRef;

  map: google.maps.Map;
  markers: any;
  autocompleteInput:string;
  

  private getAddresAutoComplete(){
    
    const autocomplete = new google.maps.places.Autocomplete(this.addressText.nativeElement,
      {
          componentRestrictions: { country: 'DO' },
          types: ['geocode']  // 'establishment' / 'address' / 'geocode'
      });
  google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.autocompleteInput = place.formatted_address;
  });
  }

  /*
  mapInitializer() {
    let searchBox = new google.maps.places.SearchBox(this.addressText.nativeElement);
    this.map = new google.maps.Map(this.gmap.nativeElement, 
      {
        center: {lat: 18.4718609, lng: -69.8923187},
        zoom: 13,
        mapTypeId: 'roadmap'
      });
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.addressText.nativeElement);

    this.map.addListener('bounds_changed',()=>{
      searchBox.setBounds(this.map.getBounds());
    });

    searchBox.addListener('places_changed',()=>{
      var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          this.markers.forEach(function(marker) {
            marker.setMap(null);
          });
          this.markers = [];
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            this.markers.push(new google.maps.Marker({
              map: this.map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          this.map.fitBounds(bounds);
    });

    
   }*/
   

  isLinear = true;
  identificationData: FormGroup;
  addressData: FormGroup;
  contactData: FormGroup;
  floatLabelControl = new FormControl('auto');
  dniFormControl = new FormControl('',[Validators.minLength(11), Validators.required])
  flag = true;
  constructor(private _formBuilder: FormBuilder) { }
   
  ngOnInit() {
    this.identificationData = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dni: ['',[Validators.minLength(11), Validators.required]],
      dateOfBirth:['', Validators.required],
      sexSelect: this.floatLabelControl

    });

    this.addressData = this._formBuilder.group({
      address: ['', Validators.required]
    });
    this.contactData = this._formBuilder.group({
      email: ['', Validators.email],
      cellPhoneNumber: ['', Validators.required]
    });
  }

  validatePersonalInfoFields(){
    if(this.identificationData.invalid){
      alert("Por favor complete los campos que falfan");
    }
  }
  validateAddressDataFields(){
    if(this.addressData.invalid){
      alert("Por favor complete los campos que falfan");
    }
  }
  validateContactDataFields(){
    if(this.contactData.invalid){
      alert("Por favor complete los campos que falfan");
    }
  }
}
