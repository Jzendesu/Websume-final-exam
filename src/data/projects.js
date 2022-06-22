// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Personal Art',
		category: 'Digital Art',
		img: require('@/assets/images/ART1.jpg'),
	},
	{
		id: 2,
		title: 'DTIYS',
		category: 'Digital Art',
		img: require('@/assets/images/ART4.jpg'),
	},
	{
		id: 3,
		title: 'Art Commission',
		category: 'Digital Art',
		img: require('@/assets/images/commission.jpg'),
	},
	{
		id: 4,
		title: 'Game Project',
		category: 'Game Design Development ',
		img: require('@/assets/images/assets.jpg'),
	},
	{
		id: 5,
		title: '3D model',
		category: 'Blender Project',
		img: require('@/assets/images/model.jpg'),
	},
	{
		id: 6,
		title: 'Website Project',
		category: 'Web Application',
		img: require('@/assets/images/websumejs.jpg'),
	},
];

export default projects;
