import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },

    {
      type: 'category',
      label: 'Tutorial - Basics',
      collapsible: true,
      collapsed: false,
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },

    {
      type: 'category',
      label: 'Tutorial - Extras',
      collapsible: true,
      collapsed: false,
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },

    // Project A
    {
      type: 'category',
      label: 'Project A',
      collapsible: true,
      collapsed: false,
      items: [
        'project-a/setup',
        'project-a/stack',
        'project-a/deployment',
      ],
    },

    // Project B
    {
      type: 'category',
      label: 'Project B',
      collapsible: true,
      collapsed: false,
      items: [
        'project-b/setup',
        'project-b/stack',
        'project-b/deployment',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
