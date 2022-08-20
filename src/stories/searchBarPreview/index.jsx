import React from 'react';
import SearchBarPreview from '../../components/searchBarPreview';
import { sampleData } from './sampleData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Search Bar Preview',
  component: SearchBarPreview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    dataToSearch: Array,
    handleSubmit: { action: 'clicked' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchBarPreview {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  key: 1,
  value: { ...sampleData },
  style: {
    backgroundColor: "#fff",
    borderTop: "1px solid #eee",
    color: "#666",
    cursor: "pointer",
    fontSize: 14,
    padding: "12px",
    position: "relative"
  },
  onClick: (i) => console.log("I've selected: ", i),
};
