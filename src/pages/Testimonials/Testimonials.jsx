import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Testimonials = () => {
    const testimonials = [
        {
            img: "/assets/barsha.png",
            name: "Barsha Siwakoti",
            title: "Actress",
            text: "Sometimes when my driver is on leave, Kantipur Ride has always been my best choice. I recommend Kantipur Ride to everyone who needs Driver Hire Service."
        },
        {
            img: "/assets/vijaydai.png",
            name: "Captain Vijay Lama",
            title: "Sr.Pilot/Captain-Nepal Airlines",
            text: "The service Kantipur Ride is providing in Nepal is unique. I had only seen and used this kind of service abroad, until I used Kantipur Ride."
        },
        {
            img: "/assets/yugeshdai.png",
            name: "Yugesh Bhakta Bade Shrestha",
            title: "CEO - IME General Insurance",
            text: "Sometimes when my driver is on leave, Kantipur Ride has always been my best choice. I recommend Kantipur Ride to everyone who needs Driver Hire Service."
        },
        {
            img: "/assets/deepakdai.png",
            name: "Deepak Bista",
            title: "Nepali Olympian",
            text: "In case of long drives, business visits to family outings, I always use Kantipur Ride and I recommend everyone to use the service."
        },
        {
            img: "/assets/rajeshdai.png",
            name: "Rajesh Hamal",
            title: "Megastar/Actor",
            text: "I usually travel with Kantipur Ride rental. I recommend you to use their best quality service. Thank You Kantipur Ride."
        },
        {
            img: "/assets/anildai.png",
            name: "Anil Keshary Shah",
            title: "Banker Celebrity",
            text: "I always choose Kantipur Ride when it comes to my premium vehicle needs on any occasion or the places I like to travel. They are the best."
        },
        {
            img: "/assets/akashdai.png",
            name: "Akash Golcha",
            title: "Director - Golchha Organization",
            text: "I want to recommend Kantipur Ride to everyone who wants to rent vehicles in Nepal. It's a unique service Kantipur Ride has brought here in Nepal."
        },
        {
            img: "/assets/rishiba.png",
            name: "Rishi Dhamala",
            title: "Journalist",
            text: "If anybody needs a reliable, safe, and premium car rental service in Nepal. I solely recommend Kantipur Ride."
        }
    ];

    return (
        <div className="bg-gray-100 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Testimonials</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-4">
                            <img src={testimonial.img} alt={testimonial.name} className='w-24 h-24 mx-auto rounded-full border-4 border-gray-200' />
                            <h2 className="text-xl font-semibold text-center mt-4">{testimonial.name}</h2>
                            <b className="text-center block text-gray-600 mt-1">{testimonial.title}</b>
                            <p className="text-center text-gray-700 mt-4 italic">"{testimonial.text}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonials;
