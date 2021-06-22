import React from 'react';
import {View, Text, Dimensions, Image, FlatList} from 'react-native';

import FeedCard from './FeedCard';

const dimensions = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Third Item',
  },
  {
    id: '5',
    title: 'Third Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3d',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da19d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f--145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5866-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869471e29d72',
    title: 'Third Item',
  },
  {
    id: '586946-145571e29d',
    title: 'Third Item',
  },
  {
    id: '586946-1455729d',
    title: 'Third Item',
  },
  {
    id: '586946-145571e',
    title: 'Third Item',
  },
  {
    id: '586946',
    title: 'Third Item',
  },
];

const CommentList = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 50,
        marginBottom: 10,
      }}>
      <Image
        style={{height: 50, width: 50, borderRadius: 50, marginRight: 10}}
        source={{uri: 'https://i.redd.it/r083i3f4yyr41.jpg'}}
      />
      <View>
        <Text style={{fontWeight: 'bold'}}>Sakuta</Text>
        <Text numberOfLines={3}>
          This is such a nice post!!!!!!!!!!This is such a nice
          post!!!!!!!!!!This is such a nice post!!!!!!!!!!This is such a nice
          post!!!!!!!!!!This is such a nice post!!!!!!!!!!
        </Text>
      </View>
    </View>
  );
};

export const CommentsBottomSheet = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: dimensions.height - 30,
      }}>
      <Text
        style={{
          fontSize: 20,
          paddingBottom: 10,
        }}>
        Comments
      </Text>
      <FlatList
        data={DATA}
        renderItem={CommentList}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
