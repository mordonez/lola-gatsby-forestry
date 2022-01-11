import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import useMenu from "@hooks/useMenu";

const Footer = () => {
  const { navigation } = useMenu()
  const result = navigation?.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / Math.ceil(navigation.length / 2))

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])

    return (
      <footer className="footer has-background-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "14em"}}
          />
        </div>
        <div className="content has-text-centered has-background-white-ter">
          <div className="container has-background-white-ter">

            <div style={{ maxWidth: "100vw" }} className="columns">
              {
                result.map((columns, key) => {
                  return (<div key={key} className="column is-4">
                    <section className="menu">
                      <ul className="menu-list">
                        {columns.map((link, id) => (
                          <li key={id} className="navbar-item" >
                            <Link className="navbar-item" to={link.url}>{link.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>)

                })
              }
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
