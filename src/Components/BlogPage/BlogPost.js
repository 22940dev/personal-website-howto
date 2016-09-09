import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/articles')
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data.articles
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.articles)
    return (
      <div>
      {this.state.articles.map(article => {
        return (
          <div className="blog-post__container" key={article._id}>
            <div className="blog-post__header">
              <Link to={"/blog/" + article.title} ><h2>{article.title}</h2></Link>
            </div>
            <div className="blog-post__content">
              <p>{article.body.replace(/(<([^>]+)>)/ig, '')}</p>
              <p>read more»</p>
            </div>
            <div className="blog-post__footer">
              <h3 className="blog-post__footer--tags">{article.category.length > 0 ? article.category.join(', '): article.category[0]}</h3>
              <h3 className="blog-post__footer--date">{article.formatedDate}</h3>
            </div>
          </div>
        )
      })}
      </div>
    );
  }
}

export default BlogPost;