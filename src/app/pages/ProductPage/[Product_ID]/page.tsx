import React from 'react'

const Product_Id = ({ params }: {
  params: {Product_ID:string}
}) => {
  return (
    <React.Fragment>
      <div className='bg-[#474747] h-[650px] flex justify-center items-center'>
        {/* <TextData /> */}
        <p className='text-7xl text-[#FFFFFF]'>Details About Product {params.Product_ID}</p>
      </div>
    </React.Fragment>
  )
}

export default Product_Id