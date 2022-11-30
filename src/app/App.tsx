import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from '../assets/data.json';
import '../style/App.css';
import Footer from './Footer';
import Link from './Link';
import Menu from './Menu';
import Module from './Module';


function App() {
	const defaultModule = data.modules[0]
	return (
		<BrowserRouter>
			<div className="App">
				<div className="App-body">
					<Menu modules={data.modules.map(m => m.name)}></Menu>
					<div className='content'>
						<Routes>
							{
								data.modules.map(
									(module, i) =>
										<Route path={'/' + module.name} element={
											<Module name={module.name} desc={module.desc} sections={module.sections}></Module>
										} key={i}>
										</Route>
								)
							}

							<Route path="/" element={
								<Module name={defaultModule.name} desc={defaultModule.desc} sections={defaultModule.sections}></Module>
							}></Route>

							<Route path="*" element={<div>MODULE NOT FOUND</div>}></Route>

						</Routes>
					</div>
					<Footer>
						<Link url="https://github.com/gldanoob">@gldanoob</Link>
					</Footer>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
