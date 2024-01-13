import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  edutimeline,
  skills,
} from "../../content_option";
import { CgCPlusPlus,CgCircleci } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiBootstrap,
  DiDocker,
  DiEclipse,
  DiHtml5,
  DiMysql,
  DiPostgresql,
  DiRuby,
  DiSass,
  DiSqllite,
  DiVisualstudio
} from "react-icons/di";
import { TbBrandAndroid } from "react-icons/tb";
import { FaSalesforce } from "react-icons/fa";
import { SiRedux,SiFlask,SiTensorflow,SiRubyonrails,SiScikitlearn,SiJest,SiJira,SiJupyter, SiApachekafka,SiJenkins,SiApachesolr} from "react-icons/si";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
            {dataabout.aboutme.map((point, i) => {
                  return (
                    <p>{point}</p>
                  );
                })}
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {edutimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
          <Row>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiJava size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <CgCPlusPlus  size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiJavascript1 size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiPython  size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiRuby  size={60}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiReact  size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <TbBrandAndroid size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiAngularSimple size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiNodejs size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiHtml5 size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiSass  size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiBootstrap size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiRedux size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiFlask size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiTensorflow size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiRubyonrails size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiScikitlearn size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiJest size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiMongodb size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiMysql size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiPostgresql size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiSqllite  size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiGit size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiDocker size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <CgCircleci  size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <FaSalesforce size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiJira size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiJupyter size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiApachekafka size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiJenkins size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <SiApachesolr size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiEclipse size={70}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons mb-4">
            <DiVisualstudio  size={70}/>
          </Col>
          </Row>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Strength and Technology Interests</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Resume</h3>
          </Col>
          <Col lg="7 p-4">
          <a href="https://rashmibhaskar.github.io/Rashmi_Bhaskar.pdf" className="text_2" target="_blank" rel="noreferrer">
                    <div id="button_p" className="ac_btn btn ">
                      View
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
          </Col>
        </Row> 
      </Container>
    </HelmetProvider>
  );
};
