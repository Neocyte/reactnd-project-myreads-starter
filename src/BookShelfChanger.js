import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {
  propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  // Lets react know what the current shelf of a book is
  state = {
    currentShelf: this.props.book.shelf
  };

  changeShelf = (event) => {
    this.props.changeShelf(this.props.book, event.target.value);
    this.setState({
      currentShelf: event.target.value
    });
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;
