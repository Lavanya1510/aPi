import React, { Component } from 'react';
export class App extends Component {
state = {
  isLoading: true,
  users: [],
  error: null
}
fetchUsers() {
 
   fetch(`https://jsonplaceholder.typicode.com/users`)

   
    .then(response => response.json())
    
    .then(data =>
      this.setState({
        users: data,
        isLoading: false,
      })
    )
 
    .catch(error => this.setState({ error, isLoading: false }));
}
componentDidMount() {
  this.fetchUsers();
}

 


  render() {
    return (
      <React.Fragment>
         
         <h1>Random User</h1>
         {this.state.error ? <p>{this.state.Error.message}</p> : null}
    
      {!this.state.isLoading ? (
       
        this.state.users.map(user => {
          const { username, name, email } = user;
          return (
            <div key={username}>
              <p>Name: {name}</p>
              <p>Email Address: {email}</p>
              <hr />
            </div>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
      </React.Fragment>
    )
  }
}

export default App

