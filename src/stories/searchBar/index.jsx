import React from 'react';
import SearchBar from '../../components/searchBar';
import { sampleData } from './sampleData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Search Bar',
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    dataToSearch: Array,
    handleSubmit: { action: 'clicked' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  dataToSearch: sampleData,
  handleSubmit: (pokemon, apiUrl) => console.log("Navigating to: ", pokemon, ' for url ', apiUrl),
};
