import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import appLogo from "../../src/assets/farmer.png"
import { useNavigation } from '@react-navigation/native';

const PNLoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();

  const handleSendOTP = () => {
    console.log('Mobile Number:', mobileNumber);
    navigation.replace('OTP Verify')
  };

  return (
    <View style={styles.container}>

      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={appLogo} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
      </View>

      {/* Mobile Number Input */}
      <TextInput
        label="Enter Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
        maxLength={10}
        style={styles.input}
        mode="outlined"
      />

      {/* Send OTP Button */}
      <Button mode="contained" onPress={handleSendOTP} style={styles.button}>
        Send OTP
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.loginText}>
          Don't have an account? Regsiter <Text style={styles.link}>here</Text>{"\n"}
          पहले खाता नहीं है? <Text style={styles.link}>यहां रजिस्टर करें</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00A859',
    marginTop: 8,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#00A859',
  },
  loginText: {
    marginTop: 15,
    fontSize: 14,
    textAlign: "center",
    color: "#555",
  },
  link: {
    color: "#0A8F34",
    fontWeight: "bold",
  },
});

export default PNLoginScreen;
