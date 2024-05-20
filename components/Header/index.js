import {Image, Text, TouchableOpacity, View} from 'react-native';
import searchIcon from '../../assets/img/search-icon.jpg';
import avatar from '../../assets/img/book/book2.jpg';
import {useNavigation} from '@react-navigation/native';
import useUserStore from '../../store/userStore';
function Header() {
  const navigation = useNavigation();
  const user = useUserStore(state => state.user);
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
          source={{
            uri: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/09/21/jujutsu-kaisen-anime-gojo-sealed.jpeg',
          }}
          style={{width: 50, height: 50, borderRadius: 100}}
        />
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: 700,
            marginLeft: 10,
          }}>
          {user?.fullName || `user ${user?._id}`}
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
