import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { BookOpen, Users, Award, Star, ChevronRight } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  const colors = [
    {
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      textColor: "text-purple-900",
      accentColor: "text-purple-600",
    },
    {
      
      color: "bg-teal-50",
      hoverColor: "hover:bg-teal-100",
      textColor: "text-teal-900",
      accentColor: "text-teal-600",
    },
    {
      
      color: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      textColor: "text-orange-900",
      accentColor: "text-orange-600",
    },
    {
      
      color: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
      textColor: "text-pink-900",
      accentColor: "text-pink-600",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Belajar Lebih Seru & Mudah!
              </h1>
              <p className="text-lg mb-8 text-white/90">
                Platform belajar online khusus untuk siswa SMP & SMA. Pelajari
                materi sekolah dengan cara yang menyenangkan! 🚀
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="btn bg-yellow-400  px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                  Mulai Belajar
                </button>
                <button
                  onClick={scrollToCourses}
                  className="btn bg-white  px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Lihat Pelajaran
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://studentengagement.ie/wp-content/uploads/2021/02/Student-Learning-Experience-FULL-WHEEL-02.png"
                alt="Student Learning Illustration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kenapa Belajar di Sini?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Belajar jadi lebih seru dengan fitur-fitur keren yang bikin kamu
              semangat!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-violet-50 p-8 rounded-2xl shadow-sm text-center hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-violet-900">
                Materi Sesuai Kurikulum
              </h3>
              <p className="text-violet-700">
                Dibuat khusus sesuai dengan kurikulum sekolah SMP & SMA
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm text-center hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900">
                Belajar Bareng Teman
              </h3>
              <p className="text-amber-700">
                Diskusi dan kerja kelompok online dengan teman sekelasmu
              </p>
            </div>

            <div className="bg-cyan-50 p-8 rounded-2xl shadow-sm text-center hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-900">
                Sertifikat Kelulusan
              </h3>
              <p className="text-cyan-700">
                Dapatkan sertifikat setelah menyelesaikan setiap mata pelajaran
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Popular Courses Section */}
      <section ref={coursesRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Kelas Populer
            </h2>
            <a className="text-blue-600 hover:text-blue-700 flex items-center">
              Lihat Semua <ChevronRight className="h-4 w-4 ml-1 " />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((course, index) => {
              const colorScheme = colors[index % colors.length];
              return (
                <div
                  key={course.id}
                  className={`${colorScheme.color} rounded-2xl shadow-2xl overflow-hidden group hover:shadow-md transition ${colorScheme.hoverColor}`}
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${colorScheme.textColor}`}>
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {course.description.length > 100
                        ? course.description.substring(0, 100) + "..."
                        : course.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-900">{course.rating}</span>
                      </div>
                      <div className="text-gray-600">
                        <Users className="h-4 w-4 inline mr-1" />
                        Rp.{course.price}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href={`/`}
                        className={`px-6 py-2 rounded-full font-semibold hover:opacity-90 transition ${colorScheme.accentColor}`}
                      >
                        Lihat Detail
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Untuk Belajar? 📚</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Ayo bergabung sekarang dan tingkatkan nilai sekolahmu dengan cara
            yang menyenangkan!
          </p>
          <a
            href="/register"
            className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition inline-block"
          >
            Daftar Gratis!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
