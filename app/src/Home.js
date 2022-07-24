import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UserSchema} from './realm/UserSchema';
import {setUsers} from './redux/actions';
import Realm from 'realm';

const Home = () => {
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
    const users = realm.objects('Users');
    dispatch(setUsers(users));
  };

  return (
    <>
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
        {/* <Text>Length is {data}</Text> */}
        <FlatList
          data={users.filtered("username = 'Balaji 2'")}
          renderItem={({item}) => (
            <Text
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

export default Home;
