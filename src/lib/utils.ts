import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseMarkdownToH2(text: string): string {
  return text.split('\n').map(line => {
    if (line.startsWith('## ')) {
      return `<h2>${line.slice(3)}</h2>`;
    }
    return line;
  }).join('\n');
}

export function replaceNameWithStrongTag(text: string, name: string): string {
  const replacedText = text.replace(/{name}/g, `<strong>${name}</strong>`);
  return replacedText;
}

