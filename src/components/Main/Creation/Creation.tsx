import './Creation.css';

function Creation(props: {
    name: string,
    imgDesktop: string,
    imgMobile: string
}) {
    return (
        <div className='creation'>
            <img src={props.imgDesktop} alt={props.name} loading='lazy'></img>
            <img src={props.imgMobile} alt={props.name} loading='lazy'></img>
            <h1>{ props.name }</h1>
        </div>
    )
}

export default Creation;
