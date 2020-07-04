import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import './index.css';

HighchartsMore(Highcharts)

interface IProps {
	options: {
		chart?: {
			type?: string
		},
		series: Array<any>
	};
}

interface IState {
	JSON: object;
	type?: string;
}

export default class ReactHighcharts extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			JSON: this.props.options,
			type: this.props.options.chart && this.props.options.chart.type || ''
		};
	}

	render() {
		return (
			<div className="app">
				<div className="app-highcharts">
					<HighchartsReact
						highcharts={Highcharts}
						options={this.props.options}
					/>
				</div>
				<div className="app-title">
					Received {this.state.type} JSON:
				</div>
				<textarea className="app-data">
					{JSON.stringify(this.state, null, 2)}
				</textarea>
			</div>
		);
	}
}
