import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Mapbox from '@mapbox/react-native-mapbox-gl'
import MapboxGL from '@mapbox/react-native-mapbox-gl'

Mapbox.setAccessToken(
  'pk.eyJ1Ijoib2FobWFybyIsImEiOiJjanBpNjc2MWEwMGJiM3BydXR0NnZ4YjlkIn0.D_dEsmmhcDtf_3_VW8CSEw'
)

export default class Map extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Light}
          centerCoordinate={[35.8643, 31.9548]}
          zoomLevel={15}
          style={styles.container}
          logoEnabled={false}
          attributionEnabled={false}
        />
        <MapboxGL.MapView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})
