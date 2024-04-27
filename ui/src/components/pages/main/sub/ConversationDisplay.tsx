// Props: messages (array of message objects)

import { PropsWithStyles } from "@/types/styles";
import { getClasses } from "@/utils/class";
import styled from "@emotion/styled";

// Return: Div that maps over messages to display each one
export interface ConversationDisplayProps extends PropsWithStyles {
  messages: { sender: string; text: string }[];
}

export const ConversationDisplay = ({ messages }: ConversationDisplayProps) => {
  return (
    <StyledConversation className={getClasses("conversation-display")}>
      {messages.map((msg, index) => (
        <div key={index}>
          {msg.sender}: {msg.text}
        </div>
      ))}
    </StyledConversation>
  );
};

/* ------------- Styled components ------------- */
const StyledConversation = styled.div``;
