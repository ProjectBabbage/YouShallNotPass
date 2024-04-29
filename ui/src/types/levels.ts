export type Level = {
  id: number;
  name: string;
  description: string;
  models: [
    {
      id: number;
      name: string;
      system_prompt: string;
    },
  ];
};
