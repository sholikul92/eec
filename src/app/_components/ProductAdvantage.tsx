import Image from 'next/image';
import { HiCheck } from 'react-icons/hi';
import { standars, productAdvantages } from '@/app/data/data';

export default function ProductAdvantage() {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>
            Telah Teruji Kuat & Aman
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Setiap kursi melewati pengujian ketat — dari beban berat hingga
            penggunaan intensif — memastikan kekuatan dan keamanan untuk
            pemakaian jangka panjang.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-8'>
          <div className='lg:w-1/2 grid grid-cols-2 gap-4'>
            {productAdvantages.map((product) => (
              <div
                key={product.id}
                className='shadow-sm hover:shadow-md hover:scale-101 rounded-lg overflow-hidden'
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={400}
                  height={400}
                  priority
                />
                <div className='p-4 bg-white'>
                  <h1 className='font-semibold'>{product.title}</h1>
                  <p className='text-sm text-gray-600'>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='lg:w-1/2'>
            <div className='bg-primary/10 p-8 rounded-xl'>
              <h1 className='text-2xl font-bold text-primary mb-4'>
                Standar Kualitas Kami
              </h1>
              <ul className='space-y-4'>
                {standars.map((item) => (
                  <li key={item.id} className='flex items-start gap-2'>
                    <div>
                      <HiCheck className='text-2xl text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-800'>
                        {item.title}
                      </h4>
                      <p className='text-gray-600 text-justify'>
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
