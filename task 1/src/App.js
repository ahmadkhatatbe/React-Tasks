import logo from "./logo.svg";
import ReactDOM from "react-dom/client";

import React, { Component } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import "./App.css";

import Home from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
class App extends Component {
  state = {
    courses: [{ name: "Courses" }, { name: "ahmed" }, { name: "mohammed" }],
    current: "",
  };

  // updateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  // Add Course

  addCourse = (e) => {
    e.preventDefault();

    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({ courses, current: "" });
  };
  //   deleteCourse

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({ courses });
  };

  render() {
    <BrowserRouter>
      <nav className="appp">
        <NavLink className="link" to="/Home">
          Home
        </NavLink>

        <NavLink className="link" to="/Login">
          Login
        </NavLink>

        <NavLink className="link" to="/Register">
          Register
        </NavLink>
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>;
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
        />
      );
    });
    return (
      <section className="App">
        <h1>To Do List</h1>

        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />

        <ul>{courseList}</ul>
      </section>
    );

  }
}

export default App;
