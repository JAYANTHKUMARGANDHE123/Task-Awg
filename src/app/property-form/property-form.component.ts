import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrl: './property-form.component.css'
})
export class PropertyFormComponent implements OnInit {

  cities:any={
    'Hyderabad':['Kondapur','Madhapur','Hitec-city'],
    'Bangalore':['Anagalapura','Devanahalli','Narayanapura'],
    'Kamareddy':['Ashoknagar','Vidyanagar','Osmanpura'],
    'Chennai':['MGR','Chikpet','Elore']
  };

  cityList:string[]=Object.keys(this.cities);
  locationList:string[]=[];
  resCity:string='';
  resLocation:string='';
  comCity:string='';
  comLocation:string='';

  onCityChange(city:string){
    this.locationList=this.cities[city]
    this.resLocation='';
  }

  propertyForm: FormGroup;

  constructor(private fb: FormBuilder, private propertyService:PropertyService) {
    this.propertyForm = this.fb.group({
      propertyType: ['', Validators.required],
      // Residential Fields
      resCity:[''],
      resLocation: [''],
      resRent: [''],
      resSize: [''],
      resArea: [''],
      resFace: [''],
      resBuildingType: [''],
      resFloor: [''],
      resYearsOfConstruction: [''],
      resAdvance: [''],
      resPhotos: [''],
      resInnerFacilities: [''],
      resNearbyFacilities: [''],
      // Commercial Fields
      comCity:[''],
      comLocation: [''],
      comRent: [''],
      comSize: [''],
      comArea: [''],
      comFace: [''],
      comBuildingType: [''],
      comFloor: [''],
      comYearsOfConstruction: [''],
      comAdvance: [''],
      comPhotos: [''],
      comInnerFacilities: [''],
      comNearbyFacilities: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
  if (this.propertyForm.valid) {
      this.propertyService.addProperty(this.prepareSaveProperty()).subscribe(
        response=> {
          console.log('Property added:', response);
          this.propertyForm.reset();
        },
        error => {
          console.error('Error adding property:', error);
        }
      );
    } else {
      alert('Please fill all required fields');
    }
  }
  prepareSaveProperty() {
    const formModel = this.propertyForm.value
    
    return {
      propertyType: formModel.propertyType,
      city: formModel.propertyType === 'residential' ? formModel.resCity : formModel.comCity,
      location: formModel.propertyType === 'residential' ? formModel.resLocation : formModel.comLocation,
      rent: formModel.propertyType === 'residential' ? formModel.resRent : formModel.comRent,
      size: formModel.propertyType === 'residential' ? formModel.resSize : formModel.comSize,
      area: formModel.propertyType === 'residential' ? formModel.resArea : formModel.comArea,
      face: formModel.propertyType === 'residential' ? formModel.resFace : formModel.comFace,
      buildingType: formModel.propertyType === 'residential' ? formModel.resBuildingType : formModel.comBuildingType,
      floor: formModel.propertyType === 'residential' ? formModel.resFloor : formModel.comFloor,
      yearsOfConstruction: formModel.propertyType === 'residential' ? formModel.resYearsOfConstruction : formModel.comYearsOfConstruction,
      advance: formModel.propertyType === 'residential' ? formModel.resAdvance : formModel.comAdvance,
      photos: formModel.propertyType === 'residential' ? formModel.resPhotos : formModel.comPhotos,
      innerFacilities: formModel.propertyType === 'residential' ? formModel.resInnerFacilities : formModel.comInnerFacilities,
      nearbyFacilities: formModel.propertyType === 'residential' ? formModel.resNearbyFacilities : formModel.comNearbyFacilities
    };
  }
}

     
