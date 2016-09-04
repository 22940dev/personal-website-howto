import React, {Component} from 'react';
import axios from 'axios';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:1234/api/articles')
      .then(res => {
        console.log(res);
        this.setState({
          articles: res.data.articles
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      {this.state.articles.map(article => {
        return (
          <div className="blog-post__container">
            <div className="blog-post__header">
              <h2>{article.title}</h2>
            </div>
            <div className="blog-post__content">
              <p>{article.article}</p>
              <p>read more»</p>
            </div>
            <div className="blog-post__footer">
              <h3 className="blog-post__footer--tags">{article.tags.length > 0 ? article.tags.join(', '): article.tags[0]}</h3>
              <h3 className="blog-post__footer--date">{article.date}</h3>
            </div>
          </div>
        )
      })}
      </div>
    );
  }
}

export default BlogPost;