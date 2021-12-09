import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [toSearch, onChangeText] = React.useState("Search a user . . .");

  const [displayUser, setUserInfo] = useState("");

  const fetchUserData = async (username) => {
    const res = fetch(`http://localhost:4242/api/users/${username}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await (await res).json()
  }

  const fetchAction = async () => {
    if (toSearch) {
      const userData = await fetchUserData(toSearch.toLowerCase())
      if (userData.user) {
        setUserInfo(userData.user)
      }
      else {
        setUserInfo({ error: "User not found" })
      }
    }

  }

  const renderItems = (userData) => {
    if (userData)
    {


      return <View style={styles.displayBox}>
      <Text>{userData.error}</Text>
    </View>
    
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GitHub user searcher</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchBox}>
          <Text style={styles.title}>Type the username you want to search :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={toSearch}
          />
          <Button color='rgb(33,150,243)' title="Search" onPress={fetchAction}></Button>
        </View>
        { renderItems(displayUser) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    marginBottom: '15px'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    fontSize: 20,
  },
  header: {
    paddingTop: '10px',
    paddingBottom: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightgray'
  },
  content: {
    marginTop: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '15px',
  },
  searchBox: {
    margin: '20px',
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '10px',
  },
  displayBox: {
    margin: '20px',
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '10px',
  },
  container: {
    backgroundColor: '#fff',
  },
});