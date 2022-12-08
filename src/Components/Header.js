import React from 'react'

function SponsorImage({ url }) {
  return (
    <img
      src={url}
      alt="sponsor-logo"
      className="w-24 aspect-[3/1] object-contain"
    />
  );
}

export default function Header() {
  return (
    <>
      <header className='
        flex 
        items-center justify-center py-3
        md:items-start md:justify-start
      '>
        <img
          src="/Resources/Lublin.png"
          alt="Lublin logo"
          className='w-1/2 md:w-72'
        />
      </header>
      { false &&
        <nav className='
          flex 
          justify-evenly
          md:flex-col
        '>
          <SponsorImage url="/Resources/ikea.png" />
          <SponsorImage url="/Resources/skende.png" />
          <SponsorImage url="/Resources/sempre.png" />
          <SponsorImage url="/Resources/eycapital.png" />
        </nav>
      }
    </>
  )
}
