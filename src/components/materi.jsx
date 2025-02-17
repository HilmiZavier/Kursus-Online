// App.jsx
import React, { useState } from 'react';

const materi = () =>  {
  const [activeTab, setActiveTab] = useState('matematika');
  const [attendance, setAttendance] = useState({});

  const subjects = [
    {
      id: 'matematika',
      name: 'Matematika',
      icon: '📐',
      materials: [
        {
          id: 'aljabar',
          title: 'Aljabar',
          topics: ['Persamaan Linear', 'Pertidaksamaan', 'SPLDV'],
          duration: '2 jam'
        },
        {
          id: 'geometri',
          title: 'Geometri',
          topics: ['Bangun Datar', 'Bangun Ruang', 'Pythagoras'],
          duration: '2 jam'
        }
      ]
    },
    {
      id: 'ipa',
      name: 'IPA',
      icon: '🧪',
      materials: [
        {
          id: 'fisika',
          title: 'Fisika Dasar',
          topics: ['Gerak Lurus', 'Gaya', 'Energi'],
          duration: '2 jam'
        },
        {
          id: 'biologi',
          title: 'Biologi Dasar',
          topics: ['Sel', 'Sistem Organ', 'Ekosistem'],
          duration: '2 jam'
        }
      ]
    }
  ];

  const handleAttendance = (subjectId, materialId) => {
    const today = new Date().toLocaleDateString();
    setAttendance(prev => ({
      ...prev,
      [`${subjectId}-${materialId}`]: {
        date: today,
        status: 'Hadir'
      }
    }));
  };

  const isAttendanceMarked = (subjectId, materialId) => {
    return attendance[`${subjectId}-${materialId}`] !== undefined;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Portal Belajar SMP</h1>
        <p className="text-gray-600">Belajar dan Absensi Online</p>
      </div>

      {/* Tab Navigation */}
      <div className="tabs tabs-boxed mb-6">
        {subjects.map(subject => (
          <button
            key={subject.id}
            className={`tab ${activeTab === subject.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(subject.id)}
          >
            {subject.icon} {subject.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {subjects.map(subject => (
        <div key={subject.id} className={activeTab === subject.id ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subject.materials.map(material => (
              <div key={material.id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{material.title}</h2>
                  <div className="badge badge-primary">{material.duration}</div>
                  
                  <ul className="mt-4 space-y-2">
                    {material.topics.map((topic, index) => (
                      <li key={index} className="flex items-center">
                        <span className="badge badge-sm badge-ghost mr-2">{index + 1}</span>
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <div className="card-actions justify-between items-center mt-4">
                    <button className="btn btn-primary">
                      Mulai Belajar
                    </button>
                    
                    {isAttendanceMarked(subject.id, material.id) ? (
                      <div className="badge badge-success gap-2">
                        ✓ Sudah Absen
                        <span className="text-xs">
                          {attendance[`${subject.id}-${material.id}`].date}
                        </span>
                      </div>
                    ) : (
                      <button 
                        className="btn btn-outline btn-secondary"
                        onClick={() => handleAttendance(subject.id, material.id)}
                      >
                        Absen
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Attendance Summary */}
      <div className="mt-8">
        <div className="collapse collapse-plus bg-base-200">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            Riwayat Absensi
          </div>
          <div className="collapse-content">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Mata Pelajaran</th>
                    <th>Materi</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(attendance).map(([key, value]) => {
                    const [subjectId, materialId] = key.split('-');
                    const subject = subjects.find(s => s.id === subjectId);
                    const material = subject?.materials.find(m => m.id === materialId);
                    
                    return (
                      <tr key={key}>
                        <td>{subject?.name}</td>
                        <td>{material?.title}</td>
                        <td>{value.date}</td>
                        <td>
                          <div className="badge badge-success">{value.status}</div>
                        </td>
                      </tr>
                    )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default materi;