import './index.css';

const Slider = ({
    heroeName,
    universe,
    alterEgo,
    activity,
    friends,
    powers,
    description,
    image,
}) => {
    return (
        <>
        <div class="slider__main-text">
            <h2 class="slider__card-name">{heroeName}</h2>
            <div class="details"><b>Вселенная:</b> {universe}</div>
            <div class="details"><b>Альтер эго:</b> {alterEgo}</div>
            <div class="details"><b>Род деятельности:</b> {activity}</div>
            <div class="details"><b>Друзья:</b> {friends}</div>
            <div class="details"><b>Суперсилы:</b> {powers}</div>
            <div class="details"><b>Подробнее:</b> {description}</div>
        </div>
        <img src={image} class="slider__card-image" alt={heroeName} />
        </>
    )
}

export default Slider;