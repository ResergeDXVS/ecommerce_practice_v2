import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/GlobalStyles";
import Footer from "./components/Footer";
import Banner from "./components/Body/Banner";
import Form from "./components/Body/Form";
import StatusView from "./components/Body/StatusView";
import GuideStructure from "./components/Body/Guides";
import HistoricalView from "./components/Body/HistoricalView";


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
					<Route 
						path="/guides/:idGuide"
						element={<HistoricalView/>}/>
					<Route 
						path="/status"
						element={<StatusView/>}/>
					<Route 
						path="/list_guides"
						element={<GuideStructure list={[]}/>}/>
				</Routes>
			</div>
			<Footer/>
		</ThemeProvider>
	);
}

export default App;
