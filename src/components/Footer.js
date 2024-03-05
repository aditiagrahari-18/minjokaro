import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="main-footer">
					<strong>
						Copyright © 2022-2026{"{"}" "{"}"}
						<a href="https://adminlte.io">Minzo</a>.
					</strong>
					All rights reserved.
					<div className="float-right d-none d-sm-inline-block">
						<b>Version</b> 3.2.0
					</div>
				</footer>
			</div>
		);
	}
}
