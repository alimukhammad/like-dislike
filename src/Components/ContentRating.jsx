
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
      dislikes: 0,
    
      handleLike:() =>{ //event handler
        // increase & decrease
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },
      handleDislike:() =>{ //event handler
        // increase & decrease
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }
    };

  }
  render() {
    return (
      <div className='content-rating'>
        <p> Trump or Kamala</p>
        <div className='rating-buttons'>

          {/* call event handlers */}
          <button className='like-button' onClick={this.state.handleLike}> 
            Like ({this.state.likes}) //use the state object values
          </button>

          {/* call event handlers */}
          <button className='dislike-button' onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes}) //use the state object values
          </button>
          
        </div>
      </div>
    );
  }
}

export default ContentRating;
