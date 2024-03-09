import { Banner } from "../components/Banner/Banner";
import { Layout } from "../components/Layout/Layout";
import { Recommend } from "../components/Recommend/Recommend";

export const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <Recommend />
    </Layout>
  );
};
