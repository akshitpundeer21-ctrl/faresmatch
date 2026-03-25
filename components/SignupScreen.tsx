import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Plane } from 'lucide-react-native';
import { useAuthStore } from '@/store/authStore';

interface SignupScreenProps {
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupScreen({ onSuccess, onSwitchToLogin }: SignupScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = useAuthStore((state) => state.signup);

  const handleSignup = async () => {
    try {
      await signup(email, password, name);
      onSuccess();
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Plane size={48} color="#000" />
          <Text style={styles.logo}>FaresMatch</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onSwitchToLogin}>
            <Text style={styles.switchText}>
              Already have an account? <Text style={styles.switchLink}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 16,
    fontFamily: 'JetBrainsMono-Regular',
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 16,
    borderRadius: 0,
    fontSize: 16,
    fontFamily: 'JetBrainsMono-Regular',
  },
  button: {
    backgroundColor: '#C8D400',
    padding: 18,
    borderRadius: 0,
    marginTop: 8,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'JetBrainsMono-Regular',
  },
  switchText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#666',
    fontSize: 14,
  },
  switchLink: {
    color: '#000',
    fontWeight: 'bold',
  },
});
