import React from 'react';
import { DocsPage } from './DocsPage';
import * as storyStories from './Story.stories';
import * as propsTableStories from './PropsTable/PropsTable.stories';
import * as sourceStories from './Source.stories';
import * as descriptionStories from './Description.stories';

export const componentMeta = {
  title: 'Docs|DocsPage',
  Component: DocsPage,
};

export const empty = () => (
  <DocsPage
    title={null}
    storyProps={storyStories.error().props}
    propsTableProps={propsTableStories.error().props}
    sourceProps={sourceStories.sourceUnavailable().props}
  />
);

export const noText = () => (
  <DocsPage
    title="no text"
    storyProps={storyStories.inline().props}
    propsTableProps={propsTableStories.normal().props}
    sourceProps={sourceStories.jsx().props}
  />
);
noText.title = 'no text';

export const text = () => (
  <DocsPage
    title="Sensorium"
    descriptionProps={descriptionStories.text().props}
    previewProps={storyStories.inline().props}
    propsTableProps={propsTableStories.normal().props}
    sourceProps={sourceStories.jsx().props}
  />
);

export const withSubtitle = () => (
  <DocsPage
    title="SimStim"
    subtitle="A digital representation of the thoughts and feelings of another person."
    descriptionProps={descriptionStories.text().props}
    storyProps={storyStories.inline().props}
    propsTableProps={propsTableStories.normal().props}
    sourceProps={sourceStories.jsx().props}
  />
);

export const markdown = () => (
  <DocsPage
    title="markdown"
    descriptionProps={descriptionStories.markdown().props}
    storyProps={storyStories.inline().props}
    propsTableProps={propsTableStories.normal().props}
    sourceProps={sourceStories.jsx().props}
  />
);