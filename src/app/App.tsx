import { useEffect, useState } from 'react';
import data from '../assets/data.json';
import '../style/App.css';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';

function App() {

	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const i = setInterval(t => {
			setProgress(progress => (progress + 1) % 100)
		}, 16)

		return () => { clearInterval(i) }

	}, [])

	data.sections[0].tasks[0].score = progress;
	data.sections[1].tasks[2].score = (progress / 5) | 0;

	return (
		<div className="App">
			<div className="App-body">
				<div className='content'>
					<Header desc={data.desc}>
						{data.header}
					</Header>
					{
						data.sections.map(
							(section, i) => <Section name={section.name} desc={section.desc} tasks={section.tasks} key={i}/>
						)
					}
				</div>
				<Footer>
					@gldanoob
				</Footer>
			</div>
		</div>
	);
}

export default App;
