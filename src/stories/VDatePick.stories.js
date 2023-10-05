import VDatePick from '../components/VDatePick.vue';

export default {
  title: 'UI/Date Picker',
  component: VDatePick,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { VDatePick },
  setup() {
    return { args };
  },
  template: '<VDatePick />',
});

export const Default = Template.bind({});
Default.args = {};