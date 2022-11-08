import React from 'react';
import './mp3List.css';

function Mp3List() {

    const list = [
        {
            name:"Bài này không để đi diễn",
            singer:"Anh Tú Atus",
            time:"3 days ago",
            imgUrl: 'https://avatar-ex-swe.nixcdn.com/song/share/2022/10/17/1/d/b/7/1665981319883.jpg'
        },
        {
            name:"Hồi Duyên",
            singer:"Masew, Khoi Vu, Great",
            time:"3 days ago",
            imgUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/2/9/a/829a8e27aff8bd84180f4b81dc576f0c.jpg'
        },
        {
            name:"Người Có Còn Thương",
            singer:"Minh Vương 4U, Thương Võ",
            time:"3 days ago",
            imgUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/5/8/c/558cf522789d57cdf87b5933235e2880.jpg'
        },
        {
            name:"Hoa Tình Chẳng Nỡ",
            singer:"Dee Trần",
            time:"3 days ago",
            imgUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/d/2/6/cd261f6fd88f4423dd9875abbf68dc6b.jpg'
        },
        {
            name:"HUNGOVER",
            singer:"MINH, Vũ Cát Tường",
            time:"3 days ago",
            imgUrl: 'https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg'
        },
        {
            name:"ill",
            singer:"Alexander 23, Kenny Beats",
            time:"3 days ago",
            imgUrl: 'https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg'
        },


    ]

    return (
        <div className='content'>
            { 
            list.map( (item) => {
                return (
                <div className='content-mini'>
                    <img className='imgSong' src={item.imgUrl}></img>
                    <div className='content-info'>
                        <p className='song'>{item.name}</p>
                        <span className='artis'>{item.singer}</span><br />
                        <span className='time'>{item.time}</span>
                    </div>
                </div>
                )
            })
        }           
        </div>
    )
}


export default Mp3List;