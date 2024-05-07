import React, {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {useState} from 'react';
import MyButton from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{flex: 1, backgroundColor: '#141414', justifyContent: 'center'}}>
      <View style={{marginBottom: 20}}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#fff',
            alignSelf: 'center',
          }}>
          Sign in
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Email
        </Text>
        <TextInput
          placeholder="exmaple@gmail.com"
          value={email}
          onChangeText={text => setEmail(text)}
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#fff',
            color: '#fff',
            paddingLeft: 20,
          }}
          placeholderTextColor={'#ccc'}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Password
        </Text>
        <TextInput
          placeholder="***************"
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#fff',
            color: '#fff',
            paddingLeft: 20,
          }}
          secureTextEntry
          placeholderTextColor={'#ccc'}
        />
      </View>

      <MyButton
        titleBtn={'Sign in'}
        onClick={() => navigation.navigate('Books')}
      />

      <View
        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          Don't have account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#1497f5', fontSize: 18, fontWeight: 'bold'}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
