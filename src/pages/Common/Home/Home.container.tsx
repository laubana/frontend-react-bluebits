import { HomeProps } from "./Home.props";
import HomeView from "./Home.view";

const Home = (): JSX.Element => {
  const props: HomeProps = {};
  return <HomeView {...props} />;
};

export default Home;
