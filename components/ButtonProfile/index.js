import {TouchableOpacity, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';

function ButtonProfile({titleBtn, onClick}) {
  return (
    <View>
      <TouchableOpacity style={{padding: 20}} onPress={onClick}>
        <Text style={{fontSize: 16, color: '#ccc'}}>{titleBtn}</Text>
      </TouchableOpacity>
      <Divider />
    </View>
  );
}

export default ButtonProfile;
