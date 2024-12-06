import { NAV__ITEMS } from "./constant/nav_item";

export default function sitemap() {
  const baseUrl = "https://mcchzb.vercel.app";
  return NAV__ITEMS.map((ITEM) => {
    // check if item is dropdown
    if (ITEM.isDropDown) {
      return ITEM.dropDownItems.map((item) => {
        return {
          url: `${baseUrl}${item.path}`,
          lastModified: new Date(),
          changeFrequency: "yearly",
          priority: 0.9,
        };
      });
    }

    return {
      url: `${baseUrl}${ITEM.path}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    };
  }).flat(); // Flatten the nested arrays
}
