import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { newInput } from '../redux/actions/InputActions';



const UserSearch = (props) => {

    const [input, setInput] = useState('testi2');

   

    return (
        <>

        <Input
        title='userInput'
        placeholder='GitHub user name'
        onChangeText={text => setInput(text)}
        />

        <Button onPress={() => props.reduxUserInput(input)}
        title='FETCH'/>

        <Text h1> {props.userInput} </Text>
        <Text h1> {input} </Text>
        

        </>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
    userInput: state.inputReducer.userInput,
    
    };
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduxUserInput: (i) => dispatch(newInput(i)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
