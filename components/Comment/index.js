import {Text, View, Image} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';

function Comment() {
  return (
    <View style={{marginLeft: 10}}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/09/21/jujutsu-kaisen-anime-gojo-sealed.jpeg',
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          />
          {/* info comment */}
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#fff',
              }}>
              Trần Thành Nam
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ccc',
              }}>
              2 days ago
            </Text>
          </View>
        </View>
        <StarRatingDisplay rating={3} starSize={16} style={{marginRight: 10}} />
      </View>
      <Text style={{fontSize: 16, color: '#ccc', marginTop: 10}}>
        Sách này rất hay!
      </Text>
    </View>
  );
}

export default Comment;
