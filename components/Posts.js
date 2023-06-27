import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PostCard from './PostCard';

const Posts = () => {
  const [activeTab, setActiveTab] = useState('Explore');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const explorePosts = [
    {
      id: '1',
      photo: 'https://soiltech.in/wp-content/uploads/2020/05/venice-955548_1280-1024x768-800x600.jpg',
      likes: 100,
      comments: 20,
      username: 'john_doe',
      profilePhoto: 'https://static.toiimg.com//photo/83890830/83890830.jpg?imgsize=115510',
      date: '2023-06-27',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      photo: 'https://soiltech.in/wp-content/uploads/2020/05/venice-955548_1280-1024x768-800x600.jpg',
      likes: 200,
      comments: 30,
      username: 'jane_smith',
      profilePhoto: 'https://static.toiimg.com//photo/83890830/83890830.jpg?imgsize=115510',
      date: '2023-06-26',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more explore posts here...
  ];
  
  const discoverPosts = [
    {
      id: '1',
      photo: 'https://soiltech.in/wp-content/uploads/2020/05/venice-955548_1280-1024x768-800x600.jpg',
      likes: 150,
      comments: 25,
      username: 'alex_williams',
      profilePhoto: 'https://static.toiimg.com//photo/83890830/83890830.jpg?imgsize=115510',
      date: '2023-06-25',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      id: '2',
      photo: 'https://soiltech.in/wp-content/uploads/2020/05/venice-955548_1280-1024x768-800x600.jpg',
      likes: 300,
      comments: 40,
      username: 'emma_jones',
      profilePhoto: 'https://static.toiimg.com//photo/83890830/83890830.jpg?imgsize=115510',
      date: '2023-06-24',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    // Add more discover posts here...
  ];
  

  const renderPosts = () => {
    if (activeTab === 'Explore') {
      return explorePosts.map((post) => <PostCard key={post.id} post={post} />);
    } else {
      return discoverPosts.map((post) => <PostCard key={post.id} post={post} />);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Explore' && styles.activeTab]}
          onPress={() => handleTabChange('Explore')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Explore' && styles.activeTabText]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Discover' && styles.activeTab]}
          onPress={() => handleTabChange('Discover')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Discover' && styles.activeTabText]}>Discover</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsContainer}>{renderPosts()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  tabButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  activeTab: {
    backgroundColor: '#37e',
    borderRadius: 20,
  },
  activeTabText: {
    color: '#eee',
  },
  postsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
});

export default Posts;
