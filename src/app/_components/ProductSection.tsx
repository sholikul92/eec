'use client';
import { products } from '@/app/data/data';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductSection() {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  return (
    <section className='py-16 bg-white scrool-mt-20' id='produk'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>Produk Kami</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Berbagai pilihan meja dan kursi sekolah dengan berbagai ukuran dan
            model.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {products.map((product) => (
            <div
              key={product.id}
              id={String(product.id)}
              className='shadow-lg rounded-lg text-center flex flex-col items-center p-2 relative'
              onMouseEnter={() => {
                setHoveredProductId(product.id);
              }}
              onMouseLeave={() => {
                setHoveredProductId(null);
              }}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                loading='lazy'
              />
              <h2 className='font-semibold'>{product.title}</h2>
              <div
                className={`w-full h-full absolute top-0 bg-gray-700/50 shadow-lg rounded-lg flex justify-center items-center transition-all duration-300 ease-in-out delay-100 ${
                  hoveredProductId === product.id
                    ? 'opacity-100 '
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <Link
                  href={`https://wa.me/6287886758088?text=Halo saya mendapatkan ini dari website. Saya ingin mengetahui lebih lanjut tentang produk "${product.title}".`}
                  target='_blank'
                  aria-label='link hubungi cs'
                >
                  <button className='bg-white text-gray-800 rounded-lg p-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer'>
                    Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
