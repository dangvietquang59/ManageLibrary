import {TouchableOpacity, View, Image, Text} from 'react-native';
import arrowLeft from '../../assets/img/arrow-left.png';
import {useNavigation} from '@react-navigation/native';

function HeaderNavigation({titleHeader}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      }}>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => navigation.goBack()}>
        <Image
          source={arrowLeft}
          style={{height: 30, width: 30, tintColor: '#fff'}}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: '#fff',
          marginLeft: '30%',
        }}>
        {titleHeader}
      </Text>
    </View>
  );
}

export default HeaderNavigation;
