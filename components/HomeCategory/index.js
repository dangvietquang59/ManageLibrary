import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

function HomeCategory({nameCategory, img, onClick}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
      <Image source={img} style={styles.imgBtn} resizeMode="contain" />
      <Text style={styles.txtBtn}>{nameCategory}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '48%',
    height: 200,
    backgroundColor: 'white',
    color: 'white',
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  imgBtn: {
    height: '80%',
    width: '80%',
    objectFit: 'contain',
    alignSelf: 'center',
  },
  txtBtn: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeCategory;
