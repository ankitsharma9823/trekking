import React from "react";
import { PersonStanding, ShieldOff, Kayak, Users, Group } from 'lucide-react';


const About = () => {

  const about = [
  {
    id: 1,
    image: <PersonStanding />,
    title: "Expert Guides",
    description:
      "Certified mountain guides with over a decade of experience in high-altitude trekking and Himalayan terrain."
  },
  {
    id: 2,
    image: <ShieldOff />,
    title: "Safety First",
    description:
      "We follow strict safety protocols, provide trained support staff, and include emergency rescue assistance for every trek."
  },
  {
    id: 3,
    image: <Kayak />,
    title: "Global Adventures",
    description:
      "From Nepal to the Alps, we offer curated treks across multiple continents with deep cultural and local connections."
  },
  {
    id: 4,
    image:<Group />,
    title: "Small Groups",
    description:
      "Enjoy more personalized attention, flexible pacing, and enriched experiences through small, intimate group sizes."
  }
];
  return (

    <>
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-16 py-12 items-center">

      {/* LEFT */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6">
          Discover the Himalayas Like Never Before
        </h1>

        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-6">
          For over a decade, we've guided travelers through some of the most breathtaking trails on earth. 
          With a deep love for nature and a strong focus on responsible tourism, we make every journey 
          safe, meaningful, and unforgettable.
          <br /><br />
          Every trek is crafted to offer the perfect blend of adventure, culture, and natural beauty—
          ensuring you return home inspired and empowered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-amber-100 rounded-xl p-4 text-center text-lg md:text-2xl opacity-80">
          <div>
            <p className="font-bold text-2xl md:text-3xl">15+</p>
            <p>Years</p>
          </div>
          <div>
            <p className="font-bold text-2xl md:text-3xl">5000+</p>
            <p>Trekkers</p>
          </div>
          <div>
            <p className="font-bold text-2xl md:text-3xl">99%</p>
            <p>Success Rate</p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <img
          className="w-full h-[250px] sm:h-[350px] md:h-full object-cover rounded-xl shadow-lg"
          src="https://imgs.search.brave.com/SFoNPnxwkIfiO-UYEzx3oqbi1XAdOxflV4wIP5w0IjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmVr/a2luZy1tb3VudGFp/bnMtbW91bnRhaW4t/aGlraW5nLXRvdXJp/c3RzLWJhY2twYWNr/cy1oaWtlLXJvY2t5/LXdheS1uZWFyLXJp/dmVyLXdpbGQtbmF0/dXJlLWJlYXV0aWZ1/bC12aWV3cy0xMjY2/ODI4NjYuanBn"
          alt="Trekking Himalayas"
        />
      </div>
    </div>
    <div className="flex flex-wrap gap-10 justify-center align-center bg-white px-5 py-10">
      {about.map((item,index)=>{
        return (
          <div className="flex-col w-50 bg-gray-100 text-center px-2 py-2 rounded-2xl shadow-xl hover:shadow-2xl max-sm:w-full" 
          key={index}>
            <h1 className="mb-5 justify-center flex">{item.image}</h1>
            <h1 className="mb-5">{item.title}</h1>
            <p className="mb-4">{item.description}</p>
          </div>
        )
      })}
      </div>
    </>
  );
};

export default About;
