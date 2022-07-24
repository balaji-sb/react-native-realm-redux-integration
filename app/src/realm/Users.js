import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Realm from 'realm';
import {setUsers} from '../redux/actions';
import {UserSchema} from './UserSchema';

const Users = ({navigation}) => {
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.userInfoReducer);

  useEffect(() => {
    if (users.length == 0) getInfo();
  }, [users]);

  const getInfo = async () => {
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [UserSchema],
    });
    dispatch(setUsers(realm.objects('Users')));
  };

  return (
    <>
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
        <Text>Length is {users.length}</Text>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <Text
              onPress={() => {
                navigation.push('Home');
              }}
              style={{
                padding: 10,
                borderRadius: 5,
                borderColor: 'greeen',
                borderWidth: 0.5,
                margin: 10,
              }}>
              {item.username + ' \n' + item.email}{' '}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

export default Users;
