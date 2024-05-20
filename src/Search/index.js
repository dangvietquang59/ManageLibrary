import React, {useState, useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import searchIcon from '../../assets/img/search-icon.jpg';
import SearchHeader from '../../components/SearchHeader';
import useBookStore from '../../store/bookStore';

function Search() {
  const navigation = useNavigation();
  const books = useBookStore(state => state.books);
  const [searchKey, setSearchKey] = useState('');

  const filteredBooks = useMemo(() => {
    if (!searchKey) return [];
    return books.filter(book =>
      book.Title.toLowerCase().includes(searchKey.toLowerCase()),
    );
  }, [searchKey, books]);

  return (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <SearchHeader setSearchKey={setSearchKey} />

      <View style={{marginTop: 20}}>
        {filteredBooks.map(book => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailsBook', {
                bookId: book._id,
                bookName: book.Title,
                bookAuthor: book.Author,
                bookImage: book.Image,
                bookSummary: book.Summary,
                bookGenre: book.Genre,
              })
            }
            style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={searchIcon}
              style={{
                height: 30,
                width: 30,
                tintColor: '#fff',
                marginRight: 20,
              }}
            />
            <Text style={{fontSize: 16, color: '#ccc'}}>{book.Title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Search;
