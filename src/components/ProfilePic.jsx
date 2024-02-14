import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const ProfilePic = () => {
  const [img, setImg] = useState(
    'https://4kwallpapers.com/images/wallpapers/anonymous-hacker-laptop-black-background-5k-3840x2160-159.jpg',
  );

  const ImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
      selectionLimit: 1,
    };

    try {
      const response = await launchImageLibrary(options);
      console.log(response.assets);

      if (response.assets && response.assets.length > 0) {
        setImg(response.assets[0].uri);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={ImagePicker}>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 100,
    height: 150,
    width: 150,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default ProfilePic;
