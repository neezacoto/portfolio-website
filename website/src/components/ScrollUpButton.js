import { useState } from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import './styles/ScrollUpButton.scss';

function ScrollUpButton () {

	const [visible, setVisible] = useState(false);
	const [firstScroll, setFirstScroll] = useState(false);

	const onScroll = () => window.scrollY > 100 && firstScroll ? setVisible(true) : setVisible(false);
	const allowScroll = () => {if (window.scrollY < 200) {setFirstScroll(true);}};
	const scrollUp = () => window.scrollTo({ top:0, left:0, behavior: 'smooth'});

	document.addEventListener('scroll', onScroll);
	document.addEventListener('scroll', allowScroll);

	return (
		<div id="scroll-up" onClick={scrollUp}>
			<MdDoubleArrow class= {visible? '' : 'hidden'}/>
		</div>
	);
}

export default ScrollUpButton;