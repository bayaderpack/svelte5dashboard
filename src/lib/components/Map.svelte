<script>
    // import { MapLibre } from 'svelte-maplibre';
    // import { mapContext } from 'svelte-maplibre';
    import { browser } from '$app/environment';
    import "maplibre-gl/src/css/maplibre-gl.css"
    // let map = $state()
    // const { map } = mapContext();

    import maplibregl from 'maplibre-gl';

    let map = $state()
    let mapbox = $state()
    // const marker = new maplibregl.Marker();
//     $effect(() => {
        
//         map = new maplibregl.Map({
//     container: mapbox,
//     style: `https://basemaps.cartocdn.com/gl/positron-gl-style/style.json`,
//     // center: [lng, lat],
//     // zoom: zoom
//   });

//     })



	/**
	 * @param {HTMLDivElement} node
	 */
	function initMap(node) {
		
		map = new maplibregl.Map({
			container: node,
			style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
			center: [46.7171, 24.6744],
			zoom: 14
		});

        map.on("click", (/** @type {{ lngLat: { lng: number; lat: number; }; }} */ e) => {
let marker = new maplibregl.Marker({draggable: true})
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(map);
        
        function onDragEnd() {
        const lngLat = marker.getLngLat();
        console.log(lngLat.lng, lngLat.lat)

    }

    marker.on('dragend', onDragEnd);


        
        })

        map.once('load', () => {
    map.resize();
});


	}

  </script>
  
  <div class="map-wrapper">
    <div class="map" use:initMap style='width: 100%; height: 100%;'></div>
  </div>
  
  <!-- <MapLibre 
    center={[50,20]}
    zoom={7}
    class="map"


    
    standardControls
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" /> -->
  
  <style>
    .map-wrapper {
      width: 100%;
      height: 100%;
    }
  </style>