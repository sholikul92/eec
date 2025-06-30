import { ReactNode } from 'react';
import { LuShieldCheck } from 'react-icons/lu';
import { FaChair, FaTruck } from 'react-icons/fa';
import { GiToolbox } from 'react-icons/gi';

type Excellents = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};

const excellents: Excellents[] = [
  {
    id: 1,
    title: 'Kuat & Tahan Lama',
    description:
      'Dibuat dari bahan pilihan dan konstruksi kokoh, bangku kami siap digunakan bertahun-tahun tanpa khawatir rusak.',
    icon: <LuShieldCheck />,
  },
  {
    id: 2,
    title: 'Desain Ergonomis',
    description:
      'Dirancang untuk kenyamanan belajar dalam waktu lama — mendukung postur duduk siswa agar tetap fokus.',
    icon: <FaChair />,
  },
  {
    id: 3,
    title: 'Pengiriman Ke Seluruh Indonesia',
    description:
      'Dengan sistem distribusi terintegrasi, kami siap mengirim ke sekolah Anda di mana pun berada.',
    icon: <FaTruck />,
  },
  {
    id: 4,
    title: 'Perakitan & Perawatan Mudah',
    description:
      'Perawatan sederhana dan perakitan cepat — hemat waktu tanpa mengorbankan kualitas.',
    icon: <GiToolbox />,
  },
];

export default function ExcellentSection() {
  return (
    <section className='container mx-auto p-8'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold text-gray-800'>
          Mengapa Memilih Produk Kami?
        </h1>
        <p className='text-gray-700'>
          Kami menyediakan furniture sekolah dengan kualitas terbaik yang
          mendukung kenyamanan belajar siswa.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
        {excellents.map((item) => (
          <div
            key={item.id}
            className='bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center'
          >
            <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
              {item.icon}
            </div>
            <h1 className='text-xl font-semibold mb-2 text-gray-800'>
              {item.title}
            </h1>
            <p className='text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
