import styled from "@emotion/styled";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { PropsWithStyles } from "@/types/styles";
import { theme } from "@/styles/theme";
import { HostInput } from "./HostInput";
import { ModelSelect } from "./ModelSelect";

export interface HeaderProps extends PropsWithStyles {}

export const Header = () => {
  const handleHostnameChange = () => console.log("hostname changed");
  const handleModelChange = () => console.log("model changed!");

  return (
    <HeaderRoot>
      <Text type="M">You Shall Not Pass (PB#5)</Text>
      <HostInput onChange={handleHostnameChange} />
      <ModelSelect onChange={handleModelChange} />
    </HeaderRoot>
  );
};

/* ------------- Styled components ------------- */
const HeaderRoot = styled.div``;
