import React from 'react'
import Typical from 'react-typical'
import CV from '../../assets/cv.pdf'
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className="profile-details">
                    <div className="victor">
                        <div className="victor-icon">
                            <a href="https://www.facebook.com/victorzzinue/">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href="https://www.instagram.com/victorzzinue/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCvsKeFylPbAYdA7WOvz-GiQ">
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href="https://twitter.com/zzinueleon">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hola, Mi nombre es <span className="highlighted-text">Victor</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Desarrollador Entusiasta 🙂',
                                        1000,
                                        'Desarrollador Full Stack 💻',
                                        1000,
                                        'MERN Stack 📚',
                                        1000,
                                        'Github 🏫',
                                        1000,
                                        'React Framework Dev ❇',
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                            Gran pasión por construir aplicaciones que faciliten la vida a la sociedad!
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Contactar{" "}
                        </button>
                        <a href={CV} className="btn btn-primary" target="_blank">
                            Ver CV
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
