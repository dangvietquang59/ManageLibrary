import {Image, Text, TouchableOpacity} from 'react-native';
import book2 from '../../assets/img/book/book2.jpg';
function BookItemHoiontal() {
  return (
    <TouchableOpacity style={{marginLeft: 10, marginRight: 10, width: 150}}>
      <Image
        source={book2}
        style={{height: 180, width: '100%', borderRadius: 5}}
      />
      <Text
        style={{fontSize: 18, fontWeight: 600, color: '#fff', marginTop: 4}}
        numberOfLines={1}>
        Jujutsu kaisen
      </Text>
    </TouchableOpacity>
  );
}

export default BookItemHoiontal;
