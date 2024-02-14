import react, {useState} from 'react';

import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

export function Input({placeholder, onChange, value}) {
  return (
    <View>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        placeholderTextColor={'#666869'}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputField: {
    height: 50,
    fontSize: 20,
    borderColor: '#9ea3a3',
    borderBottomWidth: 2,
    marginHorizontal: 30,
    // marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
    color: '#9ea3a3',
  },
});
