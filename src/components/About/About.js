import React from 'react';
import './about.styles.scss';

function About() {
    return (
        <section id="about">
            <div className="about__container">
                <div className="row">
                    <div className="about__header">
                        {/* <img src='https://m.media-amazon.com/images/M/MV5BYjcyMjU5Y2ItM2QwMi00MTc2LTlhNzAtNzMzY2FjMDk1Mzg2XkEyXkFqcGdeQXVyMzM2MjIzNDc@._V1_UY1200_CR85,0,630,1200_AL_.jpg' alt="Joe Shepherd" className="about__headshot" /> */}
                    </div>
                    <div className="col-md-4 offset-md-5 about__paragraph-container">
                        <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam modi, ad, eaque commodi esse consectetur inventore, eius quam sequi at nobis animi. Harum facilis placeat recusandae rerum eaque adipisci praesentium!
                        </p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default About; 