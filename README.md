# Get started building your personal website using GatsbyJS

### Showcase your software development skills

This repository gives you the code you'll need to kickstart a personal website that showcases your work as a software developer. And when you manage the code in a GitHub repository, it will automatically render a webpage with the owner's profile information, including a photo, bio, and repositories.

Your personal website is waiting to be personalized, though. It includes space to highlight your specific areas of interest in software development, like languages or industries. And it's standing by to publish your next great blog post.

It's all possible using the combination of [gatsbyjs](https://www.gatsbyjs.org/docs/) (for building your website), [GitHub Pages](https://pages.github.com/) (for hosting your website), and [GitHub's API](https://developer.github.com/v3/) (for automatically populating your website with content).

## Installation

### Fork this repo

You'll be making your own copy of the "personal website starter" repository so you have your own project to customize. A "fork" is a copy of a repository. So select "Fork" atop the [thakkaryash94/gatsby-github-personal-website` repository](https://github.com/thakkaryash94/gatsby-github-personal-website).

Once you've found a home for your forked repository, it's yours. You're the owner, so you're ready to publish, if you wish.

### GitHub Personal Access Token

We need GitHub personal access toke to fetch data and generate content for our website using graphql api. Create personal token for this app. Learn more [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

* permissions
  - repo
    - public_repo
  - admin:org
    - read:org
  - user
    - read:user
    - user:email

**Note: Do not mark any other permission as we don't require them, we are only granting read permission to our project. DO NOT COMMIT this token.**

### Install in your local development environment

1. Change into your new directory
```
cd personal-website
```
2. Install dependencies
```
npm install
```
3. Build the site and make it available on a local server
```
GITHUB_TOKEN=YOUR_GITHUB_TOKEN npm run develop
```
6. Now browse to [http://localhost:8000](http://localhost:8000)

### Publish

When you host your personal website's code on GitHub, you get the support of free hosting through GitHub Pages.

GitHub Pages support jekyll projects out of the box. Our project is in JavaScript, that's why we have to follow certain steps to host our personal website.

- We run below command to generate static build for our personal website. This command will create public folder with bunch of files-folders for our website.

```
GITHUB_TOKEN=YOUR_GITHUB_TOKEN npm run gh-build
```

Now, you will see, all files from public folder is copied in root directory.Our source code is in `source` folder and all the static public files are at the root path. By default, GitHub serves root path as the website content. We already have `index.html` and other required static files on root path. So we don't need to do anything else. We just need to commit and push the code and GitHub will start serving our personal website.

**If you want to use a custom domain**, you'll want to add it to your repository's "Custom domain" settings on github.com. And then register and/or [configure your domain with a DNS provider](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/).

## Customization

It's your website, and you control the source code. So you can customize everything, if you like. But we've provided a handful of quick customizations for you to consider as you get your website off the ground.

### Quick configuration changes

Most customizations can be done in a matter of seconds, by revising your repository's `gatsby-config.js` file.

#### Layout

By default, your website will display in a two-column layout on larger-screen devices, with your photo, name, and basic information displayed in a left-aligned "sidebar." But you can quickly switch to a "stacked" single-column layout by changing the line in your `gatsby-config.js` file that reads `layout: sidebar` to `layout: stacked`.

#### Style

By default, your website appears with a "light" white and gray background, with dark text. But you can quickly switch to a "dark" background with white text by changing the line in your `gatsby-config.js` file that reads `style: light` to `style: dark`.

#### Topics

Your website comes pre-configured with three topics (e.g. "Web design" and "Sass") that appear in a section titled "My Interests." These are also stored in your repository's `gatsby-config.js` file, where you can define each topic's name and two other optional details:

- `web_url`: The web address you'd like to your topic to link to (e.g. `https://github.com/topics/sass`).
- `image_url`: The web address of an (ideally square) image that you'd like to appear with your topic.

## Adding pages

To **add a page** to your website (e.g. detailed resume):

1. Create a new `.js` file under pages folder.
2. Give it a filename that you want to be used in the page's URL (e.g. `http://yoursite.dev/filename`).

## Adding blog posts

To **add a blog post** to your website:

1. Create a new `.md` file in your repository's `/data/posts/` directory.
2. Give it a filename using the following format:

```
YEAR-MONTH-DAY-title.md
```

3. At the start of your file, include the following [front matter](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/):

```
---
title: "The title of my blog post"
---
```

Your website comes with a placeholder blog post that you can reference. Notably, its [front matter](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) declares `published` as `false`, so that it won't appear on your website.

## Content and templates

To give you a sound foundation to start your personal website, your repository imports a handful of components that are re-used throughout your website. They're all stored in the `/components/` directory.

There are the usual suspects, like `layout.js` and `seo.js`. But there are few more worth pointing out:

- `interests.js`: A heading and dynamic list of "My Interests," which is populated with the [topics](#topics) you list in your `/data/topcis.yaml`.
- `masthead.js`: A collection of your avatar, name, bio, and other metadata that's displayed prominently on all your webpages to help identify what the website is about.
- `postCard.js`: A compact, summarized presentation of a blog post, re-used to display a listing of your latest blog posts.
- `projects.js`: A heading and dynamic list of "My Projects," which is populated with a listing of your newest GitHub repositories.
- `repoCard.js`: A compact, summarized presentation of a repository, re-used to display a listing of your GitHub repositories.
- `thoughts.js`: A heading and dynamic list of "My Thoughts," which is populated with a listing of your latest blog posts.
- `topicCard.js`: A compact, summarized presentation of a topic (defined in your `/data/topics.yaml`), re-used to display a listing of your interests.

### Layouts

Your repository comes with three layouts:

- **default**: Not used by any of the built-in pages or posts, but useful for any new pages you create.
- **home**: Used by your `/pages/index.js` homepage to display listings of your projects, interests, and (optionally) your blog posts.
- **post**: Used by default by the posts in your `/data/posts/` directory.

## Styles

Your website is pre-configured to use [GitHub's very flexible CSS framework called "Primer,"](https://styleguide.github.com/primer/). It's currently referenced within your `layout.scss` file, using the CSS import at-rule:

```
@import url('https://unpkg.com/primer/build/build.css');
```

You are, of course, welcome to remove it or replace it with another framework. Just bear in mind that the HTML that your website came pre-packaged with references multiple Primer "utility classes" to define things like column widths, margins, and background colors.

You also have the option to add on to and extend Primer's styles by adding custom CSS to your `/assets/styles.scss` Sass stylesheet. By editing this file, you can customize your website's color scheme, typography, and more.

## Original Repository
This project is conversion to JS from original repository. I tried to follow the same file-folder structure as original repository.

https://github.com/github/personal-website


## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

