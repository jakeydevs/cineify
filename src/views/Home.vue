<template>
	<div>
		<div class="grid grid-row gap-8 py-16">
			<div>
				<div>
					<div class="mt-1 relative rounded-md shadow-sm">
						<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span v-if="busy" class="text-3xl">🤖</span>
							<span v-else class="text-3xl">🔍</span>
						</div>
						<input 
						type="search" 
						v-model="search"
						@search="searchChanged"
						:readonly="busy"
						class="form-input block w-full pl-16 text-3xl" 
						:class="{ 'bg-gray-100': busy }"
						placeholder="Search for a movie here" 
						/>
					</div>
				</div>


			</div>

			<section name="search">
				<div class="flex justify-end items-center">
					<div class="max-w-lg rounded-md shadow-sm sm:max-w-xs">
						<select id="country" class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" v-model="sort" @change="sortChanged">
							<option value="peers">Seeds: High</option>
							<option value="date_added">Date Added: Latest</option>
							<option value="rating">Rating: High</option>
							<option value="download_count">Downloaded: High</option>
						</select>
					</div>
				</div>
			</section>
			

			<section name="movie-list">

				<div v-if="busy" class="w-full mx-auto text-center">
					
					<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
					<svg class="h-16 w-16 mx-auto" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
								<stop stop-color="#000" stop-opacity="0" offset="0%"/>
								<stop stop-color="#000" stop-opacity=".631" offset="63.146%"/>
								<stop stop-color="#000" offset="100%"/>
							</linearGradient>
						</defs>
						<g fill="none" fill-rule="evenodd">
							<g transform="translate(1 1)">
								<path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
									<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 18 18"
									to="360 18 18"
									dur="0.9s"
									repeatCount="indefinite" />
								</path>
								<circle fill="#000" cx="36" cy="18" r="1">
									<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 18 18"
									to="360 18 18"
									dur="0.9s"
									repeatCount="indefinite" />
								</circle>
							</g>
						</g>
					</svg>
					<p class="mt-8 text-xl text-gray-600">Loading Movies ...</p>

				</div>

				<div v-else class="grid grid-cols-4 gap-8">
					<Movie 
					v-for="(movie, idx) in movies"
					:key="idx"
					:movie="movie"
					/>
				</div>

			</section>
		</div>
	</div>
</template>

<script>
	import Movie from '@/components/Movie'
	import axios from 'axios'

	export default {
		name: 'Home',

		components: {
			Movie
		},

		data () {
			return {
				search: '',
				sort: 'peers',

				movies: [],
				busy: false,
			}
		},

		mounted () {
			this.getMovieList()
		},

		methods: {

			getMovieList () {

				if (this.busy == false)
				{
					this.busy = true

					//-- Lets query the API by using our search stuff
					let params = {}
					params.quality = "720p"
					params.sort_by = this.sort
					if (this.search.length > 0) {
						params.query_term = this.search
					}

					axios.get('https://yts.mx/api/v2/list_movies.json', {
						params: params
					})
					.then((resp) => {
						this.busy = false
						this.movies = resp.data.data.movies
					})
					.catch((resp) => {
						console.warn(resp)
					})
				}
			},

			searchChanged () {
				this.getMovieList()
			},

			sortChanged () {
				this.getMovieList()
			}
		}
	}
</script>
