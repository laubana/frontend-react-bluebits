import { HomeProps } from "./Home.props";
import {
  AdWrapper,
  Container,
  DetailBody,
  DeliverInfoWrapper,
  DetailHeader,
  DetailWrapper,
  DeliverImage,
  NavigatorWrapper,
  TitleWrapper,
  Wrapper,
  DetailFooter,
  DetailFooterContent,
  CardWrapper,
} from "./Home.style";
import { ChevronLeft, Copy, Create, Unit } from "../../../components/SVG";
import Ad from "../../../components/Ad";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Divider from "../../../components/Divider";
import Label from "../../../components/Label";
import StatusBar from "../../../components/StatusBar";
import Text from "../../../components/Text";

const HomeView = (props: HomeProps) => {
  const {} = props;

  return (
    <Container>
      <Wrapper>
        <StatusBar />
        <NavigatorWrapper>
          <ChevronLeft style={{ cursor: "pointer" }} />
        </NavigatorWrapper>
        <TitleWrapper>
          <Text variant="titleLg">Delivery# 487303</Text>
          <Label status="pending" />
        </TitleWrapper>
        <AdWrapper>
          <Ad />
        </AdWrapper>
        <Divider />
        <DetailWrapper>
          <DetailHeader>
            <Text variant="titleMd">Delivery Details</Text>
            <Text coloring="grey">Delivery time: 2023-10-17 17:05:54</Text>
          </DetailHeader>
          <DetailBody>
            <DeliverImage src="/fedex.png" />
            <DeliverInfoWrapper>
              <Text variant="titleSm" style={{ fontWeight: 500 }}>
                Delivery from Fedex
              </Text>
              <Text>Bluebits Office Metrotown</Text>
              <Text>4289 Kingsway, Burnaby, BC, Canada, V6B0C8</Text>
            </DeliverInfoWrapper>
          </DetailBody>
        </DetailWrapper>
        <DetailFooter>
          <DetailFooterContent>
            <Text variant="titleSm">Pick-up Code</Text>
            <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
              <Text
                coloring="blue"
                style={{ fontSize: "20px", fontWeight: 700 }}
              >
                288-234-123
              </Text>
              <Copy style={{ cursor: "pointer" }} />
            </div>
          </DetailFooterContent>
          <DetailFooterContent>
            <Text variant="titleSm">Compartment</Text>
            <Text coloring="blue" style={{ fontSize: "20px", fontWeight: 700 }}>
              104
            </Text>
          </DetailFooterContent>
        </DetailFooter>
        <Button block text="Unlock Compartment" />
        <Divider />
        <CardWrapper>
          <Card
            content="Register your unit with BlueBox to enable delivery by unit feature."
            icon={<Unit />}
            title="Residential Unit Registration"
          />
          <Card
            content="Submit a support ticket form to us."
            icon={<Create />}
            title="Create a support ticket"
          />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default HomeView;
