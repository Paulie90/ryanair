export default class HomeController {
  $onInit() {
    this.routes = this.airports.routes;
    this.airports = this.airports.airports;
  }
}
