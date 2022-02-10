// Statistic.stories.js
import Statistic from '@/components/Statistic.vue';

// Describe card component
export default {
	title: "Elements/Statistic",
};

// Define template for Primary Story
const Template = (args, { argTypes }) => ({
	components: { Statistic },
	props: Object.keys(argTypes),
	template: `<statistic v-bind="$props" />`,
});

export const Basic = Template.bind({})

Basic.args = {
	number: '15',
	label: 'Users',
	loading: false,
	kmb: false,
	loadingIcon: 'fa-spinner'
}