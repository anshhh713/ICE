// src/global.d.ts

// Allow importing CSS files
declare module '*.css';

// Allow importing images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

// Allow importing SVGs (as a file path)

declare module '*.svg' {
  const content: string;
  export default content;
}

// If you ever use fonts
// declare module '*.woff';
// declare module '*.woff2';
// declare module '*.ttf';
// declare module '*.eot';