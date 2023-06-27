import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.profilePhoto }} style={styles.profilePhoto} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Image source={{ uri: post.photo }} style={styles.postImage} />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="paper-plane-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={styles.repliesContainer}>
          <Text style={styles.repliesHeading}>Replies</Text>
          {/* Render the replies here */}
        </View>
      )}
      <TouchableOpacity style={styles.expandButton} onPress={handleExpand}>
        <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  profilePhoto: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 8,
  },
  actionButton: {
    padding: 8,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginBottom: 8,
  },
  likeIcon: {
    marginRight: 4,
  },
  likesText: {
    color: '#ffffff',
    fontSize: 12,
  },
  repliesContainer: {
    padding: 8,
  },
  repliesHeading: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  expandButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
});

export default PostCard;
