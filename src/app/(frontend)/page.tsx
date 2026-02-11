import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ChevronDown, ChevronRight, ArrowUpRight, Globe, Menu } from 'lucide-react'

// Dummy Data
const CATEGORIES = [
  'All Category',
  'UI/UX Design',
  'Machine Learning',
  'Marketing',
  'Gaming',
  'Design',
  'Janitor',
  'Another One',
  'Thing',
  'Human Resources',
]

const POSTS = [
  {
    id: 1,
    title: 'How To Be Lazy Person In The Age of AI/ML',
    excerpt: 'We provide tips and resources from industry leaders. For real.',
    author: 'Azunyan U. Wu',
    readTime: '5min read',
    category: 'Featured',
    image:
      'https://images.unsplash.com/photo-1713947503867-3b27964f042b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    id: 2,
    title: 'Blog post title',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
    author: 'Vermillion White',
    readTime: '5min read',
    category: 'Category',
    image:
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=1000',
    featured: false,
  },
  {
    id: 3,
    title: 'Blog post title',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
    author: 'Salvador D. Gray',
    readTime: '5min read',
    category: 'Category',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000',
    featured: false,
  },
  {
    id: 4,
    title: 'Modern Architecture Designs',
    excerpt: 'Explore the most innovative architectural designs of the modern era.',
    author: 'Elena Fisher',
    readTime: '8min read',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1000',
    featured: false,
  },
  {
    id: 5,
    title: 'The Future of Remote Work',
    excerpt: 'How remote work is shaping the future of industries worldwide.',
    author: 'John Doe',
    readTime: '4min read',
    category: 'Business',
    image:
      'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=1000',
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = POSTS.find((p) => p.featured) || POSTS[0]
  const otherPosts = POSTS.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight">slothui</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Product
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Services
            </Link>
            <Link href="#" className="text-indigo-600">
              Blog
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">
              <Globe size={16} />
              <span>US</span>
              <ChevronDown size={14} />
            </button>
            <button className="md:hidden p-2">
              <Menu size={24} />
            </button>
            <ArrowUpRight
              className="hidden md:block text-slate-400 hover:text-indigo-600 cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Read Our Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
            Browse Our Resources
          </h1>
          <p className="text-lg text-slate-500">
            We provide tips and resources from industry leaders. For real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Label</label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search article..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Filter</label>
              <div className="relative">
                <select className="w-full appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm text-slate-600 cursor-pointer">
                  <option>Filter article...</option>
                  <option>Latest</option>
                  <option>Popular</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={16}
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-indigo-600 font-semibold text-sm">Browse By Categories</h3>
              <ul className="space-y-1">
                {CATEGORIES.map((category, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                        index === 0
                          ? 'bg-slate-100 font-semibold text-slate-900'
                          : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content Grid */}
          <div className="lg:col-span-9">
            {/* Featured Post */}
            <div className="mb-12 group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="text-slate-500 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative">
                      <Image
                        src="https://ui-avatars.com/api/?name=Azunyan+Wu&background=random"
                        alt={featuredPost.author}
                        fill
                      />
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900 block">
                        {featuredPost.author}
                      </span>
                      <span className="text-slate-400">{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer flex flex-col h-full">
                  <Link
                    href={`/blog/${post.id}`}
                    className="block relative aspect-[16/10] overflow-hidden rounded-2xl mb-4"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-indigo-600">
                      {post.category}
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden relative">
                          <Image
                            src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                            alt={post.author}
                            fill
                          />
                        </div>
                        <div className="text-xs text-slate-500">
                          <span className="font-medium text-slate-900">{post.author}</span>
                          <span className="mx-1">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowUpRight
                        className="text-slate-300 group-hover:text-indigo-600 transition-colors"
                        size={18}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-16 text-center">
              <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-medium rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-all">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
