import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const data = [
    {
        name: 'Azure Devops Engineer',
        img: 'https://media.istockphoto.com/id/1527460354/photo/software-developer-or-programmer-coding-program-with-laptop-create-intelligence-innovation.jpg?s=1024x1024&w=is&k=20&c=9bDipKL5-OYQv_-YXfrc_ea2bXgIh4bFxzCGZ4pQPxU=',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
        name: 'MERN Stack Developer',
        img: 'https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6292.jpg?w=826&t=st=1717066972~exp=1717067572~hmac=6960616171cceced3e977298a164d5388cdd5ae1b38152508c206fbc33b6c663',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
        name: 'Salesforce Developer',
        img: 'https://img.freepik.com/free-vector/flat-content-management-system_23-2148807862.jpg?w=826&t=st=1717067013~exp=1717067613~hmac=6107a0871bb50a3253e0b097bd35a719bfb0be32961d428525da06718eb5964f',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
        name: 'Full Stack Developer',
        img: 'https://img.freepik.com/premium-vector/web-development-application-coding-programming-technology-create-software-code-mobile-applications-creative-template-web-print_122058-749.jpg?w=996',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
        {
        name: 'Azure Devops Engineer',
        img: 'https://media.istockphoto.com/id/1527460354/photo/software-developer-or-programmer-coding-program-with-laptop-create-intelligence-innovation.jpg?s=1024x1024&w=is&k=20&c=9bDipKL5-OYQv_-YXfrc_ea2bXgIh4bFxzCGZ4pQPxU=',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
        name: 'MERN Stack Developer',
        img: 'https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6292.jpg?w=826&t=st=1717066972~exp=1717067572~hmac=6960616171cceced3e977298a164d5388cdd5ae1b38152508c206fbc33b6c663',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
        name: 'Salesforce Developer',
        img: 'https://img.freepik.com/free-vector/flat-content-management-system_23-2148807862.jpg?w=826&t=st=1717067013~exp=1717067613~hmac=6107a0871bb50a3253e0b097bd35a719bfb0be32961d428525da06718eb5964f',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
        name: 'Full Stack Developer',
        img: 'https://img.freepik.com/premium-vector/web-development-application-coding-programming-technology-create-software-code-mobile-applications-creative-template-web-print_122058-749.jpg?w=996',
        review: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    }

];

export default function ProductCarousel() {
  
  return (
    <Carousel
    
      opts={{
        align: "start",
        
      }}
      className={`w-auto h-auto`}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      
    >
      <CarouselContent>
        {data.map((d, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
            <div key={index} className='card-container bg-white h[500] text-black rounded-xl '>
                            <div className='h-48 pt-3 rounded-t-xl bg-white flex justify-center items'>
                                <img src={d.img} alt='' className='h-44 w-60 rounded-xl' />
                            </div>
                            <div className='flex flex-col justify-stretch  items-center gap-4 p-4'>
                                <p className='font-semibold text-xl '>{d.name}</p>
                                <p className='text-justify'>{d.review}</p>
                                <div className='flex justify-between gap-5'>
                                    <button className='bg-blue-500 text-white text-xs py-2 px-3 rounded-xl '>Register Now</button>
                                    <button className='bg-transparent text-blue-500 text-xs border-solid border-2 border-blue-500 py-2 px-3  rounded-xl '>Access Now</button>
                                </div>
                            </div>
                        </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
