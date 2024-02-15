import {FlatList, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart} from '../Store/cartSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyContext} from '../Context/AuthContext';

// const Cart = ({author, url, id}) => {
//   const dispatch = useDispatch();
//   const remove = id => {
//     dispatch(removeFromCart(id));
//   };
//   return (
//     <View style={{height: '100%'}}>
//       <Image style={{height: 40, width: 40}} source={{uri: url}} />
//       <Text style={{fontSize: 20}}>{author}</Text>
//       <TouchableOpacity onPress={() => remove(id)}>
//         <Text>Remove</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
const CartScreen = () => {
  const cards = useSelector(state => state.cart.cartCount);
  const {removeCount} = useContext(MyContext);
  const dispatch = useDispatch();
  const remove = id => {
    dispatch(removeFromCart(id));
    removeCount();
  };
  console.log('cards', cards);
  return (
    <SafeAreaView style={styles.container}>
      {cards && (
        <FlatList
          data={cards}
          keyExtractor={photo => photo.id.toString()}
          // horizontal={true}
          showsVerticalScrollIndicator={true}
          renderItem={({item: photo}) => (
            <View key={photo.id} style={{width: 400, borderColor: 'red', borderRadius: 20}}>
              <Image
                style={{width: '80%', height: 100, marginLeft: 40}}
                source={{uri: photo.download_url}}
              />
              <Text style={{fontSize: 25, marginLeft: 40, color: 'red'}}>{photo.author}</Text>
              <TouchableOpacity onPress={() => remove(photo.id)}>
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 37,
                    marginBottom: 40,
                    backgroundColor: '#575959',
                    width: 90,
                    paddingLeft: 10,
                    paddingVertical: 10,
                    borderRadius: 15,
                    color: '#fff',
                  }}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
