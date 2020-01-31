<template>
  <q-page padding class="flex">
    <q-card style="flex:1">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-polygon
          :lat-lngs="polygon.latlngs"
          :color="polygon.color">
          </l-polygon>
          <l-marker :lat-lng="markerLatLng">
            <l-popup>Danger Zone</l-popup>
          </l-marker>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LPolygon, LMarker, LPopup } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    LMarker,
    LPopup
  },
  data () {
    return {
      polygon: {
        latlngs: [[-5.3816465, 105.0450325], [-5.3829207, 105.0471148], [-5.3832334, 105.0452895], [-5.3766795, 105.0482254]],
        color: 'red',
        fill: true
      },
      markerLatLng: [-5.3816465, 105.0450325],
      zoom: 11,
      center: L.latLng(-5.3816465, 105.0450325),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>
<style>
</style>
