import React, { Component } from "react";

class CourseList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <li>
            <span>{this.props.details.name}</span>
            <button
              onClick={() => {
                this.props.deleteCourse(this.props.index);
              }}
            >
              delete
            </button>
          </li>
        </div>
      </React.Fragment>
    );
  }
}

export default CourseList;
