import React, { Component } from 'react';
import { Jumbotron, Button} from 'react-bootstrap';

import Comments from '../../Comments/Comments';

class Article extends Component {
     state ={
          isOpen: false
     };

     toggleOpen = () => {
          this.setState( ( prevState ) => {
              return { isOpen: !prevState.isOpen };
          } );
      };

      getBody = () => {
          if (this.state.isOpen) {
               return (
               <div>
                    <p>{this.props.article.text}</p>
                    <Comments comments={this.props.article.comments} />
               </div>
               )
          } return null
      };

     render() {
          return (
               <Jumbotron>
                    <h3>{this.props.article.title}</h3>
                    <p><Button onClick={this.toggleOpen}bsStyle="primary">Learn more</Button></p>
                    {this.getBody()}
               </Jumbotron>
          );
     }
}

export default Article;