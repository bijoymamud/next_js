import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Art of Minimalist Web Design",
      description:
        "Discover how stripping away the noise can lead to more impactful user experiences and faster conversion rates.",
      image:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800",
      likes: 1240,
      readed: "5k",
      total_star: 4.8,
      date: "Feb 12, 2026",
    },
    {
      id: 2,
      title: "Mastering Next.js 15 Server Components",
      description:
        "A deep dive into the latest streaming patterns and how to optimize your hydration for blazing fast page loads.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
      likes: 892,
      readed: "3.2k",
      total_star: 4.9,
      date: "Feb 10, 2026",
    },
    {
      id: 3,
      title: "Why Typography is the Secret to Great UX",
      description:
        "Most designers overlook line-height and letter-spacing. Learn why these small details define your brand's voice.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      likes: 450,
      readed: "1.8k",
      total_star: 4.5,
      date: "Feb 05, 2026",
    },
  ];

  if (blogs) {
    return (
      <div className="min-h-screen px-20 py-10">
        <h1 className="text-4xl font-bold mb-8">Latest Blogs</h1>

        <div className="grid grid-cols-3 gap-10 place-items-center place-content-center flex-wrap">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-12 border  shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="block w-full h-full"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-300 mb-4">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">No blogs available</h1>
      </div>
    );
  }
}
