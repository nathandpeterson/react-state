import React, { Component } from 'react';

class Greetings extends Component {
    constructor(props) {
        super(props)
        this.state = { emoji: ['Hello'] }
    }

    clickHandler = (e) => {
        e.preventDefault()
        console.log(e.target.input.value)
        this.setState({emoji: [e.target.input.value, ...this.state.emoji]})
    }

    render() {
        return ( < form onSubmit = { this.clickHandler } >
            <input name="input" />
            <div > { this.state.emoji } </div>  
            <button > Submit </button>  
            </form>
        )
    }
}

export default Greetings