import {Image, Text, TouchableOpacity, View} from 'react-native';
import searchIcon from '../../assets/img/search-icon.jpg';
import avatar from '../../assets/img/book/book2.jpg';
import {useNavigation} from '@react-navigation/native';
function Header() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={avatar}
          style={{width: 50, height: 50, borderRadius: 100}}
        />
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: 700,
            marginLeft: 10,
          }}>
          Trần Thành Nam
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image
          source={searchIcon}
          style={{width: 60, height: 60, borderRadius: 100, tintColor: 'white'}}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
