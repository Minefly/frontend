const Card = (props) => {
    const { children, title } = props;

    return (
        <>
            <div {...props} className={"card " + props.className}>
                <h2 className="text-xl font-semibold mb-1">{title}</h2>
                <p>{children}</p>
            </div>
        </>
    );
};

export default Card;
