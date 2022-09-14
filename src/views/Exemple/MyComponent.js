import React from 'react';
//! giải thích hàm onChange, thay đổi state
/*
Các sự kiện xảy ra khi người dùng nhấn một phím trên bàn phím.
Dùng onChange cho bàn phím, onClick-chuột, ...
aaa
*/
class MyComponent extends React.Component {
    //! giải thích từ khóa this:
    /*
      this chính là bản thân của cả component này (class MyComponent extends React.Component )
      khi dùng this thì chương trình nó hiểu là đang gọi đến class MyComponent
    */

    
    //! state
    // state là memory(bộ nhớ). là một object
    // sttate giúp ứng dụng cật nhật lại trang mà ko phải reload lại trang

    // định nghĩa state global
  state = {
    name: "",
    chanel: "ho idan It"
  }

  handleOnChange = (event) => {
    console.log("'event.target.value':", event.target.value, "'event target':",
    event.target, "'event obj':" , event);
    this.setState({
      name: event.target.value
    })
  }

  handleClickButton = () => {
    alert("helo world")
  }
  render() {
    return (
      <div>
        <h2>Hi, I am {this.state.name}</h2>
        <h3>My youtobe chanel: {this.state.chanel}</h3>
        <div className='change-name'>
          <input 
          value={this.state.name}
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          >
          </input>
        </div>
        <div className='second'>
          <button onClick={() => this.handleClickButton()}>click me</button>
        </div>
      </div>
    )
  }
}

export default  MyComponent;