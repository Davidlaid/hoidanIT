import React from 'react';

class MyComponent extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }
  render() {
    return (
      <div>
        <form action="/action_page.php">
        <label for="fname">First name:</label><br/>
        <input type="text" value={this.state.firstName}/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text"  value=""/><br/><br/>
        <input type="submit" value="Submit"/>
      </form> 
      </div>
    )
  }
}

export default  MyComponent;

//? BT:  Thu Thập Dữ Liệu Inputs HTML
// Bước 1: add html, jsx
// Bước 2: tạo state