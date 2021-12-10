import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {

  const [toSearch, onChangeText] = React.useState("Search a user . . .");

  const [displayUser, setUserInfo] = useState({Info:"User data will be displayed here"});

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
        setUserInfo({ Info: "User not found" })
      }
    }

  }

  const renderItems = (userData) => {
    var template = []
    template.push(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.logo} source={{ uri: userData.avatar_url }} />
        </View>
    )
    for (const key in userData) {
      template.push(<View key={key}>
          <Text>{key} : {userData[key]}</Text>
      </View>)
    }

    return template
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
        <View style={styles.displayBox}>
          { renderItems(displayUser) }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
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