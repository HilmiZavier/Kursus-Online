import React from 'react';
import { 
  User, Mail, Phone, MapPin, Calendar, BookOpen, 
  Award, Clock, ChevronRight, Book, BarChart
} from 'lucide-react';

const StudentProfile = () => {
  // Dummy data - replace with actual data from your backend
  const studentData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Sudirman No. 123, Jakarta",
    joinDate: "1 January 2024",
    enrolledCourses: [
      {
        id: 1,
        name: "Web Development Fundamentals",
        progress: 75,
        instructor: "Jane Smith",
        lastAccessed: "2024-02-16",
        status: "In Progress"
      },
      {
        id: 2,
        name: "UI/UX Design Principles",
        progress: 100,
        instructor: "Mike Johnson",
        lastAccessed: "2024-02-15",
        status: "Completed"
      },
      {
        id: 3,
        name: "Digital Marketing Basics",
        progress: 30,
        instructor: "Sarah Wilson",
        lastAccessed: "2024-02-14",
        status: "In Progress"
      }
    ],
    achievements: [
      "Web Development Certificate",
      "Design Thinking Badge",
      "Perfect Attendance Award"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="w-16 h-16 text-white" />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl font-bold">{studentData.name}</h1>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{studentData.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{studentData.phone}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{studentData.address}</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Joined: {studentData.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Enrolled Courses */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Enrolled Courses
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {studentData.enrolledCourses.map((course) => (
                <div key={course.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Book className="w-5 h-5 text-blue-500" />
                      <h3 className="font-semibold">{course.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      course.status === 'Completed' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Instructor: {course.instructor}
                    </span>
                  </p>
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <BarChart className="w-4 h-4" />
                        {course.progress}% Complete
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Last accessed: {course.lastAccessed}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {studentData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-medium flex-1">{achievement}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;