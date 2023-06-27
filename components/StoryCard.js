import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Modal, Image, StatusBar } from 'react-native';
import { BlurView } from 'expo-blur';

const StoryCard = ({ story }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <>
    {modalVisible ? null : (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <ImageBackground source={{ uri: story.storyImage }} style={styles.container} imageStyle={styles.backgroundImage}>
          <View style={styles.ribbonContainer}>
            <View style={styles.ribbon}>
              <Image style={styles.profilePhoto} source={{ uri: story.profilePhoto }} />
              <Text style={styles.name}>{story.name}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )}
    <Modal visible={modalVisible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <Image style={styles.modalImage} source={{ uri: story.storyImage }} />
        <View style={styles.modalRibbon}>
          <Image style={styles.modalProfilePhoto} source={{ uri: story.profilePhoto }} />
          <Text style={styles.modalName}>{story.name}</Text>
        </View>
      </View>
    </Modal>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  ribbonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  ribbon: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    position: 'absolute',
    zIndex: 1,
    top: -17,
    left: 45,
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 8,
  },
  name: {
    color: 'white',
    fontSize: 17,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: StatusBar.currentHeight + 20,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalImage: {
    width: 300,
    height: 400,
    borderRadius: 16,
    marginBottom: 16,
  },
  modalRibbon: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalProfilePhoto: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  modalName: {
    color: 'white',
    fontSize: 16,
  },
});

export default StoryCard;
