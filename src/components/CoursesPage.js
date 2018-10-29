import React, { Component,PropTypes } from 'react';
import {connect} from 'react-redux';

import * as courseActions from '../actions/courseActions';


class CoursesPage extends Component {

    constructor(props,context){
        super(props);
        this.state = {
            course:{title:''}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    onTitleChange(e){
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course:course});
    }

    handleClick(){
        // alert(this.state.course.title)
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }
    courseRow(course , index){
        return <div key={index}>{course.title}</div>
    }
  render() {
    return (
      <div>
          <h1>Courses</h1>
          {this.props.courses.map(this.courseRow)}
          <h2>Add Course</h2>
          <input typpe="text" onChange={this.onTitleChange} value={this.state.title}/>

          <input type="submit" onClick={this.handleClick} value="Save"/>
        
      </div>
    )
  }
}

// CoursesPage.propTypes={
//     dispatch:PropTypes.func.isRequired,
//     courses:PropTypes.array.isRequired
// };

function mapStateToProps(state , ownProps){
    return {
        courses:state.courses
    };
}

export default connect(mapStateToProps) (CoursesPage);