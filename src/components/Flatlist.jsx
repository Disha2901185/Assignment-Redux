import react, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {MyContext} from '../Context/AuthContext';
import {useDispatch} from 'react-redux';
import {addToCart} from '../Store/cartSlice';

const DATA = [
  {
    id: '1',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg',
    download_url: 'https://picsum.photos/id/6/5000/3333',
  },
  {
    id: '2',
    author: 'Alejandro Escamilla',
    width: 4728,
    height: 3168,
    url: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
    download_url: 'https://picsum.photos/id/7/4728/3168',
  },
  {
    id: '3',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3333,
    url: 'https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg',
    download_url: 'https://picsum.photos/id/8/5000/3333',
  },
  {
    id: '4',
    author: 'Alejandro Escamilla',
    width: 5000,
    height: 3269,
    url: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    download_url: 'https://picsum.photos/id/9/5000/3269',
  },
  {
    id: '5',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
    download_url: 'https://picsum.photos/id/10/2500/1667',
  },

  {
    id: '6',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_640.jpg',
    download_url: 'https://picsum.photos/id/12/2500/1667',
  },
  {
    id: '7',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais',
    download_url: 'https://picsum.photos/id/13/2500/1667',
  },
  {
    id: '8',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?cs=srgb&dl=pexels-pixabay-355508.jpg&fm=jpg',
    download_url: 'https://picsum.photos/id/14/2500/1667',
  },
  {
    id: '9',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://media.istockphoto.com/id/471366604/photo/portrait-of-indian-woman-with-colored-face-dancing-during-holi.jpg?s=612x612&w=0&k=20&c=5_yqVtsM5O6Vc9dhenmWU5eB3E5j0DDsiJhjhwV7hN4=',
    download_url: 'https://picsum.photos/id/15/2500/1667',
  },

  {
    id: '10',
    author: 'Go Wild',
    width: 4000,
    height: 2670,
    url: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
    download_url: 'https://picsum.photos/id/29/4000/2670',
  },
];

// const Item = ({url, author, styleImage, item}) => {
//   const {count, addCount, removeCount} = useContext(MyContext);
//   const dispatch = useDispatch();
//   const addCart = product => {
//     dispatch(addToCart(product));
//     addCount();
//   };
//   return (
//     <View style={styles.item}>
//       <Image style={styleImage} source={{uri: url}} />
//       <Text style={styles.title}>{author}</Text>
//       <View>
//         <TouchableOpacity onPress={removeCount}>
//           <Image
//             style={styles.dlt}
//             source={{
//               uri: 'https://e7.pngegg.com/pngimages/228/54/png-clipart-logo-trademark-brand-delete-button-miscellaneous-text.png',
//             }}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => addCart({item})}>
//           <Image
//             style={styles.add}
//             source={{
//               uri: 'https://as1.ftcdn.net/v2/jpg/02/76/20/22/1000_F_276202225_6M6NkvbXpTslZZjI3vRPTgYrgFM7NGwJ.jpg',
//             }}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
const Flatlist = ({horizontal, styleImage}) => {
  const {count, addCount, removeCount} = useContext(MyContext);
  const dispatch = useDispatch();
  const addCart = product => {
    dispatch(addToCart(product));
    addCount();
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        // renderItem={({item, id}) => (
        //   <Item url={item.url} author={item.author} item={item} styleImage={styleImage} />
        // )}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image style={styleImage} source={{uri: item.url}} />
            <Text style={styles.title}>{item.author}</Text>

            <View>
              {/* <TouchableOpacity onPress={removeCount}>
                <Image
                  style={styles.dlt}
                  source={{
                    uri: 'https://e7.pngegg.com/pngimages/228/54/png-clipart-logo-trademark-brand-delete-button-miscellaneous-text.png',
                  }}
                />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => addCart(item)}>
                <Image
                  style={styles.add}
                  source={{
                    uri: 'https://as1.ftcdn.net/v2/jpg/02/76/20/22/1000_F_276202225_6M6NkvbXpTslZZjI3vRPTgYrgFM7NGwJ.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={horizontal}
        // showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 25,
    color: '#bbbdbd',
  },
  item: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  dlt: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  add: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  // image: {
  //   width: '100%',
  //   height: 200, // Adjust the height as needed
  // },
});

export default Flatlist;
