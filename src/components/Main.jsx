import React, { Component } from "react";
import MyModal from "./MyModal";
import '../main.css';
import ProgressBar from "./ProgressBar";
import { Link } from 'react-router-dom';

class Main extends Component {
  state = { count: 0, intervalId: 0 };

  handleClick = () => {
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    },350);
    
    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }


  handleUploadImage = (ev) => {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:5000/${body.file}` });
      });
    });
  };

  render() {
    return (
      <div className="relative w-full h-full">
        <p className="font-bold text-5xl w-1/2 text-center popebold leading-snug mx-auto text-green-900 mt-52">
          Fix Those Clashing Courses in just a few seconds.
        </p>

        <form
          onSubmit={this.handleUploadImage}
          className="flex flex-row mx-auto formWidth gap-x-8 mt-10"
        >
          <input
            ref={(ref) => {
              this.uploadInput = ref;
            }}
            type="file"
            accept=".txt, .json"
            className="w-72 p-6 bg-green-100 rounded-lg popreg"
          />

          <input
            ref={(ref) => {
              this.fileName = ref;
            }}
            type="text"
            className="w-1"
          />

          <button className="bg-purple-500 shadow-lg rounded-lg text-white h-14 w-32 mt-3 hover:bg-purple-700 popmedium">
            Upload
          </button>
        </form>
        {/* <MyModal/> */}
        {this.state.count <= 100 && <ProgressBar bgcolor={"#ef6c00"} completed={this.state.count}/>}
        {this.state.count > 100 && <Link to="/timetable"><button className="bg-green-500 shadow-lg rounded-lg text-white h-14 w-48 mx-auto mt-3 hover:bg-green-700 popmedium">
            Preview Timetable
          </button></Link>}
        <h1 onClick={this.handleClick}>Click me</h1>
      </div>
    );
  }
}

export default Main;
