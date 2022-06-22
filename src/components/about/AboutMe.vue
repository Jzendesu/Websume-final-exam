<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Jane Dula was born in Clarin, Philippines where she grew up surrounded by nature, hence, the recurring theme of animals, flowers, and plants in her art.  At a young age, she always loved drawing, online games, dressing up, and creating character designs from books or anime. ',
				},
				{
					id: 2,
					bio:
						'The interest in art never left her, and she took her Information Technology degree in college to even she want to pursue Fine Arts. She currently a 3rd year from the La Salle University, Ozamiz  with a bachelors degree Computer Studies in Information Technology. She worked as a Graphic Designer for 7 years then pursuing her art part-time.',
				},
				{
					id: 2,
					bio:
						'Jane prefers Digital as her primary medium due to its unpredictable nature, and the variety of textures it creates. Her art is known for its semi-realistic female figures in surreal settings with flowing lines and vibrant colors. The theme of her evolving art is rooted in her love of art nouveau, mythology, fantasy, natural elements, Japanese/manga art, and fashion.Jane also enjoys traveling, cooking, playing video games, watching movies, and listening to audiobooks. She now resides with her parents in a quiet town in the Philippines. ',
				},
				
				
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/MYprofile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
