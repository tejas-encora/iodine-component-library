import NonVuetify from '@/components/NonVuetify.vue';

export default {
  title: 'Example/NonVuetify',
  component: NonVuetify,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { NonVuetify },
  setup() {
    return { args };
  },
  template: '<NonVuetify />',
});

export const Default = Template.bind({});
Default.args = {};