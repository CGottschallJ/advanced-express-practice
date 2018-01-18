import products from '../products';
import ProductModel from "../models/ProductModel"

export function list(request, response) {
  ProductModel.find({}).exec()
  .then(products => {
      return response.json(products);
  });
}

export function show(request, response) {
  let id = request.params.id;
  return response.json(products.find(product => product._id == id));
}

export function create(request, response) {
  return response.json(products.push(request.body));
}
