import { getCurrentSession } from '@/services/auth'
import { getDecksByUserId } from '@/services/deck';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import UploadDialog from './UploadDialog';
import { redirect } from 'next/navigation';
import { FileText, Clock, CheckCircle, XCircle, ArrowRight, Plus } from 'lucide-react';

const DeckList = async () => {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  }
  const decks = await getDecksByUserId(session.user.id);

  const getStatusConfig = (status) => {
    switch (status) {
      case "PENDING":
        return {
          icon: Clock,
          color: "bg-yellow-100 text-yellow-800 border-yellow-200",
          text: "Pending"
        };
      case "PROCESSING":
        return {
          icon: Clock,
          color: "bg-blue-100 text-blue-800 border-blue-200",
          text: "Processing"
        };
      case "COMPLETED":
        return {
          icon: CheckCircle,
          color: "bg-green-100 text-green-800 border-green-200",
          text: "Completed"
        };
      case "FAILED":
        return {
          icon: XCircle,
          color: "bg-red-100 text-red-800 border-red-200",
          text: "Failed"
        };
      default:
        return {
          icon: Clock,
          color: "bg-gray-100 text-gray-800 border-gray-200",
          text: status
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, <span className="text-blue-600">{session.user.name}</span> 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Here are your recent pitch deck analyses
          </p>
        </div>
        <UploadDialog />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Decks</p>
              <p className="text-2xl font-bold text-gray-900">{decks.length}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">
                {decks.filter(deck => deck.status === "COMPLETED").length}
              </p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Processing</p>
              <p className="text-2xl font-bold text-blue-600">
                {decks.filter(deck => deck.status === "PENDING").length}
              </p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Failed</p>
              <p className="text-2xl font-bold text-red-600">
                {decks.filter(deck => deck.status === "FAILED").length}
              </p>
            </div>
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Decks Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recent Analyses</h2>
          {decks.length > 6 && (
            <Button variant="outline" size="sm">
              View All
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {decks.map((deck) => {
            const statusConfig = getStatusConfig(deck.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <div 
                key={deck.id} 
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {deck.startupName}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {deck.industry}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {deck.summary}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusConfig.color}`}>
                      <StatusIcon className="h-3 w-3" />
                      {statusConfig.text}
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(deck.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Link href={`/detail/${deck.id}`} className="block">
                    <Button 
                      className="w-full group" 
                      variant={deck.status === "COMPLETED" ? "default" : "outline"}
                      disabled={deck.status === "PROCESSING"}
                    >
                      {deck.status === "COMPLETED" ? "View Analysis" : 
                       deck.status === "PROCESSING" ? "Processing..." :
                       deck.status === "FAILED" ? "Retry" : "View Details"}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Empty State (if no decks but this component is rendered, shouldn't happen) */}
      {decks.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No pitch decks yet</h3>
          <p className="text-gray-600 mb-6">Upload your first pitch deck to get started with AI analysis.</p>
          <UploadDialog />
        </div>
      )}
    </div>
  )
}

export default DeckList