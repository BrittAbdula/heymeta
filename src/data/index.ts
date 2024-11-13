import { cameraRules } from "./rules/camera";
import { metaRules } from "./rules/meta";

export interface Rule {
  title: string;
  slug: string;
  tags: string[];
  libs: string[];
  content: string;
  author: Author;
  imageUrls: string[];
}

interface Author {
  name: string;
  url: string;
  avatar: string;
}

export const rules: Rule[] = [
  ...metaRules,
  ...cameraRules,
].map(
  (rule): Rule => ({
    ...rule,
    libs: rule.libs || [],
  }),
);

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}

export function getRuleBySlug(slug: string) {
  return rules.find((rule) => rule.slug === slug);
}
