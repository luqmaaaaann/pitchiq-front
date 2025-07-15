import { getCurrentSession } from '@/services/auth'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import UploadDialog from './UploadDialog';
import { redirect } from 'next/navigation';
import DeleteDeckButton from './DeleteButton';
import EditDeckDialog from './EditDialog';

export default async function DeckList({ decks }) {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Hello, <span className="text-blue-600">{session.user.name}</span> 👋
          </h1>
          <p className="text-gray-600 mt-2 text-md">
            Here are your recent pitch deck analyses
          </p>
        </div>
        <UploadDialog />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recent Analyses</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {decks.map((deck) => {
            
            return (
              <div 
                key={deck.id} 
                className="bg-blue-100/10 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-start flex-col gap-2 mb-4">
                    <div className='flex flex-col'>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {deck.startupName}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {deck.industry}
                      </p>
                    </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {deck.summary}
                      </p>
                    
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-2 py-1 rounded-md text-xs font-medium border ${deck.status === "COMPLETED" ? "bg-green-100 text-green-800 border-green-200" : deck.status === "PENDING" ? "bg-yellow-100 text-yellow-800 border-yellow-200" : deck.status === "FAILED" ? "bg-red-100 text-red-800 border-red-200" : "bg-gray-100 text-gray-800 border-gray-200"}`}>
                      {deck.status === "COMPLETED" ? "Completed" : deck.status === "PENDING" ? "Pending" : deck.status === "FAILED" ? "Failed" : deck.status}
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(deck.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <Link href={`/detail/${deck.id}`} className="block">
                    <Button 
                      className={`w-full group ${deck.status === "COMPLETED" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-500 hover:bg-gray-700 text-white"}`}
                      variant={deck.status === "COMPLETED" ? "default" : "outline"}
                      disabled={deck.status === "PENDING" || deck.status === "FAILED"}
                    >
                      {deck.status === "COMPLETED" ? "View Analysis" : 
                        deck.status === "PENDING" ? "Processing..." :
                        deck.status === "FAILED" ? "Retry" : "View Details"}
                    </Button>
                  </Link>

                  <div className="flex items-center gap-2 mt-4">
                    <EditDeckDialog deck={deck} />
                    <DeleteDeckButton deckId={deck.id} deckName={deck.startupName} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}