import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Search } from 'lucide-react';
const Licenses = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [showLicenseInfo, setShowLicenseInfo] = useState(false);
  const filters = ['All', 'Active', 'Expiring', 'Expired'];
  const handleCheckLicense = () => {
    if (licenseNumber.trim()) {
      setShowLicenseInfo(true);
    }
  };
  const handleAddLicense = () => {
    console.log('Add License button clicked');
    // TODO: Implement add license functionality
  };
  return <div className="space-y-8 pb-20 md:pb-0">
      {/* Mobile-optimized header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-2xl font-bold text-gray-900 mb-1">Licenses</h1>
          <p className="text-gray-600 text-base">Manage your professional licenses and track renewals</p>
        </div>
        <Button onClick={handleAddLicense} className="bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white shadow-sm">
          <Plus className="h-4 w-4 mr-2" />
          Add License
        </Button>
      </div>

      {/* License Lookup Form - Enhanced Card */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Check License Status</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="license-number" className="text-sm font-medium text-gray-700 mb-2 block">
              License Number
            </Label>
            <Input id="license-number" placeholder="Enter license number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} className="w-full bg-white" />
          </div>
          <div className="flex items-end">
            <Button onClick={handleCheckLicense} className="text-white px-6 py-2 shadow-sm bg-stone-950 hover:bg-stone-800">
              <Search className="h-4 w-4 mr-2" />
              Check
            </Button>
          </div>
        </div>
        
        {showLicenseInfo && <div className="mt-6 p-4 bg-white rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-gray-900">Medical License</h4>
                <p className="text-sm text-gray-600">License #: {licenseNumber}</p>
                <p className="text-sm text-gray-600">Status: Active • Expires: March 15, 2025</p>
              </div>
              <Button onClick={handleAddLicense} size="sm" className="bg-gray-900 hover:bg-gray-800 text-white shadow-sm">
                Add to LicenseAlert
              </Button>
            </div>
          </div>}
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <nav className="flex space-x-1 mb-6 overflow-x-auto">
          {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors relative whitespace-nowrap ${activeFilter === filter ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
              {filter}
              {activeFilter === filter && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full" />}
            </button>)}
        </nav>

        {/* Empty State */}
        <div className="text-center py-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">No licenses added yet</h3>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Add your first professional license to start tracking expiration dates and stay compliant with renewal requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <Button onClick={handleAddLicense} className="bg-gray-900 hover:bg-gray-800 text-white shadow-sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First License
              </Button>
              <Button variant="outline" className="text-gray-700 hover:bg-gray-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Licenses;