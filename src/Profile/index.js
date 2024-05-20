import React, {useState, useEffect} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import HeaderNavigation from '../../components/HeaderNavigation';
import email from '../../assets/img/icon/email-removebg-preview.png';
import address from '../../assets/img/icon/address-removebg-preview.png';
import phoneNumber from '../../assets/img/icon/phone-number-removebg-preview.png';
import MyButton from '../../components/Button';
import {updateProfile} from '../../utils/api/Profile';
import useUserStore from '../../store/userStore';
import {logoutUser} from '../../utils/api/Authentication';
import ButtonProfile from '../../components/ButtonProfile';
import {useNavigation} from '@react-navigation/native';

function Profile() {
  const {user, setUser, logout} = useUserStore();

  const [isOpen, setIsOpen] = useState(false);

  const [fullNameInput, setFullNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [addressInput, setAddressInput] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    setFullNameInput(user?.name || '');
    setPhoneNumberInput(user?.phoneNumber || '');
    setAddressInput(user?.address || '');
  }, [user]);

  const handleLogout = async () => {
    try {
      const isLoggedOut = await logoutUser();
      console.log(isLoggedOut);
      if (isLoggedOut === 200) {
        logout();
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleEditProfile = async () => {
    const profile = {
      phoneNumber: phoneNumberInput,
      address: addressInput,
      fullName: fullNameInput,
      userId: user?._id,
    };
    try {
      const updatedProfile = await updateProfile(profile, user?.accessToken);
      setUser(updatedProfile);
      setIsOpen(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <HeaderNavigation titleHeader={'Profile'} />
      <Image
        source={{
          uri: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/09/21/jujutsu-kaisen-anime-gojo-sealed.jpeg',
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 1000,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#fff',
          marginTop: 10,
        }}>
        {user?.fullName || `user${user?._id}`}
      </Text>

      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              padding: 10,
            }}>
            Information
          </Text>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => setIsOpen(true)}>
            <Text style={{fontSize: 18, color: '#ccc'}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={email}
            style={{
              width: 40,
              height: 40,
              tintColor: '#fff',
              marginTop: 10,
              marginBottom: 10,
            }}
          />
          <Text style={{fontSize: 16, color: '#ccc', marginLeft: 10}}>
            {user?.email}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={phoneNumber}
            style={{
              width: 30,
              height: 30,
              tintColor: '#fff',
              marginTop: 10,
              marginBottom: 10,
              padding: 5,
            }}
          />
          <Text style={{fontSize: 16, color: '#ccc', marginLeft: 10}}>
            {user?.phoneNumber}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={address}
            style={{
              width: 30,
              height: 30,
              tintColor: '#fff',
              marginTop: 10,
              marginBottom: 10,
              padding: 5,
            }}
          />
          <Text style={{fontSize: 16, color: '#ccc', marginLeft: 10}}>
            {user?.address}
          </Text>
        </View>

        <ButtonProfile titleBtn={'Book loved'} />
        <ButtonProfile titleBtn={'Book borrowed'} />
        <ButtonProfile titleBtn={'Sign out'} onClick={() => handleLogout()} />
      </View>

      {/* modal edit profile */}
      {isOpen && (
        <Portal>
          <Modal visible={isOpen} onDismiss={() => setIsOpen(false)}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                height: '90%',
                backgroundColor: '#141414',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  Full name
                </Text>
                <TextInput
                  placeholder="Enter your full name"
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#ccc',
                    paddingLeft: 20,
                    color: '#fff',
                  }}
                  value={fullNameInput}
                  onChangeText={text => setFullNameInput(text)}
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
                  Phone number
                </Text>
                <TextInput
                  placeholder="Enter your phone number"
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#ccc',
                    paddingLeft: 20,
                    color: '#fff',
                  }}
                  value={phoneNumberInput}
                  onChangeText={text => setPhoneNumberInput(text)}
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
                  Address
                </Text>
                <TextInput
                  placeholder="Enter your address"
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#ccc',
                    paddingLeft: 20,
                    color: '#fff',
                  }}
                  value={addressInput}
                  onChangeText={text => setAddressInput(text)}
                  placeholderTextColor={'#ccc'}
                />
              </View>
              <MyButton
                titleBtn={'Submit'}
                onClick={() => handleEditProfile()}
              />
            </View>
          </Modal>
        </Portal>
      )}
    </View>
  );
}

export default Profile;
