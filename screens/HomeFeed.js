import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import TopBar from '../components/TopBar';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

export default function HomeFeed() {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <TopBar />
            <ScrollView>
            <Stories />
            <Posts />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#222',
    },
  });
  