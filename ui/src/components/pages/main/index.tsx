import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import reactLogo from "@/assets/images/react.svg";
import { ConversationDisplay } from "@/components/pages/main/sub/ConversationDisplay";
import { MessageInput } from "@/components/pages/main/sub/MessageInput";
import { text } from "stream/consumers";
import { GuessPassword } from "./sub/GuessPassword";

export interface MainProps extends PropsWithStyles {}

export const Main = () => {
  return (
    <>
      <GuessPassword />
      <ConversationDisplay />
      <MessageInput />
    </>
  );
};

/* ------------- Styled components ------------- */
