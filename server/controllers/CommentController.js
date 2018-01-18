import comments from '../comments';
import CommentModel from "../models/CommentModel";

export function list(request, response) {
  CommentModel.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}

export function show(request, response) {
  let id= request.params.id;
  return response.json(comments.find(comment => comment._id == id));
}

export function create(request, response) {
  return response.json(comments.push(request.body));
}
