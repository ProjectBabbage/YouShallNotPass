// Props: messages (array of message objects)

import { PropsWithStyles } from "@/types/styles";

// Return: Div that maps over messages to display each one
export interface ConversationDisplayProps extends PropsWithStyles {
  messages: { sender: string; text: string }[];
}

export const ConversationDisplay = ({ messages }: ConversationDisplayProps) => {
  return (
    <div className="conversation">
      {messages.map((msg, index) => (
        <div key={index}>
          {msg.sender}: {msg.text}
        </div>
      ))}
    </div>
  );
};
