import {StyleSheet, Text, View, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Don't forget to import AsyncStorage
import ProfilePic from './ProfilePic';

import Flatlist from './Flatlist';
import {VerticallyPics} from './VerticallyPics';
const Profile = props => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue1 = await AsyncStorage.getItem('myData');
        const parsedData = jsonValue1 != null ? JSON.parse(jsonValue1) : null;
        setUserData(parsedData);
        console.log('getting', userData);
      } catch (e) {
        Alert.alert('Something went wrong while getting data');
      }
    };
    fetchData();
  }, []);
  const vertical = () => {
    props.navigation.navigate('VerticallyPics');
  };

  return (
    <View>
      <ImageBackground
        style={{height: '100%'}}
        source={{
          uri: 'https://wallpaperswide.com/download/low_poly_dark_black_background-wallpaper-360x640.jpg',
        }}
        resizeMode="cover">
        <ImageBackground
          style={{
            width: '94%',
            alignItems: 'center',
            alignSelf: 'center',
            marginLeft: 25,
          }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHAabXJbEGLfaRV48VfwImWNUOQGhmcryKb6ldvVTWMrer1EzFtxHUrDmsEvWA6DXx_M&usqp=CAU',
          }}
          resizeMode="cover">
          <Text style={styles.profile}> My Profile</Text>
          <ProfilePic />
          {userData && (
            <>
              <Text style={styles.name}>
                {userData.fullName} {userData.lastName}
              </Text>
              <Text style={styles.name}>{userData.email} </Text>
              <Text style={styles.name}>{userData.address} </Text>
              {/* Add more properties as needed */}
            </>
          )}
        </ImageBackground>
        <View style={{height: 300}}>
          <Text style={styles.horizontal}> See Pics Horizontally</Text>
          <Flatlist horizontal={true} styleImage={styles.image2} />
        </View>
        <TouchableOpacity onPress={vertical}>
          <Text style={styles.vertical}>See Pics Vertically Click</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#bbbdbd',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginVertical: 20,
    color: '#bbbdbd',
  },
  horizontal: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#bbbdbd',
  },
  vertical: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
    color: '#bbbdbd',
  },

  image2: {
    width: '200',
    height: 200, // Adju
  },
});
