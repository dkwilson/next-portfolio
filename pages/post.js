import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt velit
      doloribus aut ea cumque recusandae eos id eveniet corrupti, officiis
      molestias unde aspernatur!
    </p>
  </Layout>
);

export default withRouter(Post);
