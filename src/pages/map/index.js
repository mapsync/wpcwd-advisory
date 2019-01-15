import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.search);
    this.state = { url: "https://geosyncgo.com/public/wmu-advisory-app" + props.location.search };
  }

  render() {
    return (
      <Layout>
        <iframe title="map" src={this.state.url}></iframe>
      </Layout>
    );
  }
}
