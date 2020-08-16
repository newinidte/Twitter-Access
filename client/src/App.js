import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello?name=Ganesh');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world?searchDetails=' + this.state.post)

    const json = await response.text();

    this.setState({ responseToPost: json });

  };

  render() {

    return (
      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Search</button>
        </form>
        {/* {Object.keys(this.state.responseToPost).map((postDetails,index)=>{
    return <div>
      <h1 key={index}>{postDetails.name}</h1>
    </div>
  })} */}
  <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;