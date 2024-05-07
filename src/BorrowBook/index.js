import React, {useState} from 'react';
import {Button, Image, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
import MyButton from '../../components/Button';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import HeaderNavigation from '../../components/HeaderNavigation';

function BorrowBook({route}) {
  const {title, author, category, imageUrl} = route.params;

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickedDate, setPickedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setPickedDate(date);
    hideDatePicker();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#141414',
        justifyContent: 'space-between',
      }}>
      <HeaderNavigation titleHeader={'Borrow book'} />
      <View>
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
              source={imageUrl}
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
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ccc',
                  fontWeight: 700,
                  marginBottom: 10,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ccc',
                  fontWeight: 700,
                  marginBottom: 10,
                  padding: 10,
                  backgroundColor: 'rgba(111, 101, 252,0.7)',
                  textAlign: 'center',
                  borderRadius: 8,
                }}>
                {category}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#ccc',
                  fontWeight: 700,
                  marginBottom: 10,
                }}>
                {author}
              </Text>
            </View>
          </View>
        </View>
        {/* form borrow book */}
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
            Borrower information
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ccc',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Full Name
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              color: '#fff',
            }}
            placeholder="Nguyễn Văn A"
            placeholderTextColor={'#ccc'}
            value={name}
            onChangeText={text => setName(text)}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ccc',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Phone Number
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              color: '#fff',
            }}
            placeholder="01239929399"
            placeholderTextColor={'#ccc'}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="numeric"
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ccc',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Address
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              color: '#fff',
            }}
            placeholder="khu phố A, Dĩ An, Bình Dương"
            placeholderTextColor={'#ccc'}
            value={address}
            onChangeText={text => setAddress(text)}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ccc',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Email
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              color: '#fff',
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={'#ccc'}
            value={email}
            onChangeText={text => setEmail(text)}
          />

          {/* pick date and time */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ccc',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Pick Date and Time
          </Text>
          <Button title="Pick Date and Time" onPress={showDatePicker} />
          <Text>{pickedDate.toString()}</Text>
          {isDatePickerVisible && (
            <DateTimePickerModal
              value={pickedDate}
              mode="datetime"
              display="spinner"
              onChange={(event, selectedDate) => {
                handleConfirm(selectedDate || pickedDate);
              }}
            />
          )}
        </View>
      </View>
      <View>
        <MyButton titleBtn={'Confirm Borrow'} />
      </View>
    </View>
  );
}

export default BorrowBook;
