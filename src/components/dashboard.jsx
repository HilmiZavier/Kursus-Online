import { Book, Users, Trophy, BellRing, Search, Menu } from "lucide-react";

const Dashboard = () => {
  // Data mata pelajaran SMP
  const subjects = [
    {
      id: 1,
      title: "Matematika Kelas 7",
      teacher: "Budi Santoso, S.Pd",
      progress: 75,
      thumbnail: "/api/placeholder/400/225",
      category: "Matematika",
      currentTopic: "Aljabar Dasar",
    },
    {
      id: 2,
      title: "IPA Kelas 7",
      teacher: "Siti Rahayu, M.Pd",
      progress: 45,
      thumbnail: "/api/placeholder/400/225",
      category: "IPA",
      currentTopic: "Klasifikasi Makhluk Hidup",
    },
    {
      id: 3,
      title: "Bahasa Indonesia Kelas 7",
      teacher: "Ahmad Hidayat, S.Pd",
      progress: 90,
      thumbnail: "/api/placeholder/400/225",
      category: "Bahasa",
      currentTopic: "Teks Deskriptif",
    },
  ];

  // Data statistik pembelajaran
  const stats = [
    { title: "Total Mata Pelajaran", value: "12", icon: Book },
    { title: "Jumlah Siswa", value: "280", icon: Users },
    { title: "Nilai Sempurna", value: "8", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <label className="btn btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  class="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  class="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
              <span className="text-xl font-bold text-primary">
                Belajar SMP
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari mata pelajaran..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Notification */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-500 hover:text-primary">
                <BellRing className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Selamat Datang di Kelas 7!
          </h1>
          <p className="text-gray-600">
            Mari belajar bersama untuk meningkatkan prestasi
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subjects Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              Mata Pelajaran Aktif
            </h2>
            <button className="text-primary hover:underline">
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={subject.thumbnail}
                  alt={subject.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {subject.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 text-gray-800">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Guru: {subject.teacher}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Materi: {subject.currentTopic}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress Materi</span>
                      <span>{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
