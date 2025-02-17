import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { BookOpen, Users, Award, Star, ChevronRight } from "lucide-react";

const Home = () => {
    const navigate = useNavigate();
    const coursesRef = useRef(null);

    const scrollToCourses = () => {
        coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Data dummy untuk kursus populer
    const popularCourses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            instructor: "John Doe",
            rating: 4.8,
            students: 1234,
            price: "Rp 599.000",
            image: "/api/placeholder/400/225",
        },
        {
            id: 2,
            title: "Digital Marketing Masterclass",
            instructor: "Jane Smith",
            rating: 4.7,
            students: 856,
            price: "Rp 499.000",
            image: "/api/placeholder/400/225",
        },
        {
            id: 3,
            title: "UI/UX Design Fundamentals",
            instructor: "Mike Johnson",
            rating: 4.9,
            students: 2123,
            price: "Rp 699.000",
            image: "/api/placeholder/400/225",
        },
    ];

    // Data untuk kategori
    const categories = [
        { name: "Web Development", count: 150, icon: "🌐" },
        { name: "Digital Marketing", count: 85, icon: "📱" },
        { name: "Design", count: 120, icon: "🎨" },
        { name: "Business", count: 200, icon: "💼" },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                Tingkatkan Skill Anda dengan Kursus Online Terbaik
                            </h1>
                            <p className="text-lg mb-8 text-white/90">
                                Pelajari skill baru dari instruktur profesional. Akses ribuan
                                kursus kapanpun dan dimanapun.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="btn bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                    Mulai Belajar
                                </button>

                                <button
                                    onClick={scrollToCourses}
                                    className="btn bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                    Lihat Kursus
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Learning Illustration"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Mengapa Memilih Kami?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Platform pembelajaran online terbaik dengan berbagai fitur
                            unggulan untuk mendukung proses belajar Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Kursus Berkualitas</h3>
                            <p className="text-gray-600">
                                Materi pembelajaran yang terstruktur dan berkualitas dari para
                                ahli di bidangnya
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Komunitas Aktif</h3>
                            <p className="text-gray-600">
                                Bergabung dengan komunitas pembelajaran yang aktif dan
                                supportive
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Sertifikat Resmi</h3>
                            <p className="text-gray-600">
                                Dapatkan sertifikat resmi yang diakui industri setelah
                                menyelesaikan kursus
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Kategori Populer
                        </h2>
                        <a
                            href="/categories"
                            className="text-primary hover:underline flex items-center"
                        >
                            Lihat Semua <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <a
                                key={category.name}
                                href={`/categories/${category.name.toLowerCase()}`}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group"
                            >
                                <span className="text-4xl mb-4 block">{category.icon}</span>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                                    {category.name}
                                </h3>
                                <p className="text-gray-600">{category.count} Kursus</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Courses Section */}
            <section ref={coursesRef} className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Kursus Populer</h2>
                        <a
                            href="/courses"
                            className="text-primary hover:underline flex items-center"
                        >
                            Lihat Semua <ChevronRight className="h-4 w-4 ml-1" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-xl shadow-sm overflow-hidden group"
                            >
                                <div className="relative">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">by {course.instructor}</p>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                            <span className="ml-1 text-gray-700">
                                                {course.rating}
                                            </span>
                                        </div>
                                        <div className="text-gray-600">
                                            <Users className="h-4 w-4 inline mr-1" />
                                            {course.students} siswa
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-gray-900">
                                            {course.price}
                                        </span>
                                        <a
                                            href={`/courses/${course.id}`}
                                            className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
                                        >
                                            Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Siap Untuk Mulai Belajar?</h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Bergabung sekarang dan dapatkan akses ke ribuan kursus berkualitas
                        dari instruktur terbaik
                    </p>
                    <a
                        href="/register"
                        className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
                    >
                        Daftar Sekarang
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;