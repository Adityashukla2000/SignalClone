import * as React from 'react';
import ChatRoomItem from '../components/ChatRoomItem';
import {View, Text, StyleSheet , Image, FlatList } from 'react-native';

import chatRoomData from '../assets/dummy-data/ChatRooms';

// const chatRoom1 = chatRoomData[0];
// const chatRoom2 = chatRoomData[1];

export default function TabOneScreen() {
  return (
<View style={styles.page}>


{/* For horizontal list like instagram story 
in this the page goes down and top but 
the horizontal page list not go*/}
{/* { <FlatList
     data ={chatRoomData}
     renderItem={({item})=> <ChatRoomItem chatRoom={item}/>}
     showsVerticalScrollIndicator ={false}
     horizontal
    /> } */}


{/* here we the horizontal page 
scroll that time vertical list goes top and down */}

{/* <FlatList
     data ={chatRoomData}
     renderItem={({item})=> <ChatRoomItem chatRoom={item}/>}
     showsVerticalScrollIndicator ={false}
     ListHeaderComponent={() => <FlatList
      data ={chatRoomData}
      renderItem={({item})=> <ChatRoomItem chatRoom={item}/>}
      showsVerticalScrollIndicator ={false}
      horizontal
     />}
    /> */}

{/* for text horizontal way and changeable */}
{/* <FlatList
     data ={chatRoomData}
     renderItem={({item})=> <ChatRoomItem chatRoom={item}/>}
     showsVerticalScrollIndicator ={false}
     ListHeaderComponent={() => <Text>Messeges</Text>}
    /> */}

<FlatList
     data ={chatRoomData}
     renderItem={({item})=> <ChatRoomItem chatRoom={item}/>}
     showsVerticalScrollIndicator ={false}
    />

  </View>

  );
}

const styles = StyleSheet.create({

  page:{

    backgroundColor:'white',
    flex:1,

  },
})

