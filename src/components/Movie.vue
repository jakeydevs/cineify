<template>
	<div>
		<div @click="view" class="bg-white hover:bg-gray-100 cursor-pointer shadow-md rounded-md flex flex-col overflow-hidden">
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

		methods: {

			view () {

				this.$router.push({ 
					name: 'Movie', 
					params: { 
						movie: this.movie
					} 
				})
			}
		}

	}
</script>