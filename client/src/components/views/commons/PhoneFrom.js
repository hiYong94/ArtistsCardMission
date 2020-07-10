import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: ''
  }
//   const onSearchHandler = (event) => {
//     // event.preventDefault()
//     console.log("######################")
//     let name = event.target.value

//     console.log("출력하거라", name)
//     let params = {
//         params: event.target.value
//     }

//     console.log("파라미터", params)

//     axios.get(`/api/music/search/${params}`)
//         .then((response) => {
//             if(response.data.success) {
//                 console.log("엑시오스", response.data)
//             } else {
//                 alert('Failed to get Music')
//             }
//         })
// }
onSearchHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form>
        <input
            placeholder="음악 검색"
            name="name"
            onChange={this.onSearchHandler}
            value={this.state.name}
        />
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default PhoneForm