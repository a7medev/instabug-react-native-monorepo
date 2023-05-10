import React from 'react';
import { Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity role="button" onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: '#00287a',
  },
  label: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
