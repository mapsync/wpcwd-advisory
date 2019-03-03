import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
        <h1>Contact</h1>
        <form
          name="notification"
          method="post"
          action="/notification/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={"account"}>account</label>
            <div className="control">
              <input className="input" type={"text"} name={"account"} onChange={this.handleChange} id={"account"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"title"}>title</label>
            <div className="control">
              <input className="input" type={"text"} name={"title"} onChange={this.handleChange} id={"title"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"priority"}>priority</label>
            <div className="control">
              <input className="input" type={"text"} name={"priority"} onChange={this.handleChange} id={"priority"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"sound"}>sound</label>
            <div className="control">
              <input className="input" type={"text"} name={"sound"} onChange={this.handleChange} id={"sound"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"message"}>message</label>
            <div className="control">
              <input className="input" type={"text"} name={"message"} onChange={this.handleChange} id={"message"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"link"}>link</label>
            <div className="control">
              <input className="input" type={"text"} name={"link"} onChange={this.handleChange} id={"link"} required={true} />
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Send</button>
          </div>
        </form>
        </div>
        </div>
        </section>
      </Layout>
    );
  }
}