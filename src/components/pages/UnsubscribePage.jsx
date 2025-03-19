import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle, ArrowLeft, Mail, InfoIcon } from "lucide-react";
import apiconfig from './../../configurations/APIConfig';

function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [isConfirming, setIsConfirming] = useState(true);

  useEffect(() => {
    const decodedEmail = token ? atob(token) : '';

    if (decodedEmail !== email) {
      setResult({
        success: false,
        message: "Invalid unsubscribe link. Please contact support for assistance or try using the link from a more recent email."
      });
      setIsConfirming(false);
    }
  }, [email, token]);

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch(`${apiconfig.nayona_api}/api/newsletter/unsubscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResult({
          success: true,
          message: "You have been successfully unsubscribed from our newsletter. You can resubscribe at any time through our website."
        });
      } else {
        throw new Error(data.message || 'Failed to unsubscribe');
      }
    } catch (error) {
      setResult({
        success: false,
        message: error.message || "An unexpected error occurred. Please try again or contact our support team."
      });
    } finally {
      setIsLoading(false);
      setIsConfirming(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-100 dark-section rounded-b-3xl font-open-sans">
      {/* Spacer to push content down by 8rem */}
   

      <div className="newsletter-form flex justify-center items-center p-28 ">
  <div className="w-full max-w-4xl bg-secondary-700 rounded-lg shadow-lg overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6">
      <h1 className="text-heading-3 font-grotesk text-light-100 flex items-center">
        <Mail className="mr-2 h-6 w-6" />
        Newsletter Unsubscribe
      </h1>
      <p className="text-body-2 text-primary-200 mt-1">
        Manage your email preferences
      </p>
    </div>
    
    {/* Content */}
    <div className="p-6">
      {result ? (
        <div className={`rounded-lg p-4 mb-4 flex items-start ${result.success ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
          {result.success ? (
            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
          )}
          <div>
            <h3 className={`font-medium ${result.success ? 'text-green-900' : 'text-red-900'}`}>
              {result.success ? "Unsubscribed Successfully" : "Error"}
            </h3>
            <p className={`text-body-3 ${result.success ? 'text-green-800' : 'text-red-800'}`}>
              {result.message}
            </p>
            {result.success && (
              <p className="text-body-3 text-green-800 mt-2">
                If you change your mind, you can resubscribe anytime.
              </p>
            )}
          </div>
        </div>
      ) : isConfirming ? (
        <div className="md:flex md:space-x-6 space-y-6 md:space-y-0">
          {/* Subscription Details */}
          <div className="bg-primary-100 border border-primary-300 rounded-lg p-4 flex-1">
            <div className="flex">
              <InfoIcon className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-primary-900 text-body-2">Subscription Details</h3>
                <div className="mt-2 text-body-3 text-primary-800 space-y-1">
                  <p><span className="font-medium">Email:</span> {email}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Before You Unsubscribe */}
          <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 flex-1">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-900 text-body-2">Before you unsubscribe</h3>
                <p className="mt-1 text-body-3 text-amber-800">
                  You will no longer receive:
                </p>
                <ul className="list-disc list-inside mt-2 text-body-3 text-amber-800 space-y-1">
                  <li>Product updates and new features</li>
                  <li>Exclusive offers and promotions</li>
                  <li>Important company announcements</li>
                  <li>Industry insights and tips</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    
    {/* Footer */}
    {isConfirming && !result && (
      <div className="px-6 py-4 bg-secondary-700 border-t border-secondary-400 flex justify-between">
        <button 
          className="px-4 py-2 bg-white border border-gray-400 rounded-md text-gray-800 font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 flex items-center"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </button>
        <button 
          className={`px-4 py-2 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 ${
            isLoading 
              ? 'bg-red-500 cursor-not-allowed' 
              : 'bg-red-700 hover:bg-red-800'
          }`}
          onClick={handleUnsubscribe}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Confirm Unsubscribe"}
        </button>
      </div>
    )}
    {!isConfirming && (
      <div className="px-6 py-4 bg-secondary-600 border-t border-secondary-700">
        <button 
          className="w-full px-4 py-2 bg-primary-700 rounded-md text-white font-medium hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
          onClick={() => window.location.href = '/'}
        >
          Return to Our Website
        </button>
        {/* {result && result.success && (
          <p className="text-center text-body-4 text-primary-100 mt-4">
            Changed your mind? <a href="/subscribe" className="text-primary-700 hover:text-primary-900 underline">Resubscribe here</a>
          </p>
        )} */}
      </div>
    )}
    
    {/* Support footer */}
    <div className="px-6 py-3 bg-secondary-700 border-t border-secondary-400">
      <p className="text-center text-body-5 text-primary-100">
        Having trouble? <a href="/contact" className="text-primary-300 hover:underline">Contact our support team</a>
      </p>
    </div>
  </div>
</div>
    </div>
  );
}

export default UnsubscribePage;