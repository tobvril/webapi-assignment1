# Assignment 1

This is a day trip booking API for managing car and package bookings for trips. This system enables checking availability, registering guests, managing bookings, and updating car availability.

## Getting Started
### Installation
Clone the repository or download the code.

### Features
Register Guests for Trips: Allows guests to book a package with an available car.

Check Package and Car Availability: View package details and car availability.

Manage Bookings: Cancel bookings, update seat availability, and keep track of guest bookings.

Update Car Status: View cars as available or unavailable.

### Usage
<ins>1. Register a Guest for a Trip</ins>
code: trip.registerTripGuest(name, contact, tripDate, carId, packageId);

Parameters:
name (string): Guest's name.
contact (string): Guest's contact information.
tripDate (string): Date of the trip (e.g., "2024-12-01").
carId (number): ID of the car.
packageId (number): ID of the package.

Description: Registers a guest for a trip with a selected package and car if available. If unavailable, error will be shown

Example: trip.registerTripGuest("joe", "12345678", "12/12/24", 1, 2);

<ins>2. Check Package Availability</ins>

Parameters: packageId (number): ID of the package.

Description: Displays information about the package, including name, price, description, and available seats.

Example: trip.checkPackageAvailability(1);

<ins>3. Check Car Availability</ins>

Parameters: carId (number): ID of the car.

Description: Displays whether the specified car is available. If unavailable, error will be shown.

Example: trip.checkCarAvailability(1);

<ins>4. Cancel a Booking</ins>

Parameters: guestId (number): ID of the guest booking to cancel.

Description: Cancels the booking for the specified guest, updates seat availability, and changes booking status to "Cancelled".

Example: trip.cancelBooking(1);

<ins>5. Mark a Car as Unavailable</ins>

Parameters: carId (number): ID of the car.

Description: Sets the specified car’s status to unavailable. If code is deleted, it will revert back to the original status.

Example: bookingSystem.markCarAsUnavailable(2);


<ins>6. Mark a Car as Available</ins>

Parameters: carId (number): ID of the car.

Description: Sets the specified car’s status to available. If code is deleted, it will revert back to the original status.


Example: trip.markCarAsAvailable(1);
### Data Structure
<ins>Cars:</ins>
let cars = [
  { id: 1, model: "big car", available: false },
  { id: 2, model: "big big car", available: true }
];
<ins>Packages:</ins>
let packages = [
  { id: 1, name: "city tour", price: 100, description: "Explore the city in a day", availableSeats: 10 },
  { id: 2, name: "mountain seeing", price: 200, description: "A day in the mountains with scenic views", availableSeats: 5 }
];

<ins>Bookings</ins>:
Stored in an array bookings, with each entry containing guest information, trip details, and status.

# References
 **1. how to create a good readme file**
 https://github.com/othneildrew/Best-README-Template 

 **GitHub formatting**
 https://github.com/othneildrew/Best-README-Template