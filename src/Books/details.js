import {Image, ScrollView, Text, View} from 'react-native';
import Comment from '../../components/Comment';
import MyButton from '../../components/Button';
import HeaderNavigation from '../../components/HeaderNavigation';

function DetailsBook({navigation, route}) {
  const {bookId, bookName, bookAuthor, bookSummary, bookImage, bookGenre} =
    route.params ?? {};
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#141414',
      }}>
      <HeaderNavigation titleHeader={'Book details'} />
      <ScrollView style={{position: 'relative'}}>
        <View
          style={{
            height: 200,
            opacity: 0.1,
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}>
          <Image
            source={{uri: bookImage}}
            style={{
              width: '100%',
              height: 180,
              objectFit: 'cover',
              marginTop: 10,
              position: 'absolute',
            }}
          />
        </View>
        <Image
          source={{uri: bookImage}}
          style={{
            width: 150,
            height: 200,
            marginTop: 10,
            position: 'absolute',
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#fff',
            top: '1%',
            left: '35%',
          }}
        />
        {/* information of book */}
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            minHeight: 100,
            padding: 15,
            alignSelf: 'center',
            justifyContent: 'space-between',
            borderRadius: 8,
            top: '28%',
            position: 'absolute',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>
            {bookName}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#fff',
              marginTop: 5,
              marginBottom: 5,
            }}>
            {bookGenre}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              fontStyle: 'italic',
              color: '#fff',
            }}>
            {bookAuthor}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            padding: 10,
            marginTop: 80,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#fff',
              marginTop: '25%',
              // marginBottom: 10,
            }}>
            Resume
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#ccc',
                borderLeftWidth: 2,
                borderLeftColor: '#ccc',
                paddingLeft: 10,
                marginTop: 5,
                textAlign: 'justify',
              }}>
              {bookSummary}
            </Text>
          </View>
        </View>
        {/* comment part */}
        <ScrollView>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Comments (2)
          </Text>
          <Comment />
          <Comment />
          <Comment />
        </ScrollView>
      </ScrollView>
      <View>
        <MyButton
          titleBtn={'Borrow'}
          onClick={() =>
            navigation.navigate('BorrowBook', {
              bookId,
              bookAuthor,
              bookGenre,
              bookImage,
              bookName,
            })
          }
        />
      </View>
    </View>
  );
}

export default DetailsBook;
