// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0} 

  let randomNumber = Math.ceil(Math.random()* 100);

  increment = () => {
      this.setState((prevState) => ({count: prevState.count + randomNumber}))
  } 

  IsOddOrEven = () => {
      const {count} = this.state 
      return (count%2=== 0)? <p>Count is Even</p> : <p>Count is Odd</p>
  }


  render() { 
    return (
        <div className= "main-container">
            <div>
                <h1>Count {}</h1>
                {this.IsOddOrEven()}
                <button type = "button" onClick = {this.increment}>Increment</button> 
                <p>*Increase By Random Number Between 0 and 100</p>
            </div>
        </div>
    )
  }
} 

export default EvenOddApp
