import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import MyButton from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import logo from '../../assets/img/Remove-bg.ai_1715650539048.png';

function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      // Gọi API đăng ký
      const response = await axios.post(
        'http://10.0.2.2:5000/v1/auth/register',
        {
          email: email,
          password: password,
        },
      );

      // Xử lý kết quả đăng ký
      if (response.status === 201) {
        Alert.alert('Success', 'Registered successfully');
        // Chuyển hướng về trang đăng nhập
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Registration failed');
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
      <View style={{marginBottom: 20}}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#fff',
            alignSelf: 'center',
          }}>
          Sign up
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
          placeholder="example@gmail.com"
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Confirm Password
        </Text>
        <TextInput
          placeholder="***************"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
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
      <MyButton titleBtn={'Sign up'} onClick={handleRegister} />
      <View
        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          Already have account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#1497f5', fontSize: 18, fontWeight: 'bold'}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
