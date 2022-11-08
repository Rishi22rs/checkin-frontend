import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  RefreshControl,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import FeedCard from '../Components/FeedCard';
import Camera from '../Components/Camera';
import TopHeader from '../Components/TopHeader';
import BottomSheet from 'reanimated-bottom-sheet';
import {CommentsBottomSheet} from '../Components/CommentsBottomSheet';
import MyBottomSheet from '../Components/MyBottomSheet';

import Geolocation from '@react-native-community/geolocation';

import * as api from '../ApiCalls/Api';

const NearPostFeed = ({navigation}) => {
  const [coords, setCoords] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    // Geolocation.requestAuthorization();

    Geolocation.getCurrentPosition(
      info => {
        setCoords(info);
        const data = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          distance: 100000,
        };
        api.allPostsNearby(data).then(res => {
          setData(res);
        });
      },
      error => console.log('Error', error),
      {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 3600000,
      },
    );
  }, []);

  const dimensions = Dimensions.get('window');

  const sheetRef = React.useRef(null);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    api.allPostsNearby(data).then(res => {
      setData(res);
      setRefreshing(false)
    });
  }, []);

  const triggerSnap = () => {
    sheetRef.current.snapTo(1);
  };


  return (
    <>
      <TopHeader navigation={navigation} latitude={coords&&coords.coords.latitude} longitude={coords&&coords.coords.longitude}/>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[0, dimensions.height - 200, dimensions.height - 30]}
        // snapPoints={[dimensions.height - 30, 0, dimensions.height - 200]}
        borderRadius={10}
        renderContent={CommentsBottomSheet}
      />
     
      {data ? (
        <FlatList
          style={{
            backgroundColor: '#EBEDEE',
            paddingLeft: 10,
            paddingRight: 10,
          }}
          data={data}
          renderItem={({item}) => (
            <FeedCard
              post_id={item.post_id}
              user_id={item.user_id}
              name={item.name}
              description={item.description}
              name={item.name}
              date={item.datetime}
              distance={item.distance_in_km}
              liked={item.liked}
              upvotes={item.upvotes}
              triggerSnap={triggerSnap}
              uri={item.img_url}
            />
          )}
          keyExtractor={item => item.post_id}
        />
      ) : (
        <ActivityIndicator size="large" color="black" style={{marginTop: 20}} />
      )}
      {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        bounces={true}
        contentOffset={{x: 0, y: 0}}
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: '#EBEDEE',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <FeedCard triggerSnap={triggerSnap} />
        <FeedCard triggerSnap={triggerSnap} />
        <FeedCard triggerSnap={triggerSnap} />
        <FeedCard triggerSnap={triggerSnap} />
        <FeedCard triggerSnap={triggerSnap} />
        <FeedCard triggerSnap={triggerSnap} />
        <FeedCard triggerSnap={triggerSnap} />
      </ScrollView> */}
    </>
  );
};

export default NearPostFeed;
