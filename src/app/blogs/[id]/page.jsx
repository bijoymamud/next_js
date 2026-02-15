import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Star, Calendar, ArrowLeft } from "lucide-react";

export default async function Page({ params }) {
  const blogs = [
    {
      id: 1,
      title: "The Art of Minimalist Web Design",
      description:
        "Discover how stripping away the noise can lead to more impactful user experiences and faster conversion rates. Minimalism is not about a lack of something; it is about the perfect amount of something.",
      image:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1200",
      likes: 1240,
      readed: "5k",
      total_star: 4.8,
      date: "Feb 12, 2026",
    },
    {
      id: 2,
      title: "Mastering Next.js 15 Server Components",
      description:
        "A deep dive into the latest streaming patterns and how to optimize your hydration for blazing fast page loads. Server components are revolutionizing how we think about the client-server boundary.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200",
      likes: 892,
      readed: "3.2k",
      total_star: 4.9,
      date: "Feb 10, 2026",
    },
    {
      id: 3,
      title: "Why Typography is the Secret to Great UX",
      description:
        "Most designers overlook line-height and letter-spacing. Learn why these small details define your brand's voice and improve readability for all users.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
      likes: 450,
      readed: "1.8k",
      total_star: 4.5,
      date: "Feb 05, 2026",
    },
  ];

  const resolvedParams = await params;
  const id = resolvedParams.id;
  const particularBlog = blogs.find((blog) => blog.id === Number(id)) || null;

  if (!particularBlog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Blog not found</h1>
        <Link
          href="/blogs"
          className="text-emerald-500 hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* 1. Header / Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-500 transition-colors mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to all articles
        </Link>

        {/* 2. Hero Section */}
        <header className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-500 font-semibold text-sm uppercase tracking-wider">
            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 rounded-full">
              Article
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {particularBlog.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {particularBlog.title}
          </h1>

          {/* Metadata Badges */}
          <div className="flex items-center gap-6 border-y border-gray-100 dark:border-zinc-800 py-4 text-gray-600 dark:text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Star size={18} className="text-amber-500" fill="currentColor" />
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                {particularBlog.total_star}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart size={18} className="text-red-500" />
              <span>{particularBlog.likes} Likes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye size={18} className="text-blue-500" />
              <span>{particularBlog.readed} Reads</span>
            </div>
          </div>
        </header>

        {/* 3. Main Image */}
        <div className="relative aspect-video w-full my-10 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={particularBlog.image}
            alt={particularBlog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 4. Content Area */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-slate-700 dark:text-zinc-300 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
            {particularBlog.description}
          </p>

          <div className="mt-8 p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border-l-4 border-emerald-500 italic text-gray-600 dark:text-zinc-400">
            "Design is not just what it looks like and feels like. Design is how
            it works." — Steve Jobs
          </div>

          <p className="mt-8 text-gray-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </article>
  );
}
