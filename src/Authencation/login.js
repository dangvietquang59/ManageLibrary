import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import MyButton from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import useUserStore from '../../store/userStore';
import {baseURL} from '../../utils/api/baseURL';
import logo from '../../assets/img/Remove-bg.ai_1715650539048.png';

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setUser = useUserStore(state => state.setUser);
  const handleLogin = async () => {
    try {
      const response = await axios.post(baseURL + '/v1/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setUser(response.data.user);
        navigation.navigate('Books');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login failed', error.message || 'Invalid email or password');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#141414',
        justifyContent: 'flex-start',
        padding: 20,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image source={logo} style={{width: 200, height: 200}} />
      </View>
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
          marginTop: 20,
        }}>
        Email
      </Text>
      <TextInput
        placeholder="example@gmail.com"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#fff',
          color: '#fff',
          paddingLeft: 20,
          marginTop: 5,
        }}
        placeholderTextColor={'#ccc'}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#fff',
          marginTop: 20,
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
          marginTop: 5,
          marginBottom: 20,
        }}
        secureTextEntry
        placeholderTextColor={'#ccc'}
      />

      <MyButton titleBtn={'Sign in'} onClick={handleLogin} />

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: 10}}
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
