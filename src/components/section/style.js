import styled from 'styled-components'

const MainStyle = styled.div`
	width:100%;
	height:100vh;
	background-image:url("main.png");
	background-repeat:no-repeat;
	background-position:center;
	background-size:900px
`;

const Me = styled.p`
	font-size: 2rem;
	font-weight: bold;
	position: absolute;
	left:39%;
	top:40%;
	transform: translate(-50%, -50%);
	text-align:center;
`;

const AboutStyle = styled.div`
	width:100%;
	height:100vh;
	position:relative;
	top:100px;
`

const ProjectStyle = styled.div`
	width:100%;
	height:100vh;
	position:relative;
	top:100px;
`

const ContactStyle = styled.div`
	width:100%;
	height:50vh;
	position:relative;
	top:80px;
`




export { Me, MainStyle, AboutStyle, ProjectStyle, ContactStyle };