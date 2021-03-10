import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Form, FormControl, Button, ButtonGroup } from "react-bootstrap";
import "../../styles/home.scss";
import "../../styles/index.scss";
import { IconBox } from "../component/iconbox.jsx";
import { CardBox } from "../component/cardBox.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className="background"
			style={{
				backgroundImage: `url("http://localhost:3000/backGround.png")`
			}}>
			<Container className="mt-3">
				<div className="mt-5">
					<h1 className="text-left text-white">
						Contrata en línea <br />a los mejores freelancers
					</h1>
					<Form inline>
						<FormControl
							type="text"
							placeholder="Search"
							className="mr-sm-2 mt-3"
							style={{ borderRadius: "2rem", height: "39px", width: "521px" }}
						/>
						<i className="fas fa-search" />
					</Form>

					<Button className="btn-outline-light mr-4 mt-3 px-5">Buscar una freelancer</Button>
					<Button className="btn-secondary mt-3 px-5">Soy una freelancer</Button>
				</div>
				<IconBox />
				<CardBox />
				<CardBox />
				<CardBox />
			</Container>
		</div>
	);
};
