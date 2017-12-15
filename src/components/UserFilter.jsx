import React, { Component } from "react";

class UserFilter extends Component {
  handleChange = e => {
    e.target.value == "recent"
      ? this.props.filterByRecent()
      : this.props.filterByOld();
  };

  render() {
    return (
      <div>
        <p>Filter by</p>
        <form action="">
          <select onChange={this.handleChange}>
            <option value="recent">Most recent first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </form>
      </div>
    );
  }
}

export default UserFilter;
