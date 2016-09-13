import React, {Component} from 'react';
import axios from 'axios';
import Title from 'react-title-component';
import ReactDisqusThread from 'react-disqus-thread';
import Loader from 'halogen/ScaleLoader';
import Markdown from 'react-remarkable';
import './PostPage.css';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      loading: true,
    }
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount() {

    console.log(this.props);

    let title = {
      title: this.props.params.title.replace(/-/g, '%20')
    }

    console.log(title);

    axios.post('http://blog-mikqi.azurewebsites.net/api/article/', title)
      .then(res => {
        console.log(res)
        this.setState({
          article: res.data.data[0],
          loading: false,
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

    const loading = <div className="loading"> <Loader size="50px" margin="4px" color="#F15152" /> </div>;


    return (
      <div className="postpage">
        <Title render={title} />
        {this.state.loading ? loading :
          <div className="postpage--overflow">
            <div className="postpage__banner" style={{backgroundImage: `url(${article.banner})`}}></div>
            <div className="postpage-container">
              <h1 className="postpage__header">{article.title}</h1>          
              <div className="postpage__detail-post">
                <span className="postpage__detail-post--date">{article.formatedDate}</span>
              </div>
              <div className="postpage__category">
                <span>{category}</span>
              </div>
              <div className="postpage__content">
                <Markdown hash={{html: true}} source={article.body} />
              </div>
              
              <ReactDisqusThread 
                shortname="Rivki"
                title={title}
                identifier={article._id}
                url={window.location.href}
                category_id="123456"
                onNewComment={this.handleComment}
              />
              

            </div>
          </div>
        }
      </div>
    );
  }
}

export default PostPage;