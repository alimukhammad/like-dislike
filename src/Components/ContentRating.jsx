
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
        <h2>New President</h2>
        <p> Trump or Kamala</p>

        <div className='rating-buttons'>

          {/* call event handlers */}
          {/*use the state object values*/}
          <button className='like-button' onClick={this.state.handleLike}> 
            Trump ({this.state.likes})
          </button>

          {/* call event handlers */}
          {/*use the state object values*/}
          <button className='dislike-button' onClick={this.state.handleDislike}>
            Kamala ({this.state.dislikes})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
