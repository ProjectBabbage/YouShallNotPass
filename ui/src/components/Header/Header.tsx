import styled from "@emotion/styled";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { PropsWithStyles } from "@/types/styles";
import { theme } from "@/styles/theme";
import { HostInput } from "./HostInput";
import { LevelSelect } from "./LevelSelect";
import { getClasses } from "@/utils/class";
import { useAppContext } from "@/contexts/app.context";

export interface HeaderProps extends PropsWithStyles {}

export const Header = () => {
  const handleHostnameChange = () => console.log("hostname changed");

  return (
    <HeaderRoot>
      <Container>
        <img alt="gandalf logo" src="/src/assets/images/gandalf.jpg" />
      </Container>
      <TextContainer>
        <Text className={getClasses("title-text")} type="h1">
          Thou Shall Not Pass!
        </Text>
        <Text className={getClasses("subtitle-text")} type="h2">
          You are the balrog, and you shall pass!
        </Text>
      </TextContainer>
      <div className={getClasses("sub-cont")}>
        {/* <HostInput onChange={handleHostnameChange} /> */}
        <LevelSelect />
      </div>
    </HeaderRoot>
  );
};

/* ------------- Styled components ------------- */
const HeaderRoot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    display: flex;
    font-size: 35px;
    color: grey;
    margin: 25px 0px;
  }

  .title-text {
    font-size: 4vw;
  }

  .subtitle-text {
    font-size: 3vw;
  }

  .sub-cont {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  height: 300px;

  img {
    max-height: 100%;
    max-width: 100%;
    &:hover {
      animation-name: bounce;
      animation-duration: 2s;
    }
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
