import React from 'react';

class MyComponent extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  // get data
  handlClickGetApi = () => {
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form action="/action_page.php">
        <label htmlFor="fname">First name:</label><br/>
        <input 
          type="text" 
          value={this.state.firstName}
          onChange={(event)=> {this.handleChangeFirstName(event)}}
        />
        <br/>
        <label htmlFor="lname">Last name:</label><br/>
        <input 
          type="text"
          value={this.state.lastName}
          onChange={(event)=>{this.handleChangeLastName(event)}}
        />
        <br/><br/>
        <input 
          type="button" 
          value="click me"
          onClick={(event)=>{this.handlClickGetApi(event)}}
        />
      </form> 
      </div>
    )
  }
}

export default  MyComponent;

//! BT:  Thu Thập Dữ Liệu Inputs HTML
// Bước 1: add html, jsx
// Bước 2: 
/*
- tạo state
- gán this.state.value vafo input tag theo biến state
*/

//? Tới bước này ta vẫn chưa nhập được dữ liệu do ta thiếu handle event
// Bước 3:  thêm event onChange vào input tag
//? Lý do thêm event onChange vì đây là tag input yêu cầu người dùng nhập dữ liệu,
//?hàm onChange xử lý sự thay đổi khi user nhập dữ liệu
/*
- create arrow function named handleChangeFirstName để gán vào hàm onChange
- thêm hàm onChange vào input tag rồi gán hàm handleChangeFirstName  (fucntion react)
*/

// Bước 4: lấy dữ liệu
/*
- tạo hàm handlClickGetApi
- thêm hàm onClick vào button rồi gán hàm handlClickGetApi
*/