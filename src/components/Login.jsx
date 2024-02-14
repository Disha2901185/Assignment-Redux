import react, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Input} from './Input';
import {Signup} from './Signup';
import ButtonSubmit from './ButtonSubmit';
import Title from './Title';
import ProfilePic from './ProfilePic';
import * as Yup from 'yup';
import {Formik} from 'formik';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import {useMyContext} from '../Context/UseContextHook';
import {MyContext, MyContextProvider} from '../Context/AuthContext';

const userSchema = Yup.object().shape({
  email: Yup.string().email('please enter a valid email').required('This field is required'),

  password: Yup.string()
    .required('Please enter your password')
    .min(6, 'Password should be minimum 6 characters')
    .max(15, 'Password should be minimum 15 characters')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
});
export function Login(props) {
  const {setData} = useContext(MyContext);
  const [formData, setFormData] = useState({
    email: '',

    password: '',
  });

  const handleSubmit = async values => {
    function isEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    try {
      const existingData = await AsyncStorage.getItem('myData');
      const storedValue = existingData ? JSON.parse(existingData) : null;

      const isDifferentValue = storedValue ? !isEqual(storedValue, values) : true;

      if (!isDifferentValue) {
        // await AsyncStorage.setItem('myData', JSON.stringify(values));
        // setData(values);
        props.navigation.navigate('Profile');
      } else {
        Alert.alert('Login Successfully');
      }
    } catch (error) {
      Alert.alert('Something went wrong while storing data');
      console.error('Error storing data:', error);
    }

    console.log(values);
  };
  const user = useContext(MyContext);
  console.log(user, 'hey');
  return (
    <MyContextProvider>
      <Formik
        initialValues={{
          email: '',

          password: '',
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <SafeAreaView>
            <ScrollView>
              <View style={{height: 1000}}>
                <ImageBackground
                  style={{height: 1000}}
                  source={{
                    uri: 'https://img.freepik.com/premium-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_959084-10.jpg',
                  }}
                  resizeMode="cover">
                  <ImageBackground
                    style={{width: '95%', marginLeft: 23, marginVertical: 120}}
                    source={{
                      uri: 'https://img.freepik.com/premium-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_959084-10.jpg',
                    }}
                    resizeMode="cover">
                    <Text style={styles.register}>Welcome To Krenai</Text>

                    <Title title={'Email'}></Title>
                    <Input
                      placeholder={'write any Email'}
                      onChange={handleChange('email')}
                      value={values.email}></Input>
                    {touched.email && errors.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}

                    <Title title={'Password'}></Title>
                    <Input
                      placeholder={'write any password'}
                      onChange={handleChange('password')}
                      value={values.password}
                      secureTextEntry></Input>
                    {touched.password && errors.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}

                    <ButtonSubmit onSubmit={handleSubmit}></ButtonSubmit>
                    <Text>
                      Dont have any account?
                      <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                        <Text style={{fontSize: 20, color: 'white'}}> Signup</Text>
                      </TouchableOpacity>
                    </Text>
                  </ImageBackground>
                </ImageBackground>
              </View>
            </ScrollView>
          </SafeAreaView>
        )}
      </Formik>
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  register: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color: '#bbbdbd',
  },
  addBtn: {
    backgroundColor: '#575959',
    color: 'white',
    paddingHorizontal: 15,
    fontSize: 20,
    width: 40,
    position: 'relative',
    left: '80%',
    bottom: 25,
  },
  errorText: {
    color: '#cbddf2',
    marginHorizontal: 40,
    fontSize: 15,
    marginTop: 5,
  },
});
