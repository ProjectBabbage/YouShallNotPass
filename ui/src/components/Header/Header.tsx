import styled from "@emotion/styled";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { PropsWithStyles } from "@/types/styles";
import { theme } from "@/styles/theme";
import { HostInput } from "./HostInput";
import { LevelSelect } from "./LevelSelect";
import { getClasses } from "@/utils/class";

export interface HeaderProps extends PropsWithStyles {}

export const Header = () => {
  const handleHostnameChange = () => console.log("hostname changed");
  const handleModelChange = () => console.log("model changed!");

  return (
    <HeaderRoot>
      <Text type="M">You Shall Not Pass (PB#5)</Text>
      <div className={getClasses("sub-cont")}>
        <HostInput onChange={handleHostnameChange} />
        <LevelSelect onChange={handleModelChange} />
      </div>
    </HeaderRoot>
  );
};

/* ------------- Styled components ------------- */
const HeaderRoot = styled.div`
  display: flex;
  justify-content: space-around;
  span {
    display: flex;
    font-size: 35px;
    color: #3d3dff;
    margin: 25px 0px;
  }
  .sub-cont {
    display: flex;
    flex-direction: column;
  }
`;
