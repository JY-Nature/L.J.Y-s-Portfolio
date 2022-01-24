import React from 'react';
import './navStyle.css'
import styled from 'styled-components'

const Nav = () => {
	const StyledLink = styled.a`
		text-decoration:none;
		color:black;
		&:hover{
			color:orange;
		}
	`
	return (
		<div className='header'>
			<div className='nav'>

				<h1 className='name' style={{ color:'black' }}>L.J.Y's</h1>

				<ul className='nav-ul'>
					<li className='nav-li'>
						<StyledLink href='#home'>Home</StyledLink>
					</li>
					<li className='nav-li'>
						<StyledLink href='#about' >About</StyledLink>
					</li>
					<li className='nav-li'>
						<StyledLink href='#project' >Project</StyledLink>
					</li>
					<li className='nav-li'>
						<StyledLink href='#contact' >Contact</StyledLink>
					</li>
				</ul>
			</div>
			
		</div>
	);
};

export default Nav;