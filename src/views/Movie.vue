<template>
	<div>
		<div class="grid md:grid-cols-5 gap-16">
			<div class="md:col-span-2">
				<div class="grid grid-col gap-8">

					<div>
						<button type="button" @click="back" class="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150">
							&larr; Back
						</button>
					</div>

					<Movie
					:movie="movie"
					/>

					<div class="bg-white overflow-hidden shadow rounded-lg">
						<div class="px-4 py-5 sm:p-6">
							<dl>
								<dt class="text-sm leading-5 font-medium text-gray-500 truncate">
									Seeds
								</dt>
								<dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
									{{ torrent.seeds }}
								</dd>
							</dl>
						</div>
					</div>
					<div class="bg-white overflow-hidden shadow rounded-lg">
						<div class="px-4 py-5 sm:p-6">
							<dl>
								<dt class="text-sm leading-5 font-medium text-gray-500 truncate">
									Peers
								</dt>
								<dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
									{{ torrent.peers }}
								</dd>
							</dl>
						</div>
					</div>
					<div v-if="Object.keys(t).length > 0" class="bg-white overflow-hidden shadow rounded-lg">
						<div class="px-4 py-5 sm:p-6">
							<dl>
								<dt class="text-sm leading-5 font-medium text-gray-500 truncate">
									Download Speed
								</dt>
								<dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
									{{ prettyBytes(t.downloadSpeed) }}
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
			<div class="md:col-span-3">
				<div class="grid grid-col gap-8">
					<div class="bg-indigo-100 w-full rounded-md p-3 text-indigo-700 truncate">
						{{ state }}
					</div>
					<div id="slot"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Movie from '@/components/Movie'

	export default {

		components: {
			Movie
		},

		props: {

			movie: {
				required: true,
				type: Object
			}
		},

		data () {
			return {
				state: 'Init system',
				trackers: [
				'udp://open.demonii.com:1337/announce',
				'udp://tracker.openbittorrent.com:80',
				'udp://tracker.coppersurfer.tk:6969',
				'udp://glotorrents.pw:6969/announce',
				'udp://tracker.opentrackr.org:1337/announce',
				'udp://torrent.gresille.org:80/announce',
				'udp://p4p.arenabg.com:1337',
				'udp://tracker.leechers-paradise.org:6969',
				'udp://tracker.internetwarriors.net:1337',
				'udp://p4p.arenabg.ch:1337',
				'udp://tracker.coppersurfer.tk:6969',
				'udp://tracker.openbittorrent.com:80',
				'udp://glotorrents.pw:6969/announce'
				],
				torrent: {},

				//-- Torrent stuff
				wt: {},
				t: {},
				progress: 0
			}
		},

		mounted () 
		{
			this.movie.torrents.forEach((torrent) => {
				if (torrent.quality == "720p") { this.torrent = torrent }
			})
			this.createWebTorrent()			
		},

		methods: {

			createWebTorrent () 
			{
				this.wt = new WebTorrent()
				this.startDownload()
			},

			createMagnet () {
				let magnet = 'magnet:?xt=urn:btih:'+this.torrent.hash+'&dn='+this.movie.slug
				this.trackers.forEach((t) => {
					magnet += "&tr="+encodeURIComponent(t)
				})

				// return 'https://webtorrent.io/torrents/sintel.torrent'
				return "magnet:?xt=urn:btih:584CB082CB19D81DBABE3E201D89976459D495EA&dn=black-panther-2018&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce"
			},

			startDownload () 
			{
				let m = this.createMagnet()
				this.state = 'Magnet: '+m,
				console.log('start', m)

				this.state = 'Starting ...'
				this.wt.add(m, (torrent) => { 

					this.state = 'Metadata receieved'
					this.t = torrent
					this.handleDownload() 

					//-- Events
					torrent.on('done',() => {
						clearInterval(this.progress)
					})

					//-- Load our mp4 file
					let file = torrent.files.find(function (file) {
						return file.name.endsWith('.mp4')
					})


					file.appendTo('#slot')
				})
			},

			handleDownload () {
				
				this.progress = setInterval(() => {
					this.getProgress()
				}, 500)
			},

			getProgress () {
				this.state = ('Downloading progress: ' + (this.t.progress * 100).toFixed(1) + '%')

			},

			stopTorrenting (callback) {
				this.t.destroy(() => {
					//-- closed
					console.log('gone')
					callback()
				})
			},

			back() {
				this.stopTorrenting(() => {
					this.$router.push({ 
						name: 'Home'
					})
				})
			},

			prettyBytes (num) {
				var exponent, unit, neg = num < 0, units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
				if (neg) num = -num
					if (num < 1) return (neg ? '-' : '') + num + ' B'
						exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
					num = Number((num / Math.pow(1000, exponent)).toFixed(2))
					unit = units[exponent]
					return (neg ? '-' : '') + num + ' ' + unit
				}
			}
		}
	</script>