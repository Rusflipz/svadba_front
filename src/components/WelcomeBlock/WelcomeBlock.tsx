import React from 'react';
// @ts-ignore
import './WelcomeBlock.scss'

function WelcomeBlock() {
    return (
        <section id='welcome-block' className='welcome-block'>
            <p className='welcome-block__description'>Дорогие гости!</p>
            <p className='welcome-block__text'>Приглашаем разделить с нами радость особенного для нас события и стать
                свидетелями начала нашей семейной
                жизни!</p>
            <p className='welcome-block__text'>Ждем Вас!</p>

            <p className='welcome-block__description'>4 августа 2023</p>
            <p className='welcome-block__text'>На церемонии бракосочетания<br/> адрес: г. Раменское, ул
                Красноармейская 2</p>
            <p className='welcome-block__text'>А также на банкете в ресторане Conquistador<br/> адрес: г. Раменское, ул
                Северное шоссе 10</p>
        </section>
    );
}

export default WelcomeBlock;
