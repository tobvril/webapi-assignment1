let cars = [
    { id: 1, model: "big car", available: true },
    { id: 2, model: "big big car", available: true }
];

let packages = [
    { id: 1, name: "city tour", price: 100, description: "Explore the city in a day" },
    { id: 2, name: "mountain seeing", price: 200, description: "A day in the mountains with scenic views" }
];

let bookings = [];

module.exports = {
  registerTripGuest(name, contact, tripDate, packageId) {
    const tripPackage = packages.find(p => p.id === packageId);
    if (!tripPackage) {
      console.error(`[ERROR]: Package ID ${packageId} not found.`);
      return;
    }
    
    const newGuest = {
      guestId: bookings.length + 1,
      name,
      contact,
      tripDate,
      packageId,
      status: "Pending"
    };
    bookings.push(newGuest);
    console.log(`Guest registered successfully for package ${tripPackage.name}.`);
  },

  updateTripDetails(guestId, name, contact, tripDate, packageId) {
    const guest = bookings.find(g => g.guestId === guestId);
    if (!guest) {
      console.error(`[ERROR]: Guest with ID ${guestId} not found.`);
      return;
    }
    if (guest.status === "Checked-In") {
      console.error(`[ERROR]: Cannot update details for Guest ID ${guestId} after check-in.`);
      return;
    }
    
    guest.name = name;
    guest.contact = contact;
    guest.tripDate = tripDate;
    guest.packageId = packageId;
    console.log(`Guest details updated for guest ID ${guestId}.`);
  },

  retrieveGuestDetails(guestId) {
    const guest = bookings.find(g => g.guestId === guestId);
    if (!guest) {
      console.error(`[ERROR]: Guest with ID ${guestId} not found.`);
      return;
    }
    
    const packageName = packages.find(p => p.id === guest.packageId).name;
    console.log(`Guest ID: ${guest.guestId}\nName: ${guest.name}\nPackage: ${packageName}\nStatus: ${guest.status}`);
  },

  checkPackageAvailability(packageId) {
    const tripPackage = packages.find(p => p.id === packageId);
    if (!tripPackage) {
      console.error(`[ERROR]: Package with ID ${packageId} not found.`);
      return;
    }
    
    console.log(`Package: ${tripPackage.name}\nPrice: ${tripPackage.price}\nDescription: ${tripPackage.description}`);
  },

  cancelBooking(guestId) {
    const guest = bookings.find(g => g.guestId === guestId);
    if (!guest || guest.status !== "Pending") {
      console.error(`[ERROR]: Cannot cancel booking for Guest ID ${guestId}.`);
      return;
    }
    
    guest.status = "Cancelled";
    console.log(`Booking for Guest ID ${guestId} has been cancelled.`);
  }
};
