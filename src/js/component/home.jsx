import React from "react";
import { Cardnumber } from "./Cardnumber.jsx";
import PropTypes from 'prop-types';

const Home = (props) => {
	return(

		<div className="text-center row bg-dark">

			<div className="col-2">
				<div className="card">
					<div className="card-body">
						<img src='https://cdn-icons-png.flaticon.com/512/109/109613.png' height='35px'></img>
					</div>
				</div>
			</div>

			<div className="col-2">
				<Cardnumber unit={Math.floor(props.seconds/10000)%10}/>
			</div>

			<div className="col-2">
				<Cardnumber unit={Math.floor(props.seconds/1000)%10}/>
			</div>

			<div className="col-2">
				<Cardnumber unit={Math.floor(props.seconds/100)%10}/>
			</div>

			<div className="col-2">
				<Cardnumber unit={Math.floor(props.seconds/10)%10}/>
			</div>

			<div className="col-2">
				<Cardnumber unit={Math.floor(props.seconds/1)%10}/>
			</div>
		</div>
	);
};

Home.PropTypes = {
	seconds: PropTypes.number,
}

export default Home;