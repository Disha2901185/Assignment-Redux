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

import ButtonSubmit from './ButtonSubmit';
import Title from './Title';
import ProfilePic from './ProfilePic';
import * as Yup from 'yup';
import {Login} from './Login';
import {Formik} from 'formik';
import Flatlist from './Flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import {useMyContext} from '../Context/UseContextHook';
import {MyContext, MyContextProvider} from '../Context/AuthContext';

const userSchema = Yup.object().shape({
  fullName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required'),
  email: Yup.string().email('please enter a valid email').required('This field is required'),
  address: Yup.string().required('This field is required'),

  password: Yup.string()
    .required('Please enter your password')
    .min(6, 'Password should be minimum 6 characters')
    .max(15, 'Password should be minimum 15 characters')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], "Passwords don't match."),
});

export function Signup(props) {
  const {setData} = useContext(MyContext);

  const [pressAdd, setPressAdd] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    email: '',
    addresses: [''],
    password: '',
    confirmPassword: '',
  });

  const addAddressField = () => {
    setPressAdd(true);
    setFormData(prevData => ({
      ...prevData,
      addresses: [...prevData.addresses, ''],
    }));
  };
  const removeAddressField = () => {
    setFormData(prevData => ({
      ...prevData,
      addresses: [''],
    }));
    setPressAdd(false);
  };
  const handleAddressChange = (text, index) => {
    setFormData(prevData => {
      const updatedAddresses = [...prevData.addresses];
      updatedAddresses[index] = text;
      return {...prevData, addresses: updatedAddresses};
    });
  };
  const renderItem = ({item, index}) => (
    <View style={{position: 'relative'}}>
      <Title title={'Address'}></Title>
      <Input
        placeholder={'write any Address'}
        onChange={text => handleAddressChange(text, index)}
        value={item}></Input>

      <View>
        <TouchableOpacity onPress={removeAddressField}>
          <Text style={styles.addBtn}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleSubmit = async values => {
    await AsyncStorage.setItem('myData', JSON.stringify(values));
    setData(values);
    props.navigation.navigate('Profile');
    function isEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    try {
      const existingData = await AsyncStorage.getItem('myData');
      const storedValue = existingData ? JSON.parse(existingData) : null;

      const isDifferentValue = storedValue ? !isEqual(storedValue, values) : true;

      if (!isDifferentValue) {
        await AsyncStorage.setItem('myData', JSON.stringify(values));
        setData(values);
        Alert.alert('Signup Successfully');
      } else {
        Alert.alert('Signup Successfully');
      }
    } catch (error) {
      Alert.alert('Something went wrong while storing data');
      console.error('Error storing data:', error);
    }

    console.log(values);
  };

  return (
    <MyContextProvider>
      <Formik
        initialValues={{
          fullName: '',
          lastName: '',
          email: '',
          address: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <SafeAreaView>
            <ScrollView>
              <View style={{backgroundColor: ''}}>
                <ImageBackground
                  source={{
                    uri: 'https://img.freepik.com/premium-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_959084-10.jpg',
                  }}
                  resizeMode="cover">
                  <ImageBackground
                    source={{
                      uri: 'https://img.pikbest.com/ai/illus_our/20230526/366b3889e30558bad4357a194cd0525f.jpg!w700wp',
                    }}
                    resizeMode="cover">
                    <Text style={styles.register}>Welcome To Krenai</Text>

                    <ProfilePic />
                  </ImageBackground>
                  <Title title={'FullName'}></Title>
                  <Input
                    placeholder={'write any Full Name'}
                    onChange={handleChange('fullName')}
                    value={values.fullName}></Input>
                  {touched.fullName && errors.fullName && (
                    <Text style={styles.errorText}>{errors.fullName}</Text>
                  )}
                  <Title title={'LastName'}></Title>
                  <Input
                    placeholder={'write any LastName'}
                    onChange={handleChange('lastName')}
                    value={values.lastName}></Input>
                  {touched.lastName && errors.lastName && (
                    <Text style={styles.errorText}>{errors.lastName}</Text>
                  )}
                  <Title title={'Email'}></Title>
                  <Input
                    placeholder={'write any Email'}
                    onChange={handleChange('email')}
                    value={values.email}></Input>
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                  <View style={{position: 'relative'}}>
                    <Title title={'Address'}></Title>
                    <Input
                      placeholder={'write any Address'}
                      onChange={handleChange('address')}
                      value={values.address}></Input>
                    {touched.address && errors.address && (
                      <Text style={styles.errorText}>{errors.address}</Text>
                    )}
                    <View>
                      <TouchableOpacity onPress={addAddressField}>
                        <Text style={styles.addBtn}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {pressAdd === true ? (
                    <FlatList
                      data={formData.addresses}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  ) : (
                    ''
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
                  <Title title={'Confirm-Password'}></Title>
                  <Input
                    placeholder={'Confirm Password'}
                    onChange={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry></Input>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                  )}
                  <ButtonSubmit onSubmit={handleSubmit}></ButtonSubmit>
                  <Text>
                    Already have an account?
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                      <Text>Login</Text>
                    </TouchableOpacity>
                  </Text>
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
