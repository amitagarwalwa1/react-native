import React, {memo, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './LoginScreenStyles';
import {useAppTheme} from '../../../theme/useTheme';
import * as Yup from 'yup';

import {useFormik} from 'formik';
import SvgComponent from '../../../assets/svg/socialBtn/google';

interface LoginProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const {
    colors: {background, text},
  } = useAppTheme();

  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is Required'),
      password: Yup.string().required('Password is Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <Text style={[styles.title, {color: text}]}>Login Screen</Text>
      {/* <SvgComponent /> */}
      <View>
        <TouchableOpacity>
          <Image
            source={require('../../../../assets/svg/SocialButtons/google.png')}
            style={{width: 100, height: 100}}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        id="username"
        placeholder="Username"
        placeholderTextColor={'#B8B8B8'}
        style={[styles.input, {borderColor: text, color: text}]}
        onChangeText={loginFormik.handleChange('username')}
        value={loginFormik.values.username}
        onBlur={loginFormik.handleBlur('username')}
      />
      {loginFormik.touched.username && loginFormik.errors.username && (
        <Text style={styles.errorText}>{loginFormik.errors.username}</Text>
      )}
      <TextInput
        id="password"
        placeholder="Password"
        placeholderTextColor={'#B8B8B8'}
        secureTextEntry
        style={[styles.input, {borderColor: text, color: text}]}
        onChangeText={loginFormik.handleChange('password')}
        value={loginFormik.values.password}
        onBlur={loginFormik.handleBlur('password')}
      />
      {loginFormik.touched.password && loginFormik.errors.password && (
        <Text style={styles.errorText}>{loginFormik.errors.password}</Text>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        // onPress={() => navigation.navigate('Home')}
        onPress={loginFormik.handleSubmit}>
        <Text style={[styles.button]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(LoginScreen);
