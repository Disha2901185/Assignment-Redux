import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from '../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Signup} from './Signup';
import CartScreen from './CartScreen';
import {useNavigation} from '@react-navigation/native';
const Headers = ({title}) => {
  const navigation = useNavigation();
  const {count} = useContext(MyContext);
  const goToCartScreen = () => {
    navigation.navigate('CartScreen');
  };
  const logout = async () => {
    await AsyncStorage.removeItem('myData');
    navigation.navigate('Signup');
    console.log('Clear AsyncStorage Data');
  };
  return (
    <>
      <View style={styles.title}>
        <Text>{title}</Text>
        <TouchableOpacity onPress={goToCartScreen}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg',
            }}
          />
          <View style={{backgroundColor: 'red', borderRadius: 50}}>
            <Text style={styles.count}>{count}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Headers;

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#525252',
    color: '#fff',
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    fontSize: '18px',
    position: 'relative',
    left: 0,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    position: 'absolute',
    right: 79,
  },
  count: {
    color: 'white',
    borderRadius: 50,
    paddingHorizontal: 5,
    position: 'absolute',
    left: 120,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    bottom: 10,
  },
});
