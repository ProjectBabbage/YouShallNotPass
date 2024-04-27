import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import reactLogo from "@/assets/images/react.svg";
import { HostInput } from "@/components/common/HostInput";
import { ModelSelect } from "@/components/common/ModelSelect";
import { ConversationDisplay } from "@/components/common/ConversationDisplay";
import { MessageInput } from "@/components/common/MessageInput";
import { text } from "stream/consumers";

export interface MainProps extends PropsWithStyles {}

export const Main = () => {
  const handleHostnameChange = () => console.log("hostname changed");
  const handleModelChange = () => console.log("model changed!");
  const handleMessageSubmit = () => console.log("submitted messages");

  const messages = [
    { sender: "slfjk", text: "ls" },
    { sender: "slfjk", text: "ls" },
  ];
  return (
    <MainRoot>
      <HostInput onChange={handleHostnameChange} />
      <ModelSelect onChange={handleModelChange} />
      <ConversationDisplay messages={messages} />
      <MessageInput onSubmit={handleMessageSubmit} />
    </MainRoot>
  );
};

/* ------------- Styled components ------------- */
const MainRoot = styled.div`
  display: flex;
  justify-content: space-around;
`;
