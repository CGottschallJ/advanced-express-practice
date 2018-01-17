import contacts from '../contacts';

export function list(request, response) {
  return response.json(contacts);
}

export function show(request, response) {
  let id = request.params.id;
  return response.json(contacts.find(contact => contact._id == id));
}

export function create(request, response) {
  return response.json(contacts.push(request.body));
}
