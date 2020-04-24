import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LoginScreen from './LoginScreen';
export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appLogo}>√ictor</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='First name'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Last name'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Email'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Password'
            placeholderTextColor='#003f5c'
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Confirm password'
            placeholderTextColor='#003f5c'
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        {/* Forgot password button */}
        {/* TouchableOpacity: It's a simple Text inside a button to have the press functionality, you cannot add bare text */}

        {/* Signup button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        {/* Login button */}
        <TouchableOpacity>
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// Predifined styles for the elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395375',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#59a4ff',
    marginBottom: 30,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#95a5c9',
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgotPswd: {
    color: 'white',
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#59a4ff',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});