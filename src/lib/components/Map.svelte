<script>
	import 'maplibre-gl/src/css/maplibre-gl.css'

	import maplibregl from 'maplibre-gl'

	let map = $state()
	let coordinates = $state()
	
	let { coords } = $props();
	// let power = $state(5);
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
		const icon = node.querySelector('.maplibregl-ctrl-icon')
		const iconEl = document.createElement('Icon')
		iconEl.setAttribute('icon', 'bi:pin')
		iconEl.classList.add('text-lg', 'text-slate-800')
		icon?.appendChild(iconEl)

		// map.on('click', (/** @type {{ lngLat: { lng: number; lat: number; }; }} */ e) => {})

		map.once('load', () => {
			map.resize()
		})
		map.addControl(
			new maplibregl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true,
				},
				trackUserLocation: true,
			}),
		)
	}

	$effect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				// coordinates = [position.coords.longitude, position.coords.latitude]
				map.jumpTo({
					center: [position.coords.longitude, position.coords.latitude],
					zoom: 16,
					bearing: 90,
				})
				var lon = position.coords.longitude
				var lat = position.coords.latitude
				let marker = new maplibregl.Marker({ draggable: true })
					.setLngLat([lon, lat])
					.addTo(map)

				function onDragEnd() {
					const lngLat = marker.getLngLat()
					// @ts-ignore
					coords([lngLat.lng, lngLat.lat])
					// console.log()
				}

				marker.on('dragend', onDragEnd)
			})
		}
	})
</script>

<div class="map-wrapper">
	<div class="map" use:initMap style="width: 100%; height: 100%;"></div>
</div>

<style>
	.map-wrapper {
		width: 100%;
		height: 100%;
	}
	:global(.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon) {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23333' viewBox='0 0 20 20'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1m0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E");
	}
</style>
