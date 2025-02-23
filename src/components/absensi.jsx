import React, { useState } from 'react';
import { Calendar, Clock, Book, User } from 'lucide-react';

const Absensi = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  
  // Sample data untuk absensi
  const attendanceData = [
    {
      id: 1,
      subject: "Matematika",
      date: "2025-02-17",
      status: "Hadir",
      teacher: "Budi Santoso, S.Pd",
      startTime: "08:00",
      endTime: "09:30",
      notes: "Materi: Aljabar Linear"
    },
    {
      id: 2,
      subject: "IPA",
      date: "2025-02-17",
      status: "Hadir",
      teacher: "Siti Rahayu, M.Pd",
      startTime: "10:00",
      endTime: "11:30",
      notes: "Materi: Fisika Dasar"
    },
    {
      id: 3,
      subject: "Bahasa Indonesia",
      date: "2025-02-17",
      status: "Hadir",
      teacher: "Ahmad Hidayat, S.Pd",
      startTime: "13:00",
      endTime: "14:30",
      notes: "Materi: Tata Bahasa"
    }
  ];

  // Menghitung statistik kehadiran
  const totalClasses = attendanceData.length;
  const presentClasses = attendanceData.filter(item => item.status === "Hadir").length;
  const attendancePercentage = (presentClasses / totalClasses) * 100;

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Portal Absensi Peserta</h1>
          <p className="mt-2 text-gray-600">Pantau kehadiran dan progress pembelajaran Anda</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Kehadiran</p>
                <p className="text-2xl font-bold text-gray-900">{presentClasses}/{totalClasses}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Persentase Kehadiran</p>
                <p className="text-2xl font-bold text-gray-900">{attendancePercentage.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Jam Belajar</p>
                <p className="text-2xl font-bold text-gray-900">4.5 Jam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-6 flex items-center space-x-4">
          <select 
            className="block w-48 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </div>

        {/* Attendance History */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Riwayat Kehadiran</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mata Pelajaran</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pengajar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {attendanceData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(item.date).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {item.startTime} - {item.endTime}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        <div className="text-sm text-gray-900">{item.teacher}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absensi;