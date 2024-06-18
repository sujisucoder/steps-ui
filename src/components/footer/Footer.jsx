import React from 'react'

function Footer() {
  return (
    <>
      <div className='container w-full grid grid-rows-3 bg-footerBackground text-white p-4 md:p-8'>
        <div className='row-span-2 grid grid-cols-1 md:grid-cols-3 p-2 gap-4'>
          <div className='col-span-1 grid grid-rows-3 md:grid-rows-2 p-2'>
            <div className='row-span-1 text-white font-bold'>Steps</div>
            <div className='row-span-1 grid grid-cols-4 md:grid-cols-4 gap-2'>
              <div>facebook</div>
              <div>Twitter</div>
              <div>LinkedIn</div>
              <div>Github</div>
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-3 md:grid-cols-3 gap-8 p-2 md:p-6'>
            <div className='grid gap-2'>
              <div className='font-bold'>Services</div>
              <div>Service1</div>
              <div>Service2</div>
              <div>Service3</div>
            </div>
            <div className='grid gap-2'>
              <div className='font-bold'>Products</div>
              <div>Products1</div>
              <div>Products2</div>
              <div>Products3</div>
            </div>
            <div className='grid gap-2'>
              <div className='font-bold'>Contact us</div>
              <div>l7@gmail.com</div>
              <div>facebook</div>
              <div>instagram</div>
            </div>
          </div>
        </div>
        <div className='p-2 md:p-8'>
          <hr className='border-t border-white'/>
        </div>
        <div className='row-span-1 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 p-2'>
          <div className='col-span-1 text-center md:text-left'>© 2024 ladder7. All rights reserved.</div>
          <div className='col-span-2 flex justify-center md:justify-end space-x-4 md:space-x-8'>
            <h3>Terms of Service</h3>
            <h3>Privacy Policy</h3>
            <h3>Cookies</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
