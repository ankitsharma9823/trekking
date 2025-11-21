import React from 'react'

const OurTrek = () => {
    const trekdata = [
        {
    id: 1,
    title: "Everest Base Camp",
    location: "Nepal",
    difficulty: "Hard",
    duration: "12-14 days",
    distance: "130 km",
    bestSeason: "March to May, September to November",
    description: "Experience the majestic Himalayas and reach the base of the world's highest peak.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8GVOJSQ8tHTYo4JaBrgbdoKWZV7xw_kSgA&s"
  },
  {
    id: 2,
    title: "Annapurna Circuit",
    location: "Nepal",
    difficulty: "Moderate to Hard",
    duration: "15-20 days",
    distance: "160-230 km",
    bestSeason: "March to May, September to November",
    description: "A classic trek with diverse landscapes, including villages, forests, and mountain vistas.",
    image: "https://admin.ntb.gov.np/image-cache/everest_mp_adventure-1624442562.jpeg?p=main&s=c54f9af8bc62aefc7bc971ec88ead590"
  },
  {
    id: 3,
    title: "Langtang Valley Trek",
    location: "Nepal",
    difficulty: "Moderate",
    duration: "7-10 days",
    distance: "70 km",
    bestSeason: "March to May, September to November",
    description: "A scenic trek with cultural experiences and stunning Himalayan views.",
    image: "https://i.pinimg.com/736x/33/44/langtang_valley.jpg"
  },
  {
    id: 4,
    title: "Gokyo Lakes Trek",
    location: "Nepal",
    difficulty: "Moderate to Hard",
    duration: "12-14 days",
    distance: "110 km",
    bestSeason: "March to May, September to November",
    description: "Visit the beautiful turquoise Gokyo Lakes and enjoy panoramic views of Everest.",
    image: "https://i.pinimg.com/736x/44/55/gokyo_lakes.jpg"
  },
  {
    id: 5,
    title: "Manaslu Circuit Trek",
    location: "Nepal",
    difficulty: "Hard",
    duration: "14-18 days",
    distance: "177 km",
    bestSeason: "March to May, September to November",
    description: "A remote and challenging trek with rich cultural experiences and stunning landscapes.",
    image: "https://i.pinimg.com/736x/55/66/manaslu_circuit.jpg"
  }
];
  return (
    <div className='py-10 px-2'>
        <h1 className='text-center mb-10 font-serif font-bold'>Featured Treks</h1>
        <div className='flex justify-center flex-wrap mb-10'>
            {trekdata.map((item,index)=>(
                <div className='bg-gray-200 shadow-xl hover:shadow-2xl w-70 text-center mx-10 my-5 rounded-2xl'>
                    <img className='w-full h-50 p-2' src="https://admin.ntb.gov.np/image-cache/everest_mp_adventure-1624442562.jpeg?p=main&s=c54f9af8bc62aefc7bc971ec88ead590" alt="" />
                    <h1 className='m-5 text-2xl font-serif font-bold'>{item.title}</h1>
                    <p className='text-left text-xl px-5 py-3'>{item.description}</p>
                </div>
            ))}
           
        </div>
    </div>
  )
}

export default OurTrek