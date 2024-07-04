import { useEffect, useState } from "react";
import { HomeProps } from "./Home.props";
import HomeView from "./Home.view";
import { Delivery } from "../../../types/Delivery";

const delivery: Delivery = {
  _id: "487303",
  code: "288-234-123",
  compartment: "104",
  deliverer: {
    address:
      "Bluebits Office Metrotown, 4289 Kingsway, Burnaby, BC, Canada, V6B0C8",
    name: "Fedex",
  },
  imageUrls: [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
  ],
  time: "2023-10-17 17:05:54",
};

const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const props: HomeProps = {
    delivery,
    isLoading,
  };
  return <HomeView {...props} />;
};

export default Home;
