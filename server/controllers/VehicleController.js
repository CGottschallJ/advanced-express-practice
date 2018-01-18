import vehicles from '../vehicles';
import VehicleModel from '../models/VehicleModel';

export function list(request, response) {
  VehicleModel.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

export function show(request, response) {
  let id = request.params.id;
  return response.json(vehicles.find(vehicle => vehicle._id == id));
}

export function create(request, response) {
  return response.json(vehicles.push(request.body));
}
