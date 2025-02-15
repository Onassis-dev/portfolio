import ui from "./ui";

export const t = (locale: string, text: keyof typeof ui) => {
  return ui[text][locale];
};
