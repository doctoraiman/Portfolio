import React from 'react';

const cards = [
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jD6BA3mkBsM1GKuSheJNT_kjGqvjDDzjAw&s' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTtSO5r1e7R8yk0YjSo_AsC0FOYOt0f2QFg&s' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EXFzZxr3w9p8bFAqG7XkKb_fHiyvevFoFg&s' },
  { img: 'https://img.lovepik.com/photo/48008/6380.jpg_wh860.jpg' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokSynbeSd0ZxV9cU3O8ug_0ePEbgf6lGFhg&s' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJREJUmlZ_XLI8O7dswf4cdjted0Y9mwcjGQ&s' }
];

const Work = () => {
  return (
    <>
    <div id='work'>
      <marquee className="text-6xl font-bold text-center mx-48 shadow-lg shadow-pink-600 text-white my-8">My Latest Work!</marquee>
      <div className="flex flex-wrap gap-4 max-w-[60vw] mx-auto">
        {cards.map((card, index) => (
          <div
            className="h-52 w-52 flex flex-col gap-3 border-2 hover:border-pink-800 hover:scale-105 transition-transform border-white rounded-md"
            key={index}
          >
            <img className="h-52 max-w-full object-cover rounded-md" src={card.img} alt="work" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Work;

