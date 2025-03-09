import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css'

// Temp - Generate Image List
const items = [
    { id: 1, media: "/pins/pin1.jpeg", width: 300, height: 250 },
    { id: 2, media: "/pins/pin2.jpeg", width: 300, height: 320 },
    { id: 3, media: "/pins/pin3.jpeg", width: 300, height: 280 },
    { id: 4, media: "/pins/pin4.jpeg", width: 300, height: 400 },
    { id: 5, media: "/pins/pin5.jpeg", width: 300, height: 220 },
    { id: 6, media: "/pins/pin6.jpeg", width: 300, height: 350 },
    { id: 7, media: "/pins/pin7.jpeg", width: 300, height: 270 },
    { id: 8, media: "/pins/pin8.jpeg", width: 300, height: 300 },
    { id: 9, media: "/pins/pin9.jpeg", width: 300, height: 330 },
    { id: 10, media: "/pins/pin10.jpeg", width: 300, height: 290 },
    { id: 11, media: "/pins/pin11.jpeg", width: 300, height: 310 },
    { id: 12, media: "/pins/pin12.jpeg", width: 300, height: 370 },
    { id: 13, media: "/pins/pin13.jpeg", width: 300, height: 260 },
    { id: 14, media: "/pins/pin14.jpeg", width: 300, height: 340 },
    { id: 15, media: "/pins/pin15.jpeg", width: 300, height: 380 },
    { id: 16, media: "/pins/pin16.jpeg", width: 300, height: 290 },
    { id: 17, media: "/pins/pin17.jpeg", width: 300, height: 310 },
    { id: 18, media: "/pins/pin18.jpeg", width: 300, height: 230 },
    { id: 19, media: "/pins/pin19.jpeg", width: 300, height: 410 },
    { id: 20, media: "/pins/pin20.jpeg", width: 300, height: 240 },
    { id: 21, media: "/pins/pin21.jpeg", width: 300, height: 290 },
    { id: 22, media: "/pins/pin22.jpeg", width: 300, height: 310 },
    { id: 23, media: "/pins/pin23.jpeg", width: 300, height: 370 },
    { id: 24, media: "/pins/pin24.jpeg", width: 300, height: 260 },
    { id: 25, media: "/pins/pin25.jpeg", width: 300, height: 340 },
];


const Gallery = () => {
    return (
        <div className="gallery">
            {items.map((item) => (
                <GalleryItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Gallery;
