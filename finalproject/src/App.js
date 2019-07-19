import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Games from './pages/games'
import Home from './pages/home'
// import Navbar from './components/navbar'
// import Footer from './components/footer'
// import Wrapper from './components/wrapper'

function App () {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/games' component={Games} />
      </Router>
    </div>
  )
}

export default App

// class App extends React.Component {
// 	render () {
// 	  return (
// 		<Router>
// 		  <div>
// 			<Navbar />
// 			<Container>
// 			  <Route exact path='/' component={Home} />
// 			  <Route exact path='/homePage' component={Home} />
// 			  {/* <Route exact path='/userHomePage' component={Games} /> */}
// 			</Container>
// 			<Footer />
// 		  </div>
// 		</Router>
// 	  )
// 	}
//   }
