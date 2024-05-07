import {View, StyleSheet} from 'react-native';
import books from '../assets/img/books.png';
import borrow from '../assets/img/borrow-book.jpg';
import chart from '../assets/img/chart.jpg';
import staff from '../assets/img/staff.png';
import HomeCategory from '../components/HomeCategory';

function Home({navigation}) {
  return (
    <View style={styles.wrapper}>
      {/*wrap 2 block*/}
      <View style={styles.wrap2Btn}>
        <HomeCategory
          nameCategory={'Sách'}
          img={books}
          onClick={() => navigation.navigate('Books')}
        />
        <HomeCategory nameCategory={'Mượn - Trả'} img={borrow} />
      </View>
      <View style={styles.wrap2Btn}>
        <HomeCategory nameCategory={'Thống kê'} img={chart} />
        <HomeCategory nameCategory={'Nhân viên'} img={staff} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center'},
  wrap2Btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
