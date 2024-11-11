let cars = [
    { id: 1, model: "big car", available: false },
    { id: 2, model: "big big car", available: true }
];

let packages = [
    { id: 1, name: "city tour", price: 100, description: "Explore the city in a day", availableSeats: 10 },
    { id: 2, name: "mountain seeing", price: 200, description: "A day in the mountains with scenic views", availableSeats: 5 }
];

let bookings = [];

module.exports = {
  registerTripGuest(name, contact, tripDate, carId, packageId) {
    const tripPackage = packages.find(p => p.id === packageId);
    if (!tripPackage) {
      console.error(`[ERROR]: Package ID ${packageId} not found.`);
      return;
    }

    const car = cars.find(c => c.id === carId);
    if (!car) {
      console.error(`[ERROR]: Car ID ${carId} not found.`);
      return;
    }

    if (!car.available) {
      console.error(`[ERROR]: Car model ${car.model} is unavailable.`);
      return;
    }

    if (tripPackage.availableSeats <= 0) {
      console.error(`[ERROR]: No available seats for package ${tripPackage.name}.`);
      return;
    }

    const newGuest = {
      guestId: bookings.length + 1,
      name,
      contact,
      tripDate,
      packageId,
      carId,
      status: "Pending"
    };
    bookings.push(newGuest);

    tripPackage.availableSeats -= 1;

    console.log(`Guest registered successfully for package ${tripPackage.name} with car model ${car.model}.`);
  },

  checkPackageAvailability(packageId) {
    const tripPackage = packages.find(p => p.id === packageId);
    if (!tripPackage) {
      console.error(`[ERROR]: Package with ID ${packageId} not found.`);
      return;
    }

    console.log(`Package: ${tripPackage.name}\nPrice: ${tripPackage.price}\nDescription: ${tripPackage.description}\nAvailable Seats: ${tripPackage.availableSeats}`);
  },

  checkCarAvailability(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) {
      console.error(`[ERROR]: Car with ID ${carId} not found.`);
      return;
    }

    if (car.available) {
      console.log(`Car model ${car.model} is available.`);
    } else {
      console.log(`Car model ${car.model} is unavailable.`);
    }
  },

  cancelBooking(guestId) {
    const guest = bookings.find(g => g.guestId === guestId);
    if (!guest || guest.status !== "Pending") {
      console.error(`[ERROR]: Cannot cancel booking for Guest ID ${guestId}.`);
      return;
    }

    const tripPackage = packages.find(p => p.id === guest.packageId);
    if (!tripPackage) {
      console.error(`[ERROR]: Package ID ${guest.packageId} not found.`);
      return;
    }

    tripPackage.availableSeats += 1;

    guest.status = "Cancelled";
    console.log(`Booking for Guest ID ${guestId} has been cancelled.`);
  },

  markCarAsUnavailable(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) {
      console.error(`[ERROR]: Car ID ${carId} not found.`);
      return;
    }

    car.available = false; 
    console.log(`Car model ${car.model} marked as unavailable.`);
  },

  markCarAsAvailable(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) {
      console.error(`[ERROR]: Car ID ${carId} not found.`);
      return;
    }

    car.available = true;
    console.log(`Car model ${car.model} marked as available.`);
  }
};
