import React from 'react';

export default class Home_Slide extends React.Component{
    componentDidMount(){
        var mySwiper = new Swiper('#slide',{
            autoplay:3000,
            visibilityFullFit : true,
            loop:true,
            pagination : '.pagination',
        });
    }
    render(){
        return(
            <div id="slide">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="#">
                            <img src="/src/upload/slide001.jpg"/>
                        </a>
                    </div>
                    <div className="swiper-slide">
                        <a href="#">
                            <img src="/src/upload/slide002.jpg"/>
                        </a>
                    </div>
                </div>
                <div className="pagination"></div>  
            </div>
        )
    }
}