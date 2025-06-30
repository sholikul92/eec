import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function WaToggle() {
  return (
    <div className='bg-green-700 p-2 rounded-full fixed bottom-5 right-5'>
      <Link
        href='https://wa.me/6287886758088'
        target='_blank'
        aria-label='tombol wa'
      >
        <FaWhatsapp className='text-white text-2xl md:text-4xl' />
      </Link>
    </div>
  );
}
