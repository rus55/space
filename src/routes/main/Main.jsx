import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <div className='wrapper'>

                <div className='subWrapper'>
                    <div className='header text font-museosanscyrl700'>Путешествие</div>
                    <div className='subHeader text font-museosanscyrl700'>на красную планету</div>
                    <div>
                        <div className='button-text'>Начать путешествие</div>
                        <div className='button'></div>
                    </div>
                </div>

                <div className='blocks'>
                    <div className='block'>
                        <div>мы</div>
                        <div className='header colorBlock font-museosanscyrl700'>1</div>
                        <div>на рынке</div>
                    </div>
                    <div className='block'>
                        <div>гарантируем</div>
                        <div className='header colorBlock font-museosanscyrl700'>50%</div>
                        <div>безопасность</div>
                    </div>
                    <div className='block'>
                        <div>календарик за</div>
                        <div className='header colorBlock font-museosanscyrl700'>2001<span>г.</span></div>
                        <div>в подарок</div>
                    </div>
                    <div className='block'>
                        <div>путешествие</div>
                        <div className='header colorBlock font-museosanscyrl700'>597</div>
                        <div>дней</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main