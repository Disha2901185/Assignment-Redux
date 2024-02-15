import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from '../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Signup} from './Signup';
import {Icon} from '@rneui/themed';
import CartScreen from './CartScreen';
import {useNavigation} from '@react-navigation/native';
const Headers = ({title}) => {
  const navigation = useNavigation();
  const {count} = useContext(MyContext);
  const goToCartScreen = () => {
    navigation.navigate('CartScreen');
  };
  const logout = async () => {
    // await AsyncStorage.removeItem('myData');
    navigation.navigate('Login');
    // console.log('Clear AsyncStorage Data');
  };
  return (
    <>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 40, width: 40}}
            source={{
              uri: 'https://toppng.com/uploads/preview/free-silver-3d-arrow-left-design-png-background-11672137865likvradepz.png',
            }}
          />
        </TouchableOpacity>

        {/* <Icon type="font-awesome" name="arrow-left" size={24} /> */}
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          {title}
        </Text>

        <TouchableOpacity onPress={goToCartScreen}>
          <Image
            style={{width: 40, height: 40, borderRadius: 40}}
            source={{
              uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL3Y5Ny1wb3lkLTk4My1idXR0b25zMS1wLWpvYjE3NDAucG5n.png',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity onPress={logout}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
              marginRight: 10,
            }}>
            Logout
          </Text>
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
    fontSize: 18,
    position: 'relative',
    left: 0,
  },
  img: {},
  count: {
    color: 'white',
    borderRadius: 50,
    paddingHorizontal: 5,
    position: 'absolute',
    right: 120,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    bottom: 10,
  },
});
