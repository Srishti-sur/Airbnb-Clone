import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
            <Card
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/04/cover-1024x683.jpg"
                title="Fabulous Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
               src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
             src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                
                title="Camping"
                description="Comfortable private places, with rooms for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://cdn.shopify.com/s/files/1/1185/8658/files/Villa_Vida_1.jpg?v=1619773414"
                title="3 Bedroom Flat in Goa"
                description="Superhost with a stunning view of the beachside in South Goa"
                price=" ₹3300/night"
            />
            <Card
                src="https://img.staticmb.com/mbimages/project/2021/03/18/Project-Photo-6-81-Aureate-Mumbai-5148893_1200_1600.jpg"
                title="Penthouse in Mumbai "
                description="Enjoy the amazing sights of Mumbai city with this stunning penthouse"
                price=" ₹4500/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby in Banglore"
                price=" ₹1800/night"
            />
            </div>

            <div className='home__section'>
            <Card
                src="http://www.treehousecottagesmanali.com/wp-content/uploads/2020/01/unit3-2.jpg"
                title="Cottages in Manali"
                description="Enjoy you vacation in Manali with snowfall."
                price=" ₹2500/night"
            />
            <Card
                src="https://d3qyu496o2hwvq.cloudfront.net/wp-content/uploads/2018/04/2017-06-28-mhd-sandy-pines-%C2%A9-jeff-roberts-imaging-1.jpg"
                title="Desert Camp in Jaisalmer "
                description="Known for its magical sunrise and sunsets. this desert town gives a whole new experience."
                price=" ₹3600/night"
            />
            <Card
                src="http://www.arenabeachmaldives.com/wp-content/uploads/2020/01/Deluxe-Double-room-with-Seaview.jpg"
                title="Sea view in Maldives"
                description="A day at a beach restores the soul. Enjoy Luxury resorts in Maldives"
                price=" ₹8999/night"
            />
            </div>



</div>
            )
            }
export default Home