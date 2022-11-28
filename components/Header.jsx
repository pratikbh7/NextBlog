function Header(props)
{
	return(
		<header>
			<div className={props.styles.nav_container}>
				<ul className={props.styles.nav_bar}>
					<li>HOME</li>
					<li>COMBAT GUIDES</li>
					<li>LORE DIVE</li>
					<li>SOMETHING</li>
				</ul>
			</div>
		</header>
		)
}
function Highlight(props)
{
	return(
		<div className={props.styles.highlight_contain}>
			<div className={props.styles.img_contain}>
				<img src={props.img_src}/>
			</div>
			<div className={props.styles.highlight_desc}>
				<p>God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series. It is the ninth installment in the series, the ninth chronologically, and the sequel to 2018's God of War. Loosely based on Norse mythology, the game is set in ancient Scandinavia and features series protagonist Kratos and his teenage son Atreus. Concluding the Norse era of the series, the game covers Ragnarök, the eschatological event which is central to Norse mythology and was foretold to happen in the previous game after Kratos killed the Aesir god Baldur.</p>
				<div className={props.styles.highlight_ratings}>
					<div>
						<p>COMBAT</p>
					</div>
					<div>
						<p>STORYLINE</p>
					</div>
					<div>
						<p>GAME MECHANICS</p>
					</div>
					<div>
						<p>DESIGN</p>
					</div>
				</div>
			</div>
		</div>
		)
}
export {Header,Highlight};