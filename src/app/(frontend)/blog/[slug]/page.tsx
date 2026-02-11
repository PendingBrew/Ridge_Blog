import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  Globe,
  Menu,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react'

// Dummy Data (Reused for consistent feel)
const POST = {
  id: 1,
  title: 'How To Be Lazy Person In The Age of AI/ML',
  excerpt: 'We provide tips and resources from industry leaders. For real.',
  author: 'Azunyan U. Wu',
  date: 'Oct 24, 2023',
  readTime: '5min read',
  category: 'Featured',
  image:
    'https://images.unsplash.com/photo-1496307653780-42ee777d480c?auto=format&fit=crop&q=80&w=2000',
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <h2>The Rise of AI</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <blockquote>"Laziness is the father of innovation." - Unknown</blockquote>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <h3>Why It Matters</h3>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
  `,
}

const RELATED_POSTS = [
  {
    id: 2,
    title: 'Blog post title',
    excerpt: 'Lorem ipsum dolor sit amet...',
    author: 'Vermillion White',
    readTime: '3min read',
    image:
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    title: 'Another interesting read',
    excerpt: 'Consectetur adipiscing elit...',
    author: 'Salvador D. Gray',
    readTime: '7min read',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000',
  },
]

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header (Duplicated for consistency as requested) */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="bg-indigo-600 p-1.5 rounded-lg">
              <span className="text-white font-bold text-xl">S</span>
            </Link>
            <Link href="/" className="font-bold text-xl tracking-tight">
              slothui
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Product
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">
              Services
            </Link>
            <Link href="/" className="text-indigo-600">
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
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wide">
              {POST.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {POST.title}
          </h1>

          <div className="flex items-center justify-between border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                <Image
                  src="https://ui-avatars.com/api/?name=Azunyan+Wu&background=random"
                  alt={POST.author}
                  fill
                />
              </div>
              <div>
                <div className="font-bold text-slate-900">{POST.author}</div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {POST.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {POST.readTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
                <Share2 size={20} />
              </button>
              <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-16 px-4 md:px-0">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image src={POST.image} alt={POST.title} fill className="object-cover" priority />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:rounded-xl mb-20">
          <div dangerouslySetInnerHTML={{ __html: POST.content }} />
        </article>

        {/* Related Posts */}
        <div className="max-w-5xl mx-auto border-t border-slate-200 pt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {RELATED_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex gap-6 items-start"
              >
                <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="text-xs text-indigo-600 font-medium mb-1">Related</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h4>
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
