import vehicles from '../vehicles';
import VehicleModel from '../models/VehicleModel';

export function list(request, response) {
  VehicleModel.find({}).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

export function show(request, response) {
  VehicleModel.findById(request.params.id).exec()
  .then(vehicle => {
    response.json(vehicle);
  });
}

export function create(request, response) {
  const vehicle = new VehicleModel(request.body);
  vehicle.save()
  .then(vehicle => {
    response.json(vehicle);
  });
}
