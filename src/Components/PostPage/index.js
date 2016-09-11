import React, {Component} from 'react';
import axios from 'axios';
import Title from 'react-title-component';
import ReactDisqusThread from 'react-disqus-thread';
import './PostPage.css';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount() {
    console.log(this.props.params);
    axios.post('http://blog-mikqi.azurewebsites.net/api/article/', this.props.params)
      .then(res => {
        console.log(res)
        this.setState({
          article: res.data.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleComment(comment) {
    console.log(comment);
  }

  render() {
    console.log(this.state.article);
    const article = this.state.article;
    let category;
    if(article.category !== undefined) {
      category = article.category.length > 0 ? article.category.join(', '): article.category[0];
    }

    const title = article.title ? article.title + " - Blog" : "Loading...";

    return (
      <div className="postpage">
        <Title render={title} />
        <div className="postpage--overflow">
          <div className="postpage__banner" style={{backgroundImage: "url(http://placekitten.com/1000/300)"}}></div>
          <div className="postpage-container">
            <h1 className="postpage__header">{article.title}</h1>          
            <div className="postpage__detail-post">
              <span className="postpage__detail-post--date">{article.formatedDate}</span>
            </div>
            <div className="postpage__category">
              <span>{category}</span>
            </div>
            <div className="postpage__content" dangerouslySetInnerHTML={{__html: article.body}}></div>
            
            <ReactDisqusThread 
              shortname="Rivki"
              identifier={article._id}
              title={title}
              url={window.location.href}
              category_id="123456"
              onNewComment={this.handleComment}
            />
            

          </div>
        </div>
      </div>
    );
  }
}

export default PostPage;