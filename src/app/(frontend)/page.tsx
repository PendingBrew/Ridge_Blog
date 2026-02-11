import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ChevronDown, ChevronRight, ArrowUpRight, Globe, Menu } from 'lucide-react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { collectMeta } from 'next/dist/build/utils'

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

// Data from payload

export default async function BlogPage() {
  const payload = await getPayload({ config })

  // collection post
  const { docs: posts } = await payload.find({
    collection: 'Posts',
  })

  // collection categories
  // const { docs: Categories } = await payload.find({
  //   collection: 'Categories',
  // })
  const result = await payload.find({ collection: 'Categories' })
  const Categories = result.docs

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">No posts found. Please add some in the admin panel.</p>
      </div>
    )
  }

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <hr className="h-16" />
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
                {Categories.map((category) => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                        category.id === 0
                          ? 'bg-slate-100 font-semibold text-slate-900'
                          : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                      }`}
                    >
                      {category.name}
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
                  {featuredPost.featuredImage && typeof featuredPost.featuredImage === 'object' && (
                    <Image
                      src={featuredPost.featuredImage.url || ''}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                    {typeof featuredPost.categories?.[0] === 'object'
                      ? featuredPost.categories[0].name
                      : 'Uncategorized'}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="text-slate-500 leading-relaxed line-clamp-3">
                    Click to read more about {featuredPost.title}...
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative"></div>
                    <div className="text-sm">
                      <span className="font-semibold text-slate-900 block">Admin</span>
                      <span className="text-slate-400">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map((post: any) => (
                <div key={post.id} className="group cursor-pointer flex flex-col h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block relative aspect-[16/10] overflow-hidden rounded-2xl mb-4"
                  >
                    {post.featuredImage && typeof post.featuredImage === 'object' && (
                      <Image
                        src={post.featuredImage.url || ''}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-indigo-600">
                      {typeof post.categories?.[0] === 'object'
                        ? post.categories[0].name
                        : 'Uncategorized'}
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 flex-1">
                      Explore our latest insights on {post.title}.
                    </p>
                    <div className="flex items-center justify-between pt-2 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden relative"></div>
                        <div className="text-xs text-slate-500">
                          <span className="font-medium text-slate-900">Admin</span>
                          <span className="mx-1">•</span>
                          <span>5 min read</span>
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
