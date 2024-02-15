import {
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Don't forget to import AsyncStorage
import ProfilePic from './ProfilePic';

import Flatlist from './Flatlist';
import {VerticallyPics} from './VerticallyPics';
import {useDispatch, useSelector} from 'react-redux';
import {photosApi} from '../Store/photosApi';
const Profile = props => {
  const [userData, setUserData] = useState(null);
  const {isLoading, photos, isError} = useSelector(state => state.photo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photosApi());
  }, [dispatch]);
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
    <ScrollView>
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
              </>
            )}
            <TouchableOpacity onPress={vertical}>
              <Text style={styles.vertical}>See Pics Vertically Click</Text>
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.photos}>
            <Text style={styles.api}>Give a look to Api Photos</Text>
            {isLoading && isLoading ? (
              <Image
                style={{width: 120, height: 120, borderRadius: 90}}
                source={{
                  uri: 'https://media.istockphoto.com/id/1357880487/vector/loading.jpg?s=612x612&w=0&k=20&c=Xxl6jRy0tonD3CQ-dsIwModxouaKGIr4obAF2Za1DgI=',
                }}
              />
            ) : (
              photos && (
                <FlatList
                  data={photos}
                  keyExtractor={photo => photo.id.toString()}
                  // horizontal={true}
                  showsVerticalScrollIndicator={true}
                  renderItem={({item: photo}) => (
                    <View key={photo.id} style={{width: 400}}>
                      <Image
                        style={{width: '80%', height: 130, marginLeft: 40}}
                        source={{uri: photo.download_url}}
                      />
                      <Text
                        style={{fontSize: 25, marginLeft: 40, color: 'white', marginBottom: 30}}>
                        {photo.author}
                      </Text>
                    </View>
                  )}
                />
              )
            )}
            {isError && console.log('error while fetching photos')}
          </View>

          {/* <View style={{height: 300}}>
          <Text style={styles.horizontal}> See Pics Horizontally</Text>
          <Flatlist horizontal={true} styleImage={styles.image2} />
        </View> */}
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  photos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // height: 500,
  },
  api: {
    fontSize: 27,
    alignContent: 'center',
    color: '#bbbdbd',
    marginVertical: 18,
    fontWeight: 'bold',
  },
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
