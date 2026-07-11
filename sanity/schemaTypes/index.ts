import { newsletter } from "./documents/newsletter";
import { blogPost } from "./documents/blog-post";
import { siteSettings } from "./documents/site-settings";
import { portableText } from "./objects/portable-text";

export const schemaTypes = [
  // Documents
  newsletter,
  blogPost,
  siteSettings,
  // Objects
  portableText,
];
