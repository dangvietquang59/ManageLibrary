import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import BookItem from '../../components/BookItem';
import {Divider} from 'react-native-paper';
import BookItemHorizontal from '../../components/BookItem/BookItemHorizontal';
import NavigationComponent from '../../components/Navigation';
import Poster from '../../components/Poster/Index';
import Header from '../../components/Header';
import {getBooks} from '../../utils/api/Book';
import useBookStore from '../../store/bookStore';

const Books = () => {
  const setBooks = useBookStore(state => state.setBooks);
  const books = useBookStore(state => state.books);
  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getBooks();
      setBooks(bookData);
    };

    fetchBooks();
  }, [setBooks]);

  return (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <Header />
      <ScrollView>
        {/* poster */}
        <ScrollView horizontal style={{height: 300}}>
          <Poster />
          <Poster />
          <Poster />
        </ScrollView>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#fff',
              marginTop: 10,
            }}>
            Latest Update
          </Text>
          {/* book list latest update */}
          <View>
            {books &&
              books.map(book => (
                <View key={book._id}>
                  <BookItem bookInfo={book} />
                  <Divider
                    style={{marginTop: 10, marginBottom: 10, height: 1}}
                  />
                </View>
              ))}
          </View>
          {/* book horizontal */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#fff',
              marginTop: 10,
              marginBottom: 10,
            }}>
            New Books
          </Text>
          <ScrollView horizontal>
            {books &&
              books.map(book => (
                <BookItemHorizontal
                  nameBook={book.Title}
                  img={book.Image}
                  key={book._id}
                />
              ))}
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationComponent />
    </View>
  );
};

export default Books;
