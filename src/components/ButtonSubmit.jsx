import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export function ButtonSubmit({onSubmit}) {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#575959',
    height: 60,
    borderWidth: 1,
    marginHorizontal: 35,
    marginVertical: 30,
    borderRadius: 20,
    paddingHorizontal: 120,
    paddingTop: 13,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ButtonSubmit;
