import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout titel='Error!!!'>
    {statusCode
      ? `Could not load your data: Status Code ${statusCode}`
      : `Couldn't get get that page, sorry!!`}
  </Layout>
);
