import React, { useState } from 'react';
import { INSIGHTS } from '../data';
import { Insight } from '../types';
import { Search, BookOpen, Clock, Calendar, User, ArrowRight, X, Sparkles } from 'lucide-react';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Insight | null>(null);

  const categories = ['All', 'Taxation', 'Corporate Strategy', 'Market Trends', 'Assurance'];

  const filteredInsights = INSIGHTS.filter((insight) => {
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    const matchesSearch =
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="insights" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="text-xs uppercase tracking-widest font-bold text-[#3182CE]">
            KNOWLEDGE & FISCAL COUNSEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl serif font-bold text-[#1A365D] tracking-tight">
            Vanguard Insights
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
            Our practitioners regularly analyze developments in tax policy, audit criteria, and corporate transaction structuring to help you make informed decisions.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs uppercase tracking-widest font-bold px-4 py-2.5 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#1A365D] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search briefings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 py-3 pl-10 pr-4 text-slate-900 focus:outline-hidden focus:border-[#1A365D] focus:bg-white transition-all duration-300 placeholder-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Insights Grid */}
        {filteredInsights.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredInsights.map((insight) => (
              <article
                key={insight.id}
                className="group border border-slate-100 hover:border-slate-300 p-8 flex flex-col justify-between transition-all duration-300 bg-[#F8FAFC]/50"
              >
                <div className="space-y-4">
                  {/* Category and Read time metadata */}
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    <span className="text-[#3182CE]">{insight.category}</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{insight.readTime}</span>
                    </span>
                  </div>

                  <h3 className="serif text-xl sm:text-2xl font-bold text-[#1A365D] group-hover:text-[#3182CE] transition-colors duration-200 leading-snug">
                    {insight.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                    {insight.excerpt}
                  </p>
                </div>

                {/* Footer and CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-bold">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{insight.author}</span>
                  </div>
                  
                  <button
                    onClick={() => setActiveArticle(insight)}
                    className="text-xs uppercase tracking-widest font-bold text-[#1A365D] hover:text-[#3182CE] flex items-center space-x-1.5 group/btn transition-colors"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-slate-200">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm font-light">No briefings found matching your current parameters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs uppercase tracking-widest text-[#1A365D] font-bold mt-4 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dynamic Briefing Reader Overlay */}
        {activeArticle && (
          <div className="fixed inset-0 bg-[#1A365D]/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-4xl max-h-[85vh] shadow-2xl overflow-y-auto relative border border-slate-200 p-6 sm:p-12 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 p-2 bg-slate-50 hover:bg-slate-100 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Editorial Banner */}
              <div className="space-y-6 max-w-3xl">
                <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100 pb-4">
                  <span className="text-[#1A365D]">{activeArticle.category}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeArticle.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeArticle.readTime}</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl serif font-bold text-[#1A365D] leading-tight">
                  {activeArticle.title}
                </h1>

                {/* Author Info block */}
                <div className="p-4 bg-slate-50 border border-slate-100 flex items-center space-x-3 max-w-md">
                  <div className="w-10 h-10 bg-[#1A365D] flex items-center justify-center text-white serif text-lg font-bold">
                    {activeArticle.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{activeArticle.author}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">{activeArticle.authorRole}</p>
                  </div>
                </div>

                {/* Content Paragraphs */}
                <div className="space-y-6 pt-4 text-slate-700 font-light text-base leading-relaxed">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Editorial disclaimer footer */}
                <div className="pt-8 border-t border-slate-100 space-y-2">
                  <h5 className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                    Regulatory Notice
                  </h5>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-light">
                    The material presented above is intended as an informational briefing regarding general regulatory matters and does not constitute formal legal, taxation, or audit counsel. Enterprises should schedule direct advisory consultations with licensed practitioners before initiating structural modifications.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
