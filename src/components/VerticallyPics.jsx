import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Flatlist from './Flatlist';

const VerticallyPics = () => {
  return (
    <View>
      <ImageBackground
        style={{height: '100%'}}
        source={{
          uri: 'https://img.freepik.com/premium-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_959084-10.jpg',
        }}
        resizeMode="cover">
        <Text style={styles.vertical}>VerticallyPics</Text>
        <Flatlist horizontal={false} styleImage={styles.image1} />
      </ImageBackground>
    </View>
  );
};

export {VerticallyPics};

const styles = StyleSheet.create({
  image1: {
    width: '100%',
    height: 200, // Adju
  },
  vertical: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#bbbdbd',
  },
});
