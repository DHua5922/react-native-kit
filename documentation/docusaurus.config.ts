import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const githubUsername = "DHua5922";
const libraryName = "react-native-kit";
const githubLink = `https://github.com/${githubUsername}/${libraryName}`;

const config: Config = {
  title: libraryName,
  tagline: `Documentation for ${libraryName}`,
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: `https://${githubUsername}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: `/${libraryName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: githubUsername, // Usually your GitHub org/user name.
  projectName: libraryName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${githubLink}/tree/main/documentation/`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: libraryName,
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Get Started",
        },
        {
          href: githubLink,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/Installation",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: githubLink,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${libraryName}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
