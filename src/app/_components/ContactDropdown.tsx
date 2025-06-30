'use client';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import clsx from 'clsx';
import { WhatsApps } from '../data/data';

export default function ContactDropdown({ className }: { className?: string }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className={clsx('bg-green-700 text-white', className)}
          aria-label='Tombol Hubungi CS'
        >
          <FaWhatsapp />
          Hubungi Kami
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Dynamic Actions' items={WhatsApps}>
        {(item) => (
          <DropdownItem key={item.key}>
            <Link href={`https://wa.me/${item.key}`} aria-label='wa'>
              {item.label}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
