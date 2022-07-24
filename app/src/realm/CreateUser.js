import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserName, setEmailId} from '../redux/actions';
import Realm from 'realm';
import {UserSchema} from './UserSchema';

const CreateUser = ({navigation}) => {
  const {username, email} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const createUser = async () => {
    let user1;
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [UserSchema],
    });
    const id = realm.objects('Users').length + 1;
    realm.write(() => {
      user1 = realm.create('Users', {
        _id: id,
        username: username,
        email: email,
      });
      console.log(`Created user as ${user1.username} and id is ${user1._id}`);
      navigation.push('Users');
    });
  };

  return (
    <View
      style={{
        marginHorizontal: 10,
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{textAlign: 'center', fontSize: 24}}>Create User</Text>
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
        onChangeText={value => {
          dispatch(setEmailId(value));
        }}
        value={email}
        placeholder="Email ID"
      />
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: 'black',
          padding: 16,
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => {
          //navigation.push('Home')
          createUser();
        }}>
        <Text style={{color: 'white'}}>Create User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateUser;
