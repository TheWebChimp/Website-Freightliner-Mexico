// BaseButton.stories.js
import BaseButton from '@/components/BaseButton.vue';

// Describe card component
export default {
	title: "Elements/BaseButton",
};

// Define template for Primary Story
const Template = (args, { argTypes }) => ({
	components: { BaseButton },
	props: Object.keys(argTypes),
	template: `
	<base-button :class="$props.buttonClass" v-bind="$props">{{$props.text}}</base-button>`,
});

export const Basic = Template.bind({});

Basic.args = {
	text: 'Hello, this is a button',
	buttonClass: 'button-primary'
}

/*export const Outline = Template.bind({});

Outline.args = {
	text: 'Hello, this is a button',
	buttonClass: 'button-outline-primary'
}*/