import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {

  const [text, onChangeText] = React.useState("Search a user ...");

  const [myText, setMyText] = useState("My Original Text");

  let userData = ""

  const fetchUser = async (username) => {
    const { API_TOKEN } = process.env;
    const { GITHUB_URL } = process.env;
    const { NGROK_URL } = process.env;
    //const response = await fetch(NGROK_URL + `/api/users/${username}`);
    const response = await fetch(`${GITHUB_URL}${username}`,{
      headers:{
        Authorization : "token " + API_TOKEN
      }
    });
    const data = await response.json();
    if (data.login)
    {
      userData = "login : "+data.login+", id : "+data.id
      setMyText(userData)
    }
    else
    {
      userData = data.message
      setMyText(userData)
    }
  }

  fetchUser(text)

  return (
    <View style={styles.container}>
      <Text>Hello ! You can search a user's github data here : </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>{myText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
