import { getCurrentSession } from '@/services/auth'
import { getDecksByUserId } from '@/services/deck';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import UploadDialog from './UploadDialog';
import { redirect } from 'next/navigation';


const DeckList = async () => {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }
  const decks = await getDecksByUserId(session.user.id);

  return (
    <div className='flex flex-col gap-12 w-full'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-left w-full mb-6'>Hello, {session.user.name}</h2>
        <UploadDialog />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        {decks.map((deck) => (
            <div key={deck.id} className='bg-blue-100/50 rounded-md px-4 py-3 flex justify-between items-center'>
              <div className='flex flex-col gap-2'>
                <p className='text-left'>{deck.startupName}</p>
                {deck.status === "PENDING" ? (
                  <span className='text-yellow-500 text-sm font-semibold'>{deck.status}</span>
                ) : deck.status === "COMPLETED" ? (
                  <span className='text-green-500 text-sm font-semibold'>{deck.status}</span>
                ) : (
                  <span className='text-red-500 text-sm font-semibold'>{deck.status}</span>
                )}
              </div>
                <Link href={`/detail/${deck.id}`}>
                  <Button className='text-sm font-mediu hover:underline bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer'>
                      Detail
                  </Button>
                </Link>
            </div>
        ))}
    </div>
    </div>
  )
}

export default DeckList