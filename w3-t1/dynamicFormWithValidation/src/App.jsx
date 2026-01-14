import React, { useState } from 'react';
import { Calendar, Briefcase } from 'lucide-react';

function App() {
  const [workEntries, setWorkEntries] = useState([
    {
      id: 1,
      company: '',
      position: '',
      location: '',
      workType: '',
      startDate: '',
      endDate: ''
    }
  ]);

  const addWork = () => {
    setWorkEntries([
      ...workEntries,
      {
        id: Date.now(),
        company: '',
        position: '',
        location: '',
        workType: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setWorkEntries(
      workEntries.map(entry =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleSubmit = () => {
    console.log('Work entries:', workEntries);
    alert('Her sey qaydasindadi hele');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {workEntries.map((entry, index) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-sm mb-6 p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b">
              <Briefcase className="w-5 h-5" />
              <h2 className="text-lg">Work</h2>
            </div>

            {/* Form Grid */}
            <div className="space-y-4">
              {/* Company and Position Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={entry.company}
                    onChange={(e) => handleInputChange(entry.id, 'company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position
                  </label>
                  <input
                    type="text"
                    value={entry.position}
                    onChange={(e) => handleInputChange(entry.id, 'position', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Location*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={entry.location}
                    onChange={(e) => handleInputChange(entry.id, 'location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work type
                  </label>
                  <input
                    type="text"
                    value={entry.workType}
                    onChange={(e) => handleInputChange(entry.id, 'workType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Start and End Date*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={entry.startDate}
                      onChange={(e) => handleInputChange(entry.id, 'startDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={entry.endDate}
                      onChange={(e) => handleInputChange(entry.id, 'endDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Add Work Button */}
            <button
              onClick={addWork}
              className="mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"> Add work + </button>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md"
        >Submit</button>
      </div>
    </div>
  );
}

export default App;