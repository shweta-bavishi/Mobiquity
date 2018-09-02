import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Row,
	ListGroup,
	ListGroupItem,
	Table
} from "reactstrap";
import { get_list, get_winner_list } from "../../actions/index.js";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: 0
		};
	}

	componentDidMount() {
		this.props.get_list();
		this.props.get_winner_list(2005);
	}
	toggle(tab, season) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
		this.props.get_winner_list(season);
	}

	render() {
		let Seasons = [];
		let Winners = [];
		if (this.props.champ.data != null) {
			Seasons = this.props.champ.data.MRData.SeasonTable.Seasons;
		}
		if (this.props.winners.data != null) {
			Winners = this.props.winners.data.MRData.RaceTable.Races;
		}
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
												<strong>F1 world champions</strong>
											</CardHeader>
											<CardBody>
												<Row>
													<Col xs="4">
														<ListGroup id="list-tab" role="tablist">
															{Seasons.map((list, index) => {
																return (
																	<ListGroupItem
																		key={list.season.toString()}
																		onClick={() =>
																			this.toggle(index, list.season)
																		}
																		action
																		active={this.state.activeTab === index}
																	>
																		{list.season}
																	</ListGroupItem>
																);
															})}
														</ListGroup>
													</Col>
													<Col xs="8">
														<CardBody>
															<Table responsive hover>
																<thead>
																	<tr>
																		<th scope="col">Race Name</th>
																		<th scope="col">Round</th>
																		<th scope="col">Driver</th>
																		<th scope="col">Time (ms)</th>
																	</tr>
																</thead>
																<tbody>
																	{Winners.map(winners => {
																		return (
																			<tr key={winners.Circuit.circuitId}>
																				<td>{winners.raceName} </td>
																				<td>{winners.round}</td>
																				<td>
																					{winners.Results[0].Driver.givenName +
                                            " " +
                                            winners.Results[0].Driver
                                            	.familyName}
																				</td>
																				<td>
																					{" "}
																					{winners.Results[0].Time.millis}
																				</td>
																			</tr>
																		);
																	})}
																</tbody>
															</Table>
														</CardBody>
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

const mapStateToProps = state => {
	return {
		champ: state.champ.champ,
		winners: state.champ.races
	};
};

export default connect(
	mapStateToProps,
	{ get_list, get_winner_list }
)(Dashboard);
