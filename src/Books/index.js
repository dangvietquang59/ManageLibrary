import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import BookItem from '../../components/BookItem';
import sach1 from '../../assets/img/book/sach-1.jpg';

import {Divider} from 'react-native-paper';
import BookItemHoiontal from '../../components/BookItem/BookItemHorizontal';
import NavigationComponent from '../../components/Navigation';
import Poster from '../../components/Poster/Index';
import Header from '../../components/Header';

const Books = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#141414'}}>
      <Header />
      <ScrollView>
        <ScrollView horizontal style={{height: 300}}>
          <Poster />
          <Poster />
          <Poster />
        </ScrollView>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#000',
              marginTop: 10,
              color: '#fff',
            }}>
            Latest Update
          </Text>
          {/* book list latest update */}
          <View>
            <BookItem
              name={'Nguồn gốc các loài'}
              type={'Khoa học'}
              description={
                '12 cuốn sách khoa học giúp bạn hiểu thêm về thế giới'
              }
              author={'Charles Darwins'}
              img={sach1}
            />
            <Divider style={{marginTop: 10, marginBottom: 10, height: 1}} />
            <BookItem
              name={'Nguồn gốc các loài'}
              type={'Khoa học'}
              description={
                '12 cuốn sách khoa học giúp bạn hiểu thêm về thế giới'
              }
              author={'Charles Darwins'}
              img={sach1}
            />
            <Divider style={{marginTop: 10, marginBottom: 10, height: 1}} />
          </View>
          {/* book horizontal */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#000',
              marginTop: 10,
              color: '#fff',
              marginBottom: 10,
            }}>
            New books
          </Text>
          <ScrollView horizontal style={{}}>
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
          </ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#000',
              marginTop: 10,
              color: '#fff',
              marginBottom: 10,
            }}>
            New books
          </Text>
          <ScrollView horizontal>
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
            <BookItemHoiontal />
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationComponent />
    </View>
  );
};

export default Books;
