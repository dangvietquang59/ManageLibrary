import {Image, Text, TouchableOpacity, View} from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';
import email from '../../assets/img/icon/email-removebg-preview.png';
import address from '../../assets/img/icon/address-removebg-preview.png';
import phoneNumber from '../../assets/img/icon/phone-number-removebg-preview.png';
import {Divider} from 'react-native-paper';

function Profile() {
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
        Tran Thanh Nam
      </Text>

      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
          Information
        </Text>

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
            Example@gmail.com
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
            0123718378
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
            Example@gmail.com
          </Text>
        </View>

        <View>
          <TouchableOpacity style={{padding: 20}}>
            <Text style={{fontSize: 16, color: '#ccc'}}>Book loved</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={{padding: 20}}>
            <Text style={{fontSize: 16, color: '#ccc'}}>Book borrowed</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={{padding: 20}}>
            <Text style={{fontSize: 16, color: '#ccc'}}>Sign out</Text>
          </TouchableOpacity>
          <Divider />
        </View>
      </View>
    </View>
  );
}

export default Profile;
