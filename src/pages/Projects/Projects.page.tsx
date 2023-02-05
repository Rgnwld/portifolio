import React from "react";
import Button from "../../components/Button/Button";
import {
  Background,
  Description,
  IMGPLACEHOLDER,
  Section,
  SideSection,
  ToolItem,
  ToolsSection,
} from "./Projects.styles";
import PlaceHolderImg from "../../imgs/moon.png";

export default function Projects() {
  return (
    <Background>
      <Section>
        <SideSection>
          <IMGPLACEHOLDER />
        </SideSection>
        <SideSection>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
            massa, rutrum eget congue a, volutpat quis ante. Aenean eu arcu
            ornare neque dignissim euismod nec id magna. Aenean convallis
            maximus mauris, eu porta magna tempor porttitor. Suspendisse ac
            purus eu mauris pretium hendrerit. Quisque luctus augue vitae
            ullamcorper maximus.
          </Description>
          <Description>
            Nunc laoreet augue consequat dui fermentum euismod et sit amet arcu.
            Aenean posuere consequat felis, vel pulvinar sem efficitur non.
            Vestibulum orci orci, suscipit id sagittis eget, fermentum vitae
            dui. Nunc tristique placerat quam nec dapibus. Duis ac felis
            tincidunt, suscipit odio at, semper velit.
          </Description>
          <ToolsSection>
            <ToolItem>
              <img src={PlaceHolderImg} alt="placeholder" />
              React
            </ToolItem>
            <ToolItem>
              <img src={PlaceHolderImg} alt="placeholder" />
              Typescript
            </ToolItem>
            <ToolItem>
              <img src={PlaceHolderImg} alt="placeholder" />
              Styled-Components
            </ToolItem>
          </ToolsSection>
          <Button onClick={() => {}}>Acesse aqui</Button>
        </SideSection>
      </Section>
    </Background>
  );
}
