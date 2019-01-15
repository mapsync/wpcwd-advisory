import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <iframe title="map" src="https://geosyncgo.com/public/wmu-advisory-app?lat=37.984826239321926&lon=-84.1120543121688&zoom=15&layer=3e9c8cd0-0f78-11e9-9f51-a900fee08ee2&id=f1752b20-ec06-4e73-83b3-53b1dd049fac"></iframe>
      </Layout>
    );
  }
}
