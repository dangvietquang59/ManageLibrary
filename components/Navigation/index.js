import {View, TouchableOpacity, Image} from 'react-native';
import qrIcon from '../../assets/img/qr-scanner.png';
import settingIcon from '../../assets/img/settings-icon-7.png';
import searchIcon from '../../assets/img/search-icon.jpg';
import homeIcon from '../../assets/img/icon/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png';
import {useNavigation} from '@react-navigation/native';

function NavigationComponent() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        backgroundColor: '#141414',
        alignSelf: 'center',
        borderRadius: 8,
        overflow: 'hidden',
      }}>
      <TouchableOpacity style={{width: 50}}>
        <Image
          source={homeIcon}
          style={{
            backgroundColor: 'transparent',
            width: 30,
            height: 30,
            tintColor: '#fff',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{width: 50}}>
        <Image
          source={qrIcon}
          style={{
            backgroundColor: 'transparent',
            width: 50,
            height: 50,
            tintColor: '#fff',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 50}}
        onPress={() => navigation.navigate('Profile')}>
        <Image
          source={settingIcon}
          style={{
            backgroundColor: 'transparent',
            width: 50,
            height: 50,
            tintColor: '#fff',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default NavigationComponent;
