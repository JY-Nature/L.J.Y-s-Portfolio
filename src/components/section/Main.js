import React from 'react';
import { Me, MainStyle } from './style.js'
import ReactTypingEffect from 'react-typing-effect';


const Main = () => {

	return (
		<div>
			<MainStyle id='home' >
				<Me id='dynamic' className='lg-text'>
					<ReactTypingEffect 
					text={["신입 웹 개발자 이지연입니다~"]} 
					speed={100}
					eraseSpeed={100}
					eraseDelay={3000}
					style={{ color:'black' }}
					/>
				</Me>
			</MainStyle>
	</div>
	);
};

export default Main;