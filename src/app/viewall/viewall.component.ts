import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrl: './viewall.component.css'
})
export class ViewallComponent implements OnInit{
    properties: any[] = [];
    searchParams: any = {
      city:'',
      location: '',
      propertyType: '',
      rent: null
    };
  
    constructor(private propertyService: PropertyService) { }
  
  //   ngOnInit(): void {
  //     this.propertyService.getProperties().subscribe(
  //       (data: any[]) => {
  //         this.properties = data;
  //       },
  //       error => {
  //         console.error('Error fetching properties:', error);
  //       }
  //     );
  //   }
  // }
  
 
    
  
  //   constructor(private propertyService: PropertyService) { }
  
    ngOnInit(): void {
      this.fetchProperties();
    }
  
    fetchProperties(params?: any): void {
      this.propertyService.getProperties(params).subscribe(
        (data: any[]) => {
          this.properties = data;
        },
        error => {
          console.error('Error fetching properties:', error);
        }
      );
    }
  
    onSearch(): void {
      this.fetchProperties(this.searchParams);
      console.log('searched');
    }
  }
  
