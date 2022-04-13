import React from 'react'
import {
  Button 
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {increment,decrement} from './redux/action'


class App extends React.Component {
  render() {
    return (
      <div style={{height:'100vh'}}>
        <h1 style={styles.title}>Counter</h1>
        <div style={styles.container}>
          <Button variant="danger" size="lg" onClick={this.props.decrement}>-</Button>
          <h1 style={styles.content}>{this.props.count}</h1>
          <Button variant="success" size="lg" onClick={this.props.increment}>+</Button>
        </div>
      </div>
    );
  }
  
}

const styles ={
  title: {
    textAlign: 'center'
  },
  container:{
    margin: 'auto',
    justifyContent:'space-between',
    display: 'flex',
    width:'40%',
    height:'70%',
    alignItems:'center'
  },
  content:{
    fontSize:'200px'
  }
}

const mapStateProps = (state) => {
  return {
    count: state.countReducer.count
  }
}
export default connect(mapStateProps,{increment,decrement})(App);