import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";

const GlobalLoader: React.FC = () => {
  return (
    <React.Fragment>
      <div className='flex w-screen fixed h-screen bg-[#FFFFFF] justify-center z-50 t-0 l-0 items-center'>
        <PacmanLoader
          color="#ee8484"
          margin={2}
          size={35}
        />
      </div>
    </React.Fragment>
  )
}

export default GlobalLoader