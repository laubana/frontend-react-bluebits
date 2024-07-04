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
  ButtonWrapper,
} from "./Home.style";
import { ChevronLeft, Copy, Create, Unit } from "../../../components/SVG";
import Ad from "../../../components/Ad";
import Button from "../../../components/Button";
// import Card from "../../../components/Card";
import Divider from "../../../components/Divider";
import Label from "../../../components/Label";
import StatusBar from "../../../components/StatusBar";
import Text from "../../../components/Text";
import { BeatLoader } from "react-spinners";

const HomeView = (props: HomeProps) => {
  const { delivery, isLoading } = props;

  return (
    <Container>
      <Wrapper>
        {!isLoading && delivery ? (
          <>
            <StatusBar />
            <NavigatorWrapper>
              <ChevronLeft style={{ cursor: "pointer" }} />
            </NavigatorWrapper>
            <TitleWrapper>
              <Text variant="titleLg">Delivery# {delivery._id}</Text>
              <Label status="pending" />
            </TitleWrapper>
            <AdWrapper>
              <Ad imageUrls={delivery.imageUrls} />
            </AdWrapper>
            <Divider />
            <DetailWrapper>
              <DetailHeader>
                <Text variant="titleMd">Delivery Details</Text>
                <Text coloring="grey">Delivery time: {delivery.time}</Text>
              </DetailHeader>
              <DetailBody>
                <DeliverImage src="/fedex.png" />
                <DeliverInfoWrapper>
                  <Text variant="titleSm" style={{ fontWeight: 500 }}>
                    Delivery from {delivery.deliverer.name}
                  </Text>
                  <Text>{delivery.deliverer.address}</Text>
                </DeliverInfoWrapper>
              </DetailBody>
            </DetailWrapper>
            <DetailFooter>
              <DetailFooterContent>
                <Text variant="titleSm">Pick-up Code</Text>
                <div
                  style={{ alignItems: "center", display: "flex", gap: "12px" }}
                >
                  <Text
                    coloring="blue"
                    style={{ fontSize: "20px", fontWeight: 700 }}
                  >
                    {delivery.code}
                  </Text>
                  <Copy style={{ cursor: "pointer" }} />
                </div>
              </DetailFooterContent>
              <DetailFooterContent>
                <Text variant="titleSm">Compartment</Text>
                <Text
                  coloring="blue"
                  style={{ fontSize: "20px", fontWeight: 700 }}
                >
                  {delivery.compartment}
                </Text>
              </DetailFooterContent>
            </DetailFooter>
            <Button block text="Unlock Compartment" />
            <Divider />
            <CardWrapper>
              <ButtonWrapper>
                <Button
                  leftComponent={<Unit />}
                  coloring="transparent"
                  text="Residential Unit Registration"
                />
                <Text coloring="grey" variant="body">
                  Register your unit with BlueBox to enable delivery by unit
                  feature.
                </Text>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  leftComponent={<Create />}
                  coloring="transparent"
                  text="Create a support ticket"
                />
                <Text coloring="grey" variant="body">
                  Submit a support ticket form to us.
                </Text>
              </ButtonWrapper>
              {/* <Card
            content="Register your unit with BlueBox to enable delivery by unit feature."
            icon={<Unit />}
            title="Residential Unit Registration"
          />
          <Card
            content="Submit a support ticket form to us."
            icon={<Create />}
            title="Create a support ticket"
          /> */}
            </CardWrapper>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "64px",
            }}
          >
            <BeatLoader color="#4D81E7" />
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default HomeView;
