import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import reactLogo from "@/assets/images/react.svg";
import { ConversationDisplay } from "@/components/pages/main/sub/ConversationDisplay";
import { MessageInput } from "@/components/pages/main/sub/MessageInput";
import { text } from "stream/consumers";

export interface MainProps extends PropsWithStyles {}

export const Main = () => {
  const handleMessageSubmit = () => console.log("submitted messages");

  const messages = [
    { sender: "slfjk", text: "ls" },
    { sender: "slfjk", text: "ls" },
  ];

  return (
    <>
      <ConversationDisplay messages={messages} />
      <MessageInput onSubmit={handleMessageSubmit} />
    </>
  );
};

/* ------------- Styled components ------------- */
