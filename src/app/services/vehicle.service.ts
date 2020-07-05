import { Vehicle, SaveVehicle } from './../models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  
  private readonly vehiclesEndpoint = 'https://localhost:44380/api/vehicles';
  constructor(private http: HttpClient) { }

  getFeatures(){

    return this.http.get('https://localhost:44380/api/features').pipe();
  }

  getMakes(){

    return this.http.get('https://localhost:44380/api/makes').pipe();

  }

  Create(vehicle){
    return this.http.post(this.vehiclesEndpoint, vehicle).pipe();
  }

  getVehicle(id){
    return this.http.get(this.vehiclesEndpoint + '/' + id).pipe();
  }

  getVehicles(filter){
    return this.http.get(this.vehiclesEndpoint + '/' + '?' + this.toQueryString(filter)).pipe();
  }

  toQueryString(obj){
    var parts = [];
    for (var property in obj){
      var value = obj[property];
      if (value != null && value != undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }

  update(vehicle: SaveVehicle){
    return this.http.put(this.vehiclesEndpoint + '/' + vehicle.id, vehicle).pipe();
  }

  delete(id){
    return this.http.delete(this.vehiclesEndpoint + '/' + id).pipe();
  }

}
