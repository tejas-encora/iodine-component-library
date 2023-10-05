import VTextInput from '@/components/VTextInput.vue';
import { Description } from '@storybook/blocks';

export default {
  title: "UI/Text Input",
  component: VTextInput,
  name: "VTextInput",
  tags: ['autodocs'],

};
const Template = (args) => ({
  components: { VTextInput },
  setup() {
    return { args };
  },
  template: '<VTextInput />',
});

export const Default = Template.bind({});
Default.args = {};