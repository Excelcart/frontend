import Register from '@/components/authPage/Register'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Sign Up  To  Excelcart',
  description: 'Sign Up To Your Roles On  ',
}



export default function RegisterPage()  {
    return (
      <div className='mobile-register-bg2 min-h-screen relative'>
        <div className='mobile-register-bg min-h-screen absolute top-0 w-full'>
          <div className='p-7 mt-10'>
            <Register />
          </div>          
        </div>
      </div>
    )
}