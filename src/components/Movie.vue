<template>
	<div>
		<div @click="view" class="bg-white transition ease-out duration-300 hover:bg-gray-100 transform hover:scale-110 cursor-pointer shadow-md rounded-md flex flex-col overflow-hidden">
			<img class="h-96 w-full object-cover" :src="movie.large_cover_image" alt="" />
			<div class="flex-1 p-6 flex flex-col justify-between">
				<div>
					<span 
					v-for="(genre, idx) in movie.genres"
					:key="idx"
					class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-teal-100 text-teal-800 mr-2 mb-2">{{ genre }}</span>
				</div>
				<h3 class="mt-5 text-xl leading-7 font-semibold text-gray-700">
					{{ movie.title }}
				</h3>
				<p class="mt-2 text-sm leading-5 font-medium text-indigo-500">
					<span title="Rating">📈 {{ movie.rating}} / 10</span>
				</p>
			</div>
			<div class="bg-green-50 text-green-500 p-6">
				✔ Torrent healthy
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		props: {
			movie: {
				required: false,
				type: Object
			}
		},

		data () {
			return {

				trackers: [
				'udp://glotorrents.pw:6969/announce',
				'udp://tracker.openbittorrent.com:80',
				'udp://tracker.coppersurfer.tk:6969',
				'udp://p4p.arenabg.ch:1337',
				'udp://tracker.internetwarriors.net:1337',
				'udp://open.demonii.com:1337/announce',
				'udp://tracker.openbittorrent.com:80',
				'udp://tracker.coppersurfer.tk:6969',
				'udp://glotorrents.pw:6969/announce',
				'udp://tracker.opentrackr.org:1337/announce',
				'udp://torrent.gresille.org:80/announce',
				'udp://p4p.arenabg.com:1337',
				'udp://tracker.leechers-paradise.org:6969',
				'http://track.one:1234/announce',
				'udp://track.two:80'
				],
				torrent: {},
			}
		},

		mounted () {
			this.getTorrent()
		},

		methods: {

			getTorrent () {
				this.movie.torrents.forEach((torrent) => {
					if (torrent.quality == "720p") { this.torrent = torrent }
				})
			},

			createMagnet () {
				let magnet = 'magnet:?xt=urn:btih:'+this.torrent.hash+'&dn='+this.movie.slug
				this.trackers.forEach((t) => {
					magnet += "&tr="+t
				})
				return encodeURIComponent(magnet)
			},

			view () {
				window.location = "https://instant.io/#"+this.createMagnet()
			}
		}

	}
</script>