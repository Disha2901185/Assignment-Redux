import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart} from '../Store/cartSlice';

const Cart = ({author, url, id}) => {
  const dispatch = useDispatch();
  const remove = id => {
    dispatch(removeFromCart(id));
  };
  return (
    <View>
      <Image source={{uri: url}} />
      <Text>{author}</Text>
      <TouchableOpacity onPress={() => remove(id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};
const CartScreen = () => {
  const cards = useSelector(state => state.cart.cartCount);
  return (
    <View>
      <FlatList
        data={cards}
        renderItem={(item, id) => {
          <Cart author={item.auhtor} url={item.url} id={item.id} />;
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
