export type Level = {
  id: number;
  name: string;
  models: [
    {
      id: number;
      name: string;
      system_prompt: string;
    },
  ];
  description: string;
};
