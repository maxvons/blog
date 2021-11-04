interface LinkObject {
  linkText: string;
  path: string;
}

interface LinkCollection {
  heading: string;
  links: Array<LinkObject>;
}

const devLinks: Array<LinkCollection> = [
  {
    heading: "Everything you need to create a React app",
    links: [
      {
        linkText: "Tutorial: Intro to React",
        path: "https://reactjs.org/tutorial/tutorial.html",
      },
      {
        linkText: "Introducing JSX",
        path: "https://reactjs.org/docs/introducing-jsx.html",
      },
      {
        linkText: "Thinking in React",
        path: "https://reactjs.org/docs/thinking-in-react.html",
      },
      {
        linkText: "Airbnb style guide for React projects",
        path: "https://blog.bitsrc.io/how-to-set-up-airbnb-style-guide-for-react-projects-fc7dfb1f3d68",
      },
      {
        linkText: "5 JavaScript tips to improve your React code",
        path: "https://www.freecodecamp.org/news/javascript-tips-to-improve-your-react-code-today/amp/",
      },
      {
        linkText: "Deploy your React app",
        path: "https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/",
      },
    ],
  },
  {
    heading: "How to write clean and performant CSS",
    links: [
      {
        linkText: "Organizing your CSS",
        path: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing",
      },
      {
        linkText: "BEM 101",
        path: "https://css-tricks.com/bem-101/",
      },
      {
        linkText: "50 CSS Best Practices & Guidelines to Write Better CSS",
        path: "https://medium.com/before-semicolon/50-css-best-practices-guidelines-to-write-better-css-c60807e9eee2",
      },
      {
        linkText: "How to Improve CSS Performance",
        path: "https://css-tricks.com/how-to-improve-css-performance/",
      },
      {
        linkText: "CSS General Rules of Thumb",
        path: "https://rehansaeed.com/css-general-rules-of-thumb/",
      },
      {
        linkText: "Media Queres for Standard Devices",
        path: "https://css-tricks.com/snippets/css/media-queries-for-standard-devices/",
      },
    ],
  },
  {
    heading: "Image optimization",
    links: [
      {
        linkText: "Maximally optimizing image loading for the web in 2021",
        path: "https://www.industrialempathy.com/posts/image-optimizations/",
      },
      {
        linkText: "Automatic Image Optimization with Hazel and ImageOptim",
        path: "https://css-tricks.com/automatic-image-optimization-hazel-imageoptim/",
      },
      {
        linkText: "Image Loading and Optimization in Gatsby with gatsby-image",
        path: "https://egghead.io/playlists/using-gatsby-image-with-gatsby-ea85129e",
      },
      {
        linkText: "Use Imagemin to compress images",
        path: "https://web.dev/use-imagemin-to-compress-images/",
      },
      {
        linkText: "ImageOptim",
        path: "https://imageoptim.com/mac",
      },
    ],
  },
];

export { devLinks };
