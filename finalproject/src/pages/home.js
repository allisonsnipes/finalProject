import React from 'react';
import Footer from '../components/Footer/index';
import Jumbotron from '../components/Jumbotron/index';
import Navbar from '../components/Navbar/index';
// import Pictures from '../components/pictures'
import Wrapper from '../components/Wrapper/index';
// import createAccountModal from '../components/createAccountModal'
// import LoginModal from '../components/loginModal'
// import Form from '../components/form'
import Col from '../components/Col/index';
import Row from '../components/Row/index';
import Container from '../components/Container/index';

function Home() {
	return (
		<Container fluid>
			<Row>
				<Col size="md-12">
					<Navbar />
				</Col>
			</Row>

			<Row>
				<Col size="md-12">
					<Wrapper>
						<Jumbotron>
							<h1> Welcome to Game Meet</h1>
							<p>
								Please select the choice of either logging in or creating an acoount. After you have
								completed these actions you will be shown a listing of meetup groups for games in a
								specific area.
							</p>
						</Jumbotron>
					</Wrapper>
				</Col>
			</Row>

			<Row>
				<Col size="md-12">
					<Footer className="footer fixed-bottom text-white" />
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
