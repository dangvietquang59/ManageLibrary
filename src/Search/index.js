import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import searchIcon from '../../assets/img/search-icon.jpg';
import {useNavigation} from '@react-navigation/native';
import SearchHeader from '../../components/SearchHeader';

function Search() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <SearchHeader />
      {/* search results  */}

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchDetail')}
          style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={searchIcon}
            style={{height: 30, width: 30, tintColor: '#fff', marginRight: 20}}
          />
          <Text style={{fontSize: 16, color: '#ccc'}}>Sách khoa học</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={searchIcon}
            style={{height: 30, width: 30, tintColor: '#fff', marginRight: 20}}
          />
          <Text style={{fontSize: 16, color: '#ccc'}}>Sách khoa học</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={searchIcon}
            style={{height: 30, width: 30, tintColor: '#fff', marginRight: 20}}
          />
          <Text style={{fontSize: 16, color: '#ccc'}}>Sách khoa học</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Search;
