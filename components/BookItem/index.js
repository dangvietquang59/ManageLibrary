import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function BookItem({name, description, author, type, img}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
      }}
      onPress={() => navigation.navigate('DetailsBook')}>
      <Image source={img} style={{width: 100, height: 150, borderRadius: 5}} />
      <View
        style={{
          marginLeft: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 1,
        }}>
        <View style={{maxWidth: '100%'}}>
          <Text style={{fontSize: 20, fontWeight: 700, color: '#fff'}}>
            {name}
          </Text>
        </View>
        {/* type of book */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              padding: 8,
              backgroundColor: '#808080',
              borderRadius: 8,
              marginLeft: 2,
            }}>
            <Text
              style={{
                color: '#ccc',
                fontWeight: 700,
                fontSize: 16,
              }}>
              {type}
            </Text>
          </View>
        </View>
        {/* description of book */}
        <Text style={{marginTop: 5, color: '#fff'}}>{description}</Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            fontStyle: 'italic',
            color: '#666',
          }}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
