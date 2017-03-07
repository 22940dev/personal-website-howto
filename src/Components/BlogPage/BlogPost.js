import React, { Component } from 'react';
import {Link} from 'react-router';
import Title from 'react-title-component';
import Loader from 'halogen/ScaleLoader';
import axios from 'axios';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      articles: [],
    }
  }

  componentDidMount() {
    axios.get('http://mikqi-blog.herokuapp.com/api/v1/articles')
      .then(res => {
        this.setState({
          articles: res.data.articles,
          loading: false
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    const articles = this.state.articles.map(article => {
      return (
        <div className="blog-post__container" key={article._id}>
          <div className="blog-post__header">
            <Link to={"/blog/" + article._id} ><h2>{article.title}</h2></Link>
          </div>
          <div className="blog-post__content">
            <p>{ article.shortDescription !== undefined ? article.shortDescription.replace(/(<([^>]+)>)/ig, '') : ''}</p>
            {/* <p>read more»</p> */}
          </div>
          <div className="blog-post__footer">
            <h3 className="blog-post__footer--tags">{article.category.length > 0 ? article.category.join(', '): article.category[0]}</h3>
            <h3 className="blog-post__footer--date">{article.formatedDate}</h3>
          </div>
        </div>
      )
    });

    const loading = <div className="loading"> <Loader size="50px" margin="4px" color="#F15152" /> </div>;

    return (
      <div style={{width: '100%'}}>
        <Title render="About Rivki - Blog" />
        {this.state.loading ? loading : articles }
        
      </div>
    );
  }
}

export default BlogPost;