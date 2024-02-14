import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 15,
    color: '#9ea3a3',
    // opacity: 1,
  },
});

export default Title;
