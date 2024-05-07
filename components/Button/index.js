import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

function MyButton({titleBtn, onClick}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(147, 10, 196,0.5)',
        height: 40,
      }}
      onPress={onClick}>
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          textAlign: 'center',
          lineHeight: 40,
        }}>
        {titleBtn}
      </Text>
    </TouchableOpacity>
  );
}

export default MyButton;
