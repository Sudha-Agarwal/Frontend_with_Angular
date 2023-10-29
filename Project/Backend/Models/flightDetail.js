class FlightDetails {
    constructor() {
        this.routePrices = [
            { route: 'New York-London', price: 200 },
            { route: 'London-Paris', price: 180 },
            { route: 'default', price: 150 } // Default price
            // Add more routes as needed
        ];
    }

    getBasePrice(source, destination) {
        const route = `${source}-${destination}`;
        const foundRoute = this.routePrices.find(r => r.route === route);
        return foundRoute ? foundRoute.price : this.routePrices.find(r => r.route === 'default').price;
    }
}

module.exports = FlightDetails;