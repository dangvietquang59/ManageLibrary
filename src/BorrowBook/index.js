import React, {useState} from 'react';
import {Alert, Button, Image, ScrollView, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
import MyButton from '../../components/Button';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import HeaderNavigation from '../../components/HeaderNavigation';
import useUserStore from '../../store/userStore';
import {borrowBooks} from '../../utils/api/Book';
import {useNavigation} from '@react-navigation/native';

function BorrowBook({route}) {
  const {bookId, bookName, bookGenre, bookImage, bookAuthor} = route.params;
  const user = useUserStore(state => state.user);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickedDate, setPickedDate] = useState(new Date());

  const navigation = useNavigation();
  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = date => {
    if (date) {
      console.warn('A date has been picked: ', date);
      setPickedDate(date);
      showDatePicker();
    }
  };

  const handleBorrow = async () => {
    const data = {
      bookId: bookId,
      userId: user?._id,
      returnDate: pickedDate,
    };

    try {
      const borrow = await borrowBooks(data, user?.accessToken);
      console.log(borrow);
      if (borrow === 201) {
        Alert.alert(
          'Borrow book',
          'Successful loan; please wait for the librarian to accept',
        );
        navigation.navigate('Books');
      }
    } catch (error) {}
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#141414',
        justifyContent: 'space-between',
      }}>
      <HeaderNavigation titleHeader={'Borrow book'} />
      <ScrollView>
        {/* book info */}
        <View style={{marginTop: 10, minHeight: 250}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: 10,
            }}>
            Borrowed book information
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{uri: bookImage}}
              style={{
                width: 150,
                height: 250,
                borderRadius: 8,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                marginTop: 10,
                marginLeft: 10,
                width: '70%',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ccc',
                  fontWeight: 700,
                  marginBottom: 10,
                }}>
                {bookName}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ccc',
                  fontWeight: 700,
                  maxWidth: '50%',
                  marginBottom: 10,
                  padding: 10,
                  backgroundColor: 'rgba(111, 101, 252,0.7)',
                  textAlign: 'center',
                  borderRadius: 8,
                }}>
                {bookGenre}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ccc',
                  fontWeight: 700,
                  marginBottom: 10,
                }}>
                {bookAuthor}
              </Text>
            </View>
          </View>
        </View>
        {/* form borrow book */}
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              marginTop: 10,
            }}>
            Borrower information
          </Text>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#ccc'}}>
              Full name:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ccc',
                marginLeft: 10,
              }}>
              {user.fullName}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#ccc'}}>
              Email:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ccc',
                marginLeft: 10,
              }}>
              {user.email}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#ccc'}}>
              Phone number:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ccc',
                marginLeft: 10,
              }}>
              {user.phoneNumber}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 700, color: '#ccc'}}>
              Address:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ccc',
                marginLeft: 10,
              }}>
              {user.address}
            </Text>
          </View>
          {/* pick date and time */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ccc',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Payment deadline:
          </Text>
          <Text
            style={{
              color: '#ccc',
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            {pickedDate.toString()}
          </Text>
          <Button title="Pick Date and Time" onPress={showDatePicker} />
          {isDatePickerVisible && (
            <DateTimePickerModal
              value={pickedDate}
              mode="datetime"
              display="spinner"
              onChange={(event, pickedDate) => {
                handleConfirm(pickedDate);
              }}
            />
          )}
        </View>
      </ScrollView>
      <View>
        <MyButton titleBtn={'Confirm Borrow'} onClick={() => handleBorrow()} />
      </View>
    </View>
  );
}

export default BorrowBook;
