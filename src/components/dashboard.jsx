import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  BookOpen, 
  Clock, 
  Trophy,
  ChevronRight
} from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";

const IntegratedDashboard = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-kursusonline.csnightdev.com/api/courses"
        );
        setdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Color schemes matching the material page
  const colors = [
    {
      primary: 'bg-indigo-600',
      secondary: 'bg-indigo-100',
      accent: 'text-indigo-600',
      gradient: 'from-indigo-600 to-blue-500',
      light: 'bg-indigo-50',
      border: 'border-indigo-300'
    },
    {
      primary: 'bg-emerald-600',
      secondary: 'bg-emerald-100',
      accent: 'text-emerald-600',
      gradient: 'from-emerald-600 to-teal-500',
      light: 'bg-emerald-50',
      border: 'border-emerald-300'
    }
  ];

  const studentStats = [
    { title: "Rata-rata Nilai", value: "82", icon: BarChart },
    { title: "Materi Selesai", value: "24", icon: BookOpen },
    { title: "Total Jam Belajar", value: "48", icon: Clock },
    { title: "Peringkat Kelas", value: "5", icon: Trophy }
  ];

  const handleCourseClick = (courseId) => {
    navigate(`/materi/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-blue-100 bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-indigo-600 rounded-2xl shadow-sm p-4 sm:p-6 mb-8 border-t-4 border-l-4 border-r-0 border-b-0 border-indigo-600 border-opacity-70">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-white/90">
                Selamat Datang 
              </h1>
              <p className="text-white/90 mt-1 text-sm sm:text-base">
                Semester 1 - Tahun Ajaran 2024/2025
              </p>
            </div>
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <p className="text-sm text-white/90">Status Belajar</p>
              <div className="flex items-center justify-center sm:justify-start mt-1">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="font-medium text-white/90">Aktif</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {studentStats.map((stat, index) => (
            <div key={index} className="bg-indigo-600 p-4 sm:p-6 rounded-2xl shadow-sm border-t-2 border-l-2 border-indigo-600 border-opacity-30">
              <div className="flex items-center">
                <div className="p-2 sm:p-3 rounded-xl bg-indigo-50 mr-4">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-white/90">{stat.title}</p>
                  <p className="text-lg sm:text-xl font-bold text-white/90">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enrolled Courses Section */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-600" />
            Kursus Saya
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {data.map((course, index) => {
              const colorScheme = colors[index % colors.length]; // Use color scheme
              return (
                <div
                  key={course.id}
                  className="group border rounded-2xl hover:shadow-md transition-all cursor-pointer overflow-hidden"
                  onClick={() => handleCourseClick(course.id)} // Pass course.id
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${colorScheme.gradient}`}></div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm ${colorScheme.accent} ${colorScheme.primary} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full`}>
                        {course.category}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {course.nextClass}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl ${colorScheme.secondary} flex items-center justify-center text-white text-lg sm:text-xl`}>
                      <BookOpen color="#3e9392"/>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                          {course.teacher}
                        </p>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full ${colorScheme.primary}`}
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="text-sm">
                              <p className="text-gray-600">Nilai Quiz</p>
                              <p className="text-base sm:text-lg font-bold text-gray-800">{course.quizScore}</p>
                            </div>
                            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${colorScheme.primary} flex items-center justify-center group-hover:bg-white transition-colors`}>
                              <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 ${colorScheme.accent}`} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntegratedDashboard;
