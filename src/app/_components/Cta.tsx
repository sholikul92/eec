import Link from 'next/link';

export default function CTASection() {
  return (
    <section className='h-80 bg-[url(/banner.webp)] bg-cover bg-no-repeat bg-fixed'>
      <div className='h-full bg-black/50 flex flex-col text-center justify-center items-center text-white space-y-4'>
        <h1 className='text-4xl font-semibold'>
          Wujudkan Kelas Nyaman dengan Bangku Berkualitas
        </h1>
        <p className='text-xl'>
          Mulai transformasi ruang belajar Anda hari ini
        </p>
        <div className='flex gap-8'>
          <Link href='#produk' aria-label='tombol lihat produk' target='_blank'>
            <button className='bg-primary px-4 py-2 rounded-xl cursor-pointer'>
              Lihat Produk
            </button>
          </Link>
          <Link
            href='https://wa.me/6287886758088'
            aria-label='tombol hubungi kami'
          >
            <button className='bg-white text-primary px-4 py-2 rounded-xl cursor-pointer'>
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
