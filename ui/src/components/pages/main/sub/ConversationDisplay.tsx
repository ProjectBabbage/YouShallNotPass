import { useAppContext } from "@/contexts/app.context";
import { PropsWithStyles } from "@/types/styles";
import { getClasses } from "@/utils/class";
import styled from "@emotion/styled";
import loaderSvg from "@/assets/images/loader.svg";

export const ConversationDisplay = () => {
  const { messages } = useAppContext();
  return (
    <StyledConversation className={getClasses("conversation-display")}>
      {messages.map((msg, index) => (
        <StyledMessage key={index} isPlayer={index % 2 == 0}>
          {msg === "" ? <img src={loaderSvg} /> : msg}
        </StyledMessage>
      ))}
    </StyledConversation>
  );
};

/* ------------- Styled components ------------- */
const StyledConversation = styled.div``;
const StyledMessage = styled.div<{ isPlayer: boolean }>`
  padding: 10px;
  background-color: ${({ isPlayer, theme }) =>
    isPlayer ? "#7A96B8" : "#CAD5E2"}; // Use theme
`;
