'use client';

import { useState } from 'react';

const fonts = [
  { name: 'Lato', class: 'font-lato' },
  { name: 'Montserrat', class: 'font-montserrat' },
  { name: 'Roboto', class: 'font-roboto' },
  { name: 'Merriweather', class: 'font-merriweather' },
  { name: 'Playfair Display', class: 'font-playfair-display' },
  { name: 'Poppins', class: 'font-poppins' },
  { name: 'Oswald', class: 'font-oswald' },
  { name: 'Nunito Sans', class: 'font-nunito-sans' },
  { name: 'Lora', class: 'font-lora' },
  { name: 'Raleway', class: 'font-raleway' },
];

export default function FontSwitcher() {
  const [currentFont, setCurrentFont] = useState('font-lato');

  const switchFont = (fontClass: string) => {
    document.documentElement.classList.remove(currentFont);
    document.documentElement.classList.add(fontClass);
    setCurrentFont(fontClass);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col gap-2">
        {fonts.map((font) => (
          <button
            key={font.class}
            onClick={() => switchFont(font.class)}
            className={`px-4 py-2 text-sm rounded-md ${
              currentFont === font.class
                ? 'bg-g2b-yellow text-g2b-purple'
                : 'bg-white text-black'
            }`}
          >
            {font.name}
          </button>
        ))}
      </div>
    </div>
  );
}
