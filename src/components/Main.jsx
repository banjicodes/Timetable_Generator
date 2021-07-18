import React, { Component } from "react";
import MyModal from "./MyModal";

class Main extends Component {
  state = {};

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
      <div className="relative">
        <div className="mx-auto text-center">
          <form onSubmit={this.handleUploadImage} className="flex ">
            <input
              ref={(ref) => {
                this.uploadInput = ref;
              }}
              type="file"
            />

            {/* <input
              ref={(ref) => {
                this.fileName = ref;
              }}
              type="text"
              placeholder="Enter the desired name of file"
            /> */}

            <button>Upload</button>
          </form>
          {/* <MyModal/> */}
        </div>
      </div>
    );
  }
}

export default Main;
