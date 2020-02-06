<template>
  <q-page padding class="flex">
    <q-card style="flex:1">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-polygon
          v-for="(p, i) in polygon"
          :key="i"
          :lat-lngs="p.latlngs"
          :color="polygon.color">
          <l-popup>{{ p.pemilik }}</l-popup>
        </l-polygon>
        <l-marker :lat-lng="markerLatLng">
            <l-popup>Danger Zone 2</l-popup>
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
  created () {
    try {
      this.$axios.get('kordinat/get').then(response => {
        this.polygon = response.data
      })
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      polygon: [],
      markerLatLng: [-5.3816465, 105.0450325],
      marker2: [-5.3829207, 105.0471148],
      marker3: [-5.3832334, 105.0452895],
      marker4: [-5.3766795, 105.0482254],
      zoom: 15,
      center: L.latLng(-5.3816465, 105.0450325),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>
<style>
</style>
