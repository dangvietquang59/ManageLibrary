import arrowLeft from '../../assets/img/arrow-left.png';
import {Image, TouchableOpacity, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

function SearchHeader({setSearchKey}) {
  const navigation = useNavigation();
  const [localSearchKey, setLocalSearchKey] = useState('');

  const handleSearchChange = text => {
    setLocalSearchKey(text);
    setSearchKey(text);
  };

  return (
    <View style={{backgroundColor: '#141414'}}>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={arrowLeft}
            style={{width: 30, height: 30, marginRight: 10, tintColor: '#fff'}}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter search key"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingLeft: 10,
            color: '#fff',
          }}
          value={localSearchKey}
          onChangeText={handleSearchChange}
          placeholderTextColor={'#ccc'}
        />
      </View>
    </View>
  );
}

export default SearchHeader;
