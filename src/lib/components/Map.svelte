<script>
	import 'maplibre-gl/src/css/maplibre-gl.css'

	import maplibregl from 'maplibre-gl'

	let map = $state()

	/**
	 * @param {HTMLDivElement} node
	 */
	function initMap(node) {
		map = new maplibregl.Map({
			container: node,
			style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
			center: [46.7171, 24.6744],
			zoom: 14,
		})

		map.on('click', (/** @type {{ lngLat: { lng: number; lat: number; }; }} */ e) => {
			let marker = new maplibregl.Marker({ draggable: true })
				.setLngLat([e.lngLat.lng, e.lngLat.lat])
				.addTo(map)

			function onDragEnd() {
				const lngLat = marker.getLngLat()
				console.log(lngLat.lng, lngLat.lat)
			}

			marker.on('dragend', onDragEnd)
		})

		map.once('load', () => {
			map.resize()
		})
	}
</script>

<div class="map-wrapper">
	<div class="map" use:initMap style="width: 100%; height: 100%;"></div>
</div>

<style>
	.map-wrapper {
		width: 100%;
		height: 100%;
	}
</style>
