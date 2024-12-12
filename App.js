// Import necessary modules
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  // State to manage which background image is displayed
  const [backgroundImage, setBackgroundImage] = useState('pluggedInScissors');
  const [scissorsVisible, setScissorsVisible] = useState(true);
  const [scissorsPressed, setScissorsPressed] = useState(false);

  // Function to handle scissors button press
  const handleScissorsPress = () => {
    setScissorsPressed(true);
    setBackgroundImage('pluggedInDoug');
    setScissorsVisible(false);
  };

  // Function to handle another button press
  const handleAnotherButtonPress = () => {
    if (scissorsPressed) {
      setBackgroundImage((prevImage) =>
        prevImage === 'pluggedInDoug' ? 'unpluggedDoug' : 'pluggedInDoug'
      );
      setScissorsPressed(false); // Reset scissors state
    }
  };

  return (
    <ImageBackground
      source={
        backgroundImage === 'pluggedInScissors'
          ? require('./assets/pluggedInScissors.png')
          : backgroundImage === 'pluggedInDoug'
          ? require('./assets/pluggedInDoug.png')
          : require('./assets/unpluggedDoug.png')
      }
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Scissors Button */}
        {scissorsVisible && (
          <View style={styles.scissorsPosition}>
            <TouchableOpacity
              onPress={handleScissorsPress}
              style={styles.scissorsButton}
            >
              <Image
                source={require('./assets/scissors.png')}
                style={styles.scissorsImage}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Another Button */}
        <TouchableOpacity
          onPress={handleAnotherButtonPress}
          style={styles.actionButton}
        >
          <Text style={styles.actionButtonText}>Toggle Background</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scissorsPosition: {
    position: 'absolute',
    top: 100, // Adjust to move vertically
    left: 50, // Adjust to move horizontally
  },
  scissorsButton: {
    marginTop: 357,
    right: 50,
    opacity:0
  },
  scissorsImage: {
    width: 50,
    height: 50,
  },
  actionButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    bottom:85,
    right:100,
    opacity: 0
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
