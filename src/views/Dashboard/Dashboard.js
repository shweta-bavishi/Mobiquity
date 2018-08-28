import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  TabContent,
  TabPane
} from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify" />
                        <strong>F1</strong> <small>world champions</small>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              <ListGroupItem
                                onClick={() => this.toggle(0)}
                                action
                                active={this.state.activeTab === 0}
                              >
                                Home
                              </ListGroupItem>
                              <ListGroupItem
                                onClick={() => this.toggle(1)}
                                action
                                active={this.state.activeTab === 1}
                              >
                                Profile
                              </ListGroupItem>
                              <ListGroupItem
                                onClick={() => this.toggle(2)}
                                action
                                active={this.state.activeTab === 2}
                              >
                                Messages
                              </ListGroupItem>
                              <ListGroupItem
                                onClick={() => this.toggle(3)}
                                action
                                active={this.state.activeTab === 3}
                              >
                                Settings
                              </ListGroupItem>
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              <TabPane tabId={0}>
                                <p>
                                  Velit aute mollit ipsum ad dolor consectetur
                                  nulla officia culpa adipisicing exercitation
                                  fugiat tempor. Voluptate deserunt sit sunt
                                  nisi aliqua fugiat proident ea ut. Mollit
                                  voluptate reprehenderit occaecat nisi ad non
                                  minim tempor sunt voluptate consectetur
                                  exercitation id ut nulla. Ea et fugiat aliquip
                                  nostrud sunt incididunt consectetur culpa
                                  aliquip eiusmod dolor. Anim ad Lorem aliqua in
                                  cupidatat nisi enim eu nostrud do aliquip
                                  veniam minim.
                                </p>
                              </TabPane>
                              <TabPane tabId={1}>
                                <p>
                                  Cupidatat quis ad sint excepteur laborum in
                                  esse qui. Et excepteur consectetur ex nisi eu
                                  do cillum ad laborum. Mollit et eu officia
                                  dolore sunt Lorem culpa qui commodo velit ex
                                  amet id ex. Officia anim incididunt laboris
                                  deserunt anim aute dolor incididunt veniam
                                  aute dolore do exercitation. Dolor nisi culpa
                                  ex ad irure in elit eu dolore. Ad laboris
                                  ipsum reprehenderit irure non commodo enim
                                  culpa commodo veniam incididunt veniam ad.
                                </p>
                              </TabPane>
                              <TabPane tabId={2}>
                                <p>
                                  Ut ut do pariatur aliquip aliqua aliquip
                                  exercitation do nostrud commodo reprehenderit
                                  aute ipsum voluptate. Irure Lorem et laboris
                                  nostrud amet cupidatat cupidatat anim do ut
                                  velit mollit consequat enim tempor.
                                  Consectetur est minim nostrud nostrud
                                  consectetur irure labore voluptate irure.
                                  Ipsum id Lorem sit sint voluptate est pariatur
                                  eu ad cupidatat et deserunt culpa sit eiusmod
                                  deserunt. Consectetur et fugiat anim do
                                  eiusmod aliquip nulla laborum elit adipisicing
                                  pariatur cillum.
                                </p>
                              </TabPane>
                              <TabPane tabId={3}>
                                <p>
                                  Irure enim occaecat labore sit qui aliquip
                                  reprehenderit amet velit. Deserunt ullamco ex
                                  elit nostrud ut dolore nisi officia magna sit
                                  occaecat laboris sunt dolor. Nisi eu minim
                                  cillum occaecat aute est cupidatat aliqua
                                  labore aute occaecat ea aliquip sunt amet.
                                  Aute mollit dolor ut exercitation irure
                                  commodo non amet consectetur quis amet culpa.
                                  Quis ullamco nisi amet qui aute irure eu.
                                  Magna labore dolor quis ex labore id nostrud
                                  deserunt dolor eiusmod eu pariatur culpa
                                  mollit in irure.
                                </p>
                              </TabPane>
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
