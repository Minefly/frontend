const Card = (props) => {
	const { children, title } = props;

	return (
		<>
			<div
				{...props}
				className={
					"bg-gray-100 dark:bg-gray-850 shadow-lg px-8 pt-10 pb-12 rounded-xl " +
					props.className
				}
			>
				<h2 className="text-lg font-semibold mb-1">{title}</h2>
				<p>{children}</p>
			</div>
		</>
	);
};

export default Card;
