import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  BookOpen, 
  Clock,
  FileText,
  UserCheck,
  Award,
  Calendar,
  ChevronRight,
  BarChart
} from "lucide-react";

const Materi = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');
  const [attendance, setAttendance] = useState({});
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeMaterial, setActiveMaterial] = useState(null);
  const [activeTopic, setActiveTopic] = useState('');

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(
          `https://api-kursusonline.csnightdev.com/api/courses/${courseId}`
        );
        setCourseData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setLoading(false);
      }
    };
    fetchCourseData();
  }, [courseId]);

  useEffect(() => {
    if (courseData) {
      const content = getDefaultContent(courseData.category);
      setActiveMaterial(content[0]);
      setActiveTopic(content[0]?.topics[0]);
    }
  }, [courseData]);

  // Color schemes based on course category
  const colorSchemes = {
    'Matematika': {
      primary: 'bg-indigo-600',
      secondary: 'bg-indigo-100',
      accent: 'text-indigo-600',
      border: 'border-indigo-300',
      hover: 'hover:bg-indigo-50',
      activeHover: 'hover:bg-indigo-700',
      light: 'bg-indigo-50',
      gradient: 'from-indigo-600 to-blue-500',
      altGradient: 'from-purple-500 to-indigo-600',
      buttonGradient: 'from-blue-400 to-indigo-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      highlight: 'bg-purple-500'
    },
    'IPA': {
      primary: 'bg-emerald-600',
      secondary: 'bg-emerald-100',
      accent: 'text-emerald-600',
      border: 'border-emerald-300',
      hover: 'hover:bg-emerald-50',
      activeHover: 'hover:bg-emerald-700',
      light: 'bg-emerald-50',
      gradient: 'from-emerald-600 to-teal-500',
      altGradient: 'from-teal-400 to-emerald-600',
      buttonGradient: 'from-green-400 to-emerald-500',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      highlight: 'bg-teal-500'
    }
  };

  // Get default course content based on category
  const getDefaultContent = (category) => {
    switch(category) {
      case 'Matematika':
        return [
          {
            title: 'Aljabar',
            topics: ['Persamaan Linear', 'Pertidaksamaan', 'SPLDV'],
            modules: [
              {
                title: 'Video Pembelajaran',
                type: 'video',
                duration: '30 menit',
                color: 'bg-indigo-500'
              },
              {
                title: 'Latihan Soal',
                type: 'quiz',
                duration: '20 menit',
                color: 'bg-blue-500'
              },
              {
                title: 'Materi Bacaan',
                type: 'document',
                duration: '15 menit',
                color: 'bg-purple-500'
              }
            ]
          }
        ];
      case 'IPA':
        return [
          {
            title: 'Fisika Dasar',
            topics: ['Gerak Lurus', 'Gaya', 'Energi'],
            modules: [
              {
                title: 'Video Pembelajaran',
                type: 'video',
                duration: '25 menit',
                color: 'bg-emerald-500'
              },
              {
                title: 'Praktikum Virtual',
                type: 'quiz',
                duration: '30 menit',
                color: 'bg-teal-500'
              },
              {
                title: 'Rangkuman',
                type: 'document',
                duration: '15 menit',
                color: 'bg-green-500'
              }
            ]
          }
        ];
      default:
        return [];
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Course not found</div>
      </div>
    );
  }

  const currentColorScheme = colorSchemes[courseData.category] || colorSchemes['Matematika'];

  // Rest of your component remains the same, just use courseData instead of subject data
  return (
    <div className="min-h-screen bg-gradient-to-br bg-blue-200 bg-gray-100">
      {/* Decorative header */}
      <div className={`h-48 w-full bg-gradient-to-r ${currentColorScheme.gradient} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end">
          <div className="mb-8 flex items-center">
            <span className="text-5xl mr-4">📚</span>
            <div>
              <h1 className="text-3xl font-extrabold text-white">
                {courseData.title}
              </h1>
              <p className="text-lg text-white/70">{courseData.category}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-20">
        {/* Back button */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Dashboard
          </button>
          
          <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>{courseData.nextClass}</span>
          </div>
        </div>

        {/* Course info card */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className={`h-16 w-16 rounded-xl ${currentColorScheme.primary} flex items-center justify-center text-white`}>
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{courseData.title}</h2>
              <p className="text-gray-600">{courseData.teacher}</p>
            </div>
            <div className="ml-auto text-right">
              <div className="text-sm text-gray-600">Progress</div>
              <div className="text-2xl font-bold text-gray-800">{courseData.progress}%</div>
            </div>
          </div>
        </div>

        {/* Materials and modules grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - Topics */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                <BookOpen className="w-5 h-5 inline mr-2 text-gray-600" />
                Topik Pembelajaran
              </h3>
              
              {activeMaterial?.topics.map((topic, index) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`w-full text-left p-4 rounded-xl mb-2 transition-colors ${
                    activeTopic === topic
                      ? `${currentColorScheme.primary} text-white`
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    {topic}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Modul Pembelajaran - {activeTopic}
              </h3>
              
              <div className="grid gap-4">
                {activeMaterial?.modules.map((module, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${module.color} text-white`}>
                        {module.type === 'video' ? <Play className="w-5 h-5" /> :
                         module.type === 'quiz' ? <FileText className="w-5 h-5" /> :
                         <BookOpen className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{module.title}</h4>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {module.duration}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-auto text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>    
      </main>
    </div>
  );
};

export default Materi;