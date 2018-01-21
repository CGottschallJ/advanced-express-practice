import React, {Component} from "react";


class Comment extends Component {

  componentDidMount() {
    const commentId = this.props.match.params.id;
    this.props.getComment(commentId);
  }

  render() {
    return (
      <div>
        <h2>Comment: {this.props.comment.body}</h2>
      </div>
    )
  };
}

export default Comment;
