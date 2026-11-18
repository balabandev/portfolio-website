export type StackItem = { name: string; note?: string };

export type StackGroup = {
  key: "frontend" | "backend" | "databases" | "stacks";
  items: StackItem[];
};

export const stackGroups: StackGroup[] = [
  {
    key: "frontend",
    items: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
      { name: "Alpine.js" },
      { name: "Vite" },
      { name: "Next.js" },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Node.js" },
      { name: "Express" },
    ],
  },
  {
    key: "databases",
    items: [{ name: "MySQL" }, { name: "MongoDB" }],
  },
  {
    key: "stacks",
    items: [
      { name: "MERN", note: "MongoDB · Express · React · Node.js" },
      { name: "TALL", note: "Tailwind · Alpine.js · Laravel · Livewire" },
    ],
  },
];