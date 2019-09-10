import React, { useEffect,  useState  } from "react";
import {connect} from 'react-redux';
import {increment, decrement} from '../actions'
import {
  Text,
  View,
  Button,
} from 'react-native';



const Test = props => {
  //const [id, setId] = useState(1);
  // increment = () => {
  //   props.dispatch({ type: 'INCREMENT' });
  // }
  //
  // decrement = () => {
  //   props.dispatch({ type: 'DECREMENT' });
  // }
  return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Button title = "-" onPress={() => props.decrementa()}/>
          <Text>Loading... {props.count}</Text>
          <Button title = "+" onPress={() => props.incrementa()}/>
        </View>
  );
};

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
      incrementa: () =>{
        dispatch(increment())
      },
      decrementa: () =>{
        dispatch(decrement())
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
