import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Plane } from 'lucide-react-native';

interface AuthGateProps {
  visible: boolean;
  onClose: () => void;
  onLogin: () => void;
  onSignup: () => void;
}

export default function AuthGate({ visible, onClose, onLogin, onSignup }: AuthGateProps) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Plane size={32} color="#000" />
          <Text style={styles.title}>Sign in to continue</Text>
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signupButton} onPress={onSignup}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#C8D400',
    padding: 16,
    borderRadius: 0,
    marginBottom: 12,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 16,
  },
  signupButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
  },
});
