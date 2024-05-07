import {View, Image, ScrollView} from 'react-native';
import book3 from '../../assets/img/book/book3.jpg';
function Poster({imgUrl}) {
  return (
    <View
      style={{
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
      }}>
      <Image
        source={book3}
        style={{
          width: 400,
          height: '100%',
          borderRadius: 8,
        }}
      />
    </View>
  );
}

export default Poster;
