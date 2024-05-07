import {Text, View} from 'react-native';
import SearchHeader from '../../components/SearchHeader';
import BookItem from '../../components/BookItem';
import sach1 from '../../assets/img/book/sach-1.jpg';
import {Divider} from 'react-native-paper';

function SearchDetail() {
  return (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <SearchHeader />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#ccc',
          marginTop: 20,
          marginLeft: 10,
        }}>
        2 Search Results
      </Text>
      <BookItem
        name={'Nguồn gốc các loài'}
        type={'Khoa học'}
        description={'12 cuốn sách khoa học giúp bạn hiểu thêm về thế giới'}
        author={'Charles Darwins'}
        img={sach1}
      />
      <Divider style={{marginTop: 10}} />
      <BookItem
        name={'Nguồn gốc các loài'}
        type={'Khoa học'}
        description={'12 cuốn sách khoa học giúp bạn hiểu thêm về thế giới'}
        author={'Charles Darwins'}
        img={sach1}
      />
      <Divider style={{marginTop: 10}} />
    </View>
  );
}

export default SearchDetail;
