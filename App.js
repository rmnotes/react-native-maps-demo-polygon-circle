/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import { StyleSheet, Button, View} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Polygon, Circle } from "react-native-maps";


const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
  },
  mapcontainer: {
    width:"100%",
    height:"100%",
    backgroundColor: "#ff0000"
  },
  button:{
    position: "absolute",
    right: 20,
    bottom:20,
    backgroundColor: "#00ff00",
    color: "#110011",
    width:200
  }
});

  const polygons=[
    {fill: "red", coordinates: [
      {latitude: 50.3 , longitude: 8.7 },
      {latitude: 50 , longitude: 8.7 },
      {latitude: 50.3 , longitude: 8.9 },
    ]},
    {fill: "rgba(255,0,0,0.3)", coordinates: [
      {latitude: 49.5 , longitude: 8.4 },
      {latitude: 50 , longitude: 8.4 },
      {latitude: 50 , longitude: 8.2 },
      {latitude: 49.5 , longitude: 8.2 },
    ]},
    {fill: "blue", coordinates: [
      {latitude: 50.1 , longitude: 8.2 },
      {latitude: 50.1 , longitude: 8.5 },
      {latitude: 50.4 , longitude: 8.2 },
    ]},
  ]

const App: () => React$Node = () => {
  const [polygonVisisble, setPolygonVisibility]= useState(true);
  return (
    <View style={styles.mapcontainer}>
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapcontainer}
      initialRegion={{latitude: 50,longitude: 8.5,latitudeDelta: 1,longitudeDelta: 1}}
      >
        {
          polygons.map( ( p, id) => {
            return polygonVisisble ?
              <Polygon key={id} fillColor={p.fill} strokeColor={"yellow"} strokeWidth={5} coordinates={p.coordinates} />
              : <Circle key={id} fillColor={p.fill} strokeColor={"green"} strokeWidth={5} center={p.coordinates[0]} radius={7000.0*(id+1)} />
          })
        }
      </MapView>
      <View style={styles.button}>
        <Button
            title={polygonVisisble ? "Show Circles" : "Show Polygons"}
            color="#f194ff"
            onPress={() => setPolygonVisibility(! polygonVisisble)}
        />
      </View>
    </View>
  );
};


export default App;
