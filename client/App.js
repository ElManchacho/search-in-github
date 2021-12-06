import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {

  const [text, onChangeText] = React.useState("Useless Text");

  const [myText, setMyText] = useState("My Original Text");

  let userData = ""

  const fetchUser = async (username) => {
    //const response = await fetch(process.env.NGROK_URL + `/api/users/${username}`);
    console.log("url :")
    console.log(process.env.GITHUB_URL)
    const response = await fetch(`${process.env.GITHUB_URL}+${username}`,{
      headers:{
        Authorization : "token " + process.env.API_TOKEN
      }
    });
    const data = await response.json();
    if (data.login)
    {
      userData = "login : "+data.login+", id : "+data.id 
    }
    else
    {
      userData = data.message
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
      <Text onPress = {() => setMyText(userData)}>
                    {myText}
            </Text>
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
