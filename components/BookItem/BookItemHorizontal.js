import {Image, Text, TouchableOpacity} from 'react-native';
function BookItemHoiontal({img, nameBook}) {
  return (
    <TouchableOpacity style={{marginLeft: 10, marginRight: 10, width: 150}}>
      <Image
        source={{uri: img}}
        style={{height: 180, width: '100%', borderRadius: 5}}
      />
      <Text
        style={{fontSize: 18, fontWeight: 600, color: '#fff', marginTop: 4}}
        numberOfLines={1}>
        {nameBook}
      </Text>
    </TouchableOpacity>
  );
}

export default BookItemHoiontal;
