import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setPassword, setUserName} from './redux/actions';

const Login = ({navigation}) => {
  const {username, password} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        marginHorizontal: 10,
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{textAlign: 'center', fontSize: 24}}>Redux Sample</Text>
      <TextInput
        style={{
          borderRadius: 5,
          borderWidth: 1,
          marginTop: 24,
          borderColor: 'gray',
        }}
        onChangeText={value => {
          dispatch(setUserName(value));
        }}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={{
          borderRadius: 5,
          borderWidth: 1,
          marginTop: 20,
          borderColor: 'gray',
        }}
        secureTextEntry={true}
        onChangeText={value => {
          dispatch(setPassword(value));
        }}
        value={password}
        placeholder="Password"
      />
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: 'black',
          padding: 16,
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => navigation.push('Dashboard')}>
        <Text style={{color: 'white'}}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
