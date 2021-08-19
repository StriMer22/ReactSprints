import React, {Component} from "react";
import {connect} from 'react-redux'

const mapStateItem = (state, ownProps) => {
    return {
        authors: state.authors,
        post: ownProps.post
    }
}

class PostListItem extends Component {
    render() {
        const {authors = []} = this.props
        const {post} = this.props
        const author = authors.find(author => author.authorId === post.authorId) || {name: 'Unknown'}
        const {name} = author
        return (
            <li key={post.id} >{post.title}, by {name}</li>
        )
    }
}

export default connect(mapStateItem)(PostListItem);