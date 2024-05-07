import React from 'react';
import {View, FlatList, Image, StyleSheet, Dimensions} from 'react-native';
import book1 from '../../assets/img/book/book2.jpg';
const Slider = () => {
  const images = [
    {id: 1, source: book1},
    {id: 2, source: book1},
    {id: 3, source: book1},
    // Thêm các ảnh khác nếu cần
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Image source={item.source} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width, // Chiều rộng của ảnh bằng chiều rộng của cửa sổ
    height: '100%', // Chiều cao của ảnh sẽ căn chiều cao của container
    resizeMode: 'cover', // Thay đổi kích thước ảnh để nó phù hợp với kích thước container
  },
});

export default Slider;
