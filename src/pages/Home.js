import React, { Component } from 'react';
import axios from 'axios';
import pumpkin from './Pumpkin.jpg';

import AboutPage from './About';
import StudentForm from '../components/StudentForm/StudentForm';
import StudentList from '../components/StudentList/StudentList';

class HomePage extends Component {
  state = {
    studentList: [],
    errorMsg: null,
  };

  componentDidMount() {
    this.getStudents();
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    //axios call
    // POST your data here
    axios({
      method: 'POST',
      url: '/students',
      data: newStudent,
    })
      .then((response) => {
        this.getStudents();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Could not help this kid',
        });
      });
  };

  getStudents() {
    axios({
      method: 'GET',
      url: '/students',
    })
      .then((response) => {
        console.log(response);
        this.setState({
          studentList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Something went bad with gets',
        });
      });
  }

  render() {
    return (
      <div>
        <StudentForm addStudent={this.addStudent} />
        <StudentList students={this.state.studentList} />
        <div>
          <img className="pumkinTainer" src={pumpkin} alt="Happy Halloween" />
          <iframe
            src="https://open.spotify.com/embed/album/2kAB6U6XJQ9lXK7TPsmaR4"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default HomePage;
