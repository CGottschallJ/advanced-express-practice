import products from '../products';

export function list(request, response) {
  return response.json(products);
}

export function show(request, response) {
  let id = request.params.id;
  return response.json(products.find(product => product._id == id));
}

export function create(request, response) {
  return response.json(products.push(request.body));
}
