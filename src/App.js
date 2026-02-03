import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/GlobalStyles";
import Footer from "./components/Footer";
import Banner from "./components/Body/Banner";
import Form from "./components/Body/Form";


function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle/>
			<Header/>
			<div className="App">
				<Routes>
					<Route 
						path="/" 
						element={<Banner/>}/>
					<Route 
						path="/guides"
						element={<Form/>}/>
					<Route path="/guides/:idGuide"/>
					<Route path="/status"/>
					<Route path="/list_guides"/>
				</Routes>
			</div>
			<Footer/>
		</ThemeProvider>
	);
}

export default App;
