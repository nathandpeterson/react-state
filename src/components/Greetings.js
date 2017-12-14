import React, { Component } from 'react';


const greeting = 'Greetings';

class Greetings extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div>
          { greeting }
        </div>
      </div>
    )
  }
}

export default Greetings;
