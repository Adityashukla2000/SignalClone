import React from "react";
import {View, Text, StyleSheet , Image, FlatList } from 'react-native';
import Users from "../../assets/dummy-data/Users";
import styles from "./styles";
export default function ChatRoomItem({chatRoom}){
const user = chatRoom.users[1];
      return (
    <View style={styles.container}>
    <Image source={{uri : user.imageUri}} style ={styles.image}/>
    
    {chatRoom.newMessages && <View style={styles.badgecontainer}>
       <Text style={styles.badgetag}>{chatRoom.newMessages}</Text>
     </View>}

    <View style={styles.fix}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
       <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
       </View>
    </View>


);}
