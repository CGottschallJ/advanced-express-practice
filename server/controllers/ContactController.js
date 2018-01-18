import contacts from '../contacts';
import ContactModel from "../models/ContactModel";

export function list(request, response) {
  ContactModel.find({}).exec()
  .then(contacts => {
    return response.json(contacts);
  });
}

export function show(request, response) {
  let id = request.params.id;
  return response.json(contacts.find(contact => contact._id == id));
}

export function create(request, response) {
  return response.json(contacts.push(request.body));
}
