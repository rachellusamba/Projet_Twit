export default function Image(props) {

    return (
        <img src={props.src} alt={props.alt} className={props.className} />
    );
};