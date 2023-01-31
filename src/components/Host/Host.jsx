export default function Host(props) {
	return (
		<aside className="host-comp">
			<div className="host-name">{props.hostName}</div>
			<div className="hostPicture">
				<img src={props.hostPic} alt={props.name} />
			</div>
		</aside>
	);
}
