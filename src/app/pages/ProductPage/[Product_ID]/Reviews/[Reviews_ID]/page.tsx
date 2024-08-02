import React from 'react'

const Reviews_ID = ({ params }: {
  params: {
    Product_ID:string;
    Reviews_ID: string
}
}) => {
  return (
    <React.Fragment>
      <div className='bg-[#474747] h-[650px] flex justify-center items-center'>
        {/* <TextData /> */}
        <p className='text-7xl text-[#FFFFFF]'>Reviews {params.Reviews_ID} for Product {params.Product_ID}</p>
      </div>
    </React.Fragment>
  )
}

export default Reviews_ID