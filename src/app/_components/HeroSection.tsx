'use client';
import { Button } from '@heroui/react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='bg-[url(/hero.webp)] bg-no-repeat bg-cover md:bg-bottom min-h-screen flex justify-center items-center'>
      <div className='bg-black/50 w-full min-h-screen flex flex-col justify-center items-center text-white'>
        <div className='md:w-2xl text-center space-y-2 p-8'>
          <p className='text-4xl font-bold drop-shadow'>
            Bangku Sekolah Berkualitas untuk Masa Depan Pendidikan
          </p>
          <p className='text-xl'>
            Temukan pilihan terbaik untuk kenyamanan dan produktivitas belajar
            di ruang kelas Anda
          </p>
          <div className='flex justify-center gap-4'>
            <Link href='#produk' aria-label='link produk'>
              <Button variant='bordered' className='text-white'>
                Lihat Produk
              </Button>
            </Link>
            <Link
              href='https://wa.me/6287886758088'
              aria-label='link-whatsapp'
              target='_blank'
            >
              <Button className='bg-green-800 text-white'>
                <FaWhatsapp />
                Beli Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
