import { Component, Input } from '@angular/core';
import { Booking } from 'src/app/_models/booking';
import { Flight } from 'src/app/_models/flight.model';
import { FlightDataService } from 'src/app/_services/flight-data.service';


@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent {
  @Input() flightDetails: Flight | undefined; // Receive flight details from parent component
  showPassengerDetailsForm = false; // Initially hide the form
  passengers: any[] = []; // Array to store passenger details

  constructor(private flightService:FlightDataService){}

  openPassengerDetailsForm() {
    // Generate input boxes for each passenger
    let numberOfPassengers =  this.flightDetails.numberOfAdults + this.flightDetails.numberOfChildren;
    for (let i = 0; i < numberOfPassengers; i++) {
        this.passengers.push({ name: ''}); // Add more properties as needed for each passenger
    }

    this.showPassengerDetailsForm = true; // Display the passenger details form
}

submitPassengerDetails() {
  // Handle submitted passenger details
  console.log('Submitted passenger details:', this.passengers);
  const booking:Booking = new Booking(
    "sudha@gmail.com",
    this.flightDetails.price,
    {source:this.flightDetails.source,destination:this.flightDetails.destination,date:this.flightDetails.dateOfTravel},
    this.passengers
  );

  console.log(booking);

  this.flightService.createBooking(booking).subscribe({
    next:(response:any)=>alert(response.message),
    error:err=>console.log(err)
  })
  // You can send this data to your backend or perform required actions
}
}
