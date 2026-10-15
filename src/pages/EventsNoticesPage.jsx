import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, Calendar, Download, 
  MapPin, ChevronRight, CheckCircle2, 
  AlertCircle, LayoutGrid, List, ArrowDown, X 
} from 'lucide-react';

import { eventsAndNotices } from '../data/schoolData';
import NoticeModal from '../components/NoticeModal';

export default function EventsNoticesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('all'); // 'all' | 'notice' | 'event'
  const [selectedDatePeriod, setSelectedDatePeriod] = useState('all'); // 'all' | '2026-09' | '2026-10' | '2026-11' | 'specific'
  const [specificDate, setSpecificDate] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionFeedback, setActionFeedback] = useState(null);

  const categories = [
    'All',
    'Academic',
    'Admissions',
    'Cultural',
    'Sports',
    'Holiday',
    'Circulars'
  ];

  const datePeriods = [
    { label: 'All Dates', value: 'all' },
    { label: 'October 2026', value: '2026-10' },
    { label: 'November 2026', value: '2026-11' },
    { label: 'September 2026', value: '2026-09' },
  ];

  // Filter items based on category, type, date, and text search
  const filteredItems = useMemo(() => {
    return eventsAndNotices.filter((item) => {
      // Type match
      if (selectedType !== 'all' && item.type !== selectedType) {
        return false;
      }
      // Category match
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Date filter match
      if (selectedDatePeriod !== 'all') {
        if (!item.date.startsWith(selectedDatePeriod)) {
          return false;
        }
      }
      if (specificDate) {
        if (item.date !== specificDate) {
          return false;
        }
      }
      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesSummary = item.summary.toLowerCase().includes(query);
        const matchesId = item.id.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSummary && !matchesId && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedType, selectedDatePeriod, specificDate, searchQuery]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleDownload = (e, item) => {
    e.stopPropagation();
    setActionFeedback(`Simulated PDF downloaded: ${item.attachmentName || item.id + '.pdf'}`);
    setTimeout(() => setActionFeedback(null), 4000);
  };

  const handleAddToCalendar = (e, item) => {
    e.stopPropagation();
    setActionFeedback(`Event "${item.title}" added to your calendar (Demo action).`);
    setTimeout(() => setActionFeedback(null), 4000);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedType('all');
    setSelectedDatePeriod('all');
    setSpecificDate('');
    setVisibleCount(6);
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedType !== 'all' || selectedDatePeriod !== 'all' || specificDate !== '';

  return (
    <div className="space-y-16 md:space-y-24 pb-16 font-sans">
      
      {/* 1. HERO BANNER */}
      <section className="bg-[#173F35] text-[#FAF9F5] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A568]/20 text-[#DFC48E] border border-[#C5A568]/40">
              Bulletin & Circular Desk
            </span>
            <h1 className="hero-heading text-white">
              School Events, Circulars & Announcements.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF9F5]/90 leading-relaxed font-normal">
              Official memorandums, examination timetables, holiday schedules, inter-school tournaments, and campus celebrations for current and prospective families.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Toast / Notification feedback */}
        {actionFeedback && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs px-4 py-3 rounded-xl flex items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{actionFeedback}</span>
            </div>
            <button 
              type="button"
              onClick={() => setActionFeedback(null)}
              className="text-emerald-700 underline text-xs font-medium cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* 2. SEARCH, CATEGORY, DATE, TYPE & VIEW TOGGLE CONTROLS */}
        <div className="bg-[#FAF9F5] p-5 sm:p-6 rounded-2xl border border-[#D8D4C8] shadow-sm space-y-5 text-left">
          
          {/* Top Row: Search input + Type selector + View Mode */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <label htmlFor="event-search" className="sr-only">Search circulars and events</label>
              <Search className="w-4 h-4 text-[#89948E] absolute left-3.5 top-3" />
              <input
                id="event-search"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search by keyword, topic, or reference code..."
                className="w-full text-xs sm:text-sm pl-10 pr-10 py-2.5 rounded-xl border border-[#D8D4C8] bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                  className="absolute right-3 top-2.5 text-xs text-[#89948E] hover:text-[#252A27]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Type selector & View mode */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <div className="flex bg-[#ECE8DA] p-1 rounded-lg text-xs" role="tablist" aria-label="Filter by type">
                <button
                  type="button"
                  onClick={() => { setSelectedType('all'); setVisibleCount(6); }}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                    selectedType === 'all' ? 'bg-[#173F35] text-white shadow-xs' : 'text-[#5C6761]'
                  }`}
                >
                  All ({eventsAndNotices.length})
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedType('notice'); setVisibleCount(6); }}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                    selectedType === 'notice' ? 'bg-[#173F35] text-white shadow-xs' : 'text-[#5C6761]'
                  }`}
                >
                  Circulars
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedType('event'); setVisibleCount(6); }}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                    selectedType === 'event' ? 'bg-[#173F35] text-white shadow-xs' : 'text-[#5C6761]'
                  }`}
                >
                  Events
                </button>
              </div>

              {/* View Toggle */}
              <div className="hidden sm:flex bg-[#ECE8DA] p-1 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white text-[#173F35] shadow-xs' : 'text-[#5C6761]'
                  }`}
                  title="Grid View"
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                    viewMode === 'table' ? 'bg-white text-[#173F35] shadow-xs' : 'text-[#5C6761]'
                  }`}
                  title="Table / List View"
                  aria-label="Table view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle Row: Date Filter Controls */}
          <div className="pt-3 border-t border-[#ECE8DA] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-[#89948E] uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A568]" /> Filter Date:
              </span>
              {datePeriods.map((period) => (
                <button
                  key={period.value}
                  type="button"
                  onClick={() => {
                    setSelectedDatePeriod(period.value);
                    setSpecificDate('');
                    setVisibleCount(6);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedDatePeriod === period.value && !specificDate
                      ? 'bg-[#173F35] text-[#FAF9F5]'
                      : 'bg-white text-[#5C6761] border border-[#D8D4C8] hover:border-[#173F35]'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>

            {/* Exact Date Picker Input */}
            <div className="flex items-center gap-2">
              <label htmlFor="exact-date" className="text-[11px] text-[#5C6761] font-medium whitespace-nowrap">
                Specific Date:
              </label>
              <input
                id="exact-date"
                type="date"
                value={specificDate}
                onChange={(e) => {
                  setSpecificDate(e.target.value);
                  setSelectedDatePeriod('all');
                  setVisibleCount(6);
                }}
                className="text-xs px-2.5 py-1 rounded-lg border border-[#D8D4C8] bg-white text-[#252A27] max-w-[150px] focus:outline-none focus:ring-1 focus:ring-[#C5A568]"
              />
              {specificDate && (
                <button
                  type="button"
                  onClick={() => setSpecificDate('')}
                  aria-label="Clear specific date"
                  className="text-xs text-[#89948E] hover:text-[#252A27]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Category Filter Pills & Reset Button */}
          <div className="pt-3 border-t border-[#ECE8DA] flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              <span className="text-[11px] font-semibold text-[#89948E] uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#173F35] text-[#FAF9F5]'
                      : 'bg-white text-[#5C6761] border border-[#D8D4C8] hover:border-[#173F35]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-semibold text-[#C5A568] hover:text-[#173F35] underline cursor-pointer ml-auto"
              >
                Reset All Filters
              </button>
            )}
          </div>

        </div>

        {/* 3. RESULTS DISPLAY */}
        <div>
          {filteredItems.length === 0 ? (
            <div className="bg-[#FAF9F5] p-12 rounded-2xl border border-[#D8D4C8] text-center space-y-3">
              <AlertCircle className="w-10 h-10 text-[#C5A568] mx-auto" />
              <h3 className="card-heading text-[#173F35]">
                No Circulars or Events Found
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6761] max-w-sm mx-auto">
                No items match your active search or filter criteria. Try resetting filters to view all entries.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-4 py-2 bg-[#173F35] text-white text-xs font-semibold rounded-lg mt-2 cursor-pointer hover:bg-[#24584a] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid Card View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedItem(item); } }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${item.title}`}
                  className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#D8D4C8] hover:border-[#C5A568] hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A568]"
                >
                  <div className="space-y-3">
                    {/* Top Row: Type, Category & Date */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                        item.type === 'event' 
                          ? 'bg-[#C5A568]/20 text-[#173F35] border border-[#C5A568]/40' 
                          : 'bg-[#173F35] text-white'
                      }`}>
                        {item.type === 'event' ? 'Campus Event' : item.category}
                      </span>
                      
                      <span className="text-[11px] font-mono text-[#89948E]">
                        {item.id}
                      </span>
                    </div>

                    <h3 className="card-heading text-[#173F35] group-hover:text-[#0E2822] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5C6761] leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>

                    {item.venue && (
                      <div className="p-2.5 bg-[#FAF8F2] rounded-lg border border-[#ECE8DA] text-[11px] text-[#173F35] flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A568] shrink-0" />
                        <span className="truncate">{item.venue} &bull; {item.time}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Meta & Actions */}
                  <div className="mt-5 pt-3 border-t border-[#ECE8DA] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#89948E] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A568]" />
                      <span>{item.displayDate}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {item.type === 'event' ? (
                        <button
                          type="button"
                          onClick={(e) => handleAddToCalendar(e, item)}
                          className="p-1.5 rounded-lg text-[#173F35] hover:bg-[#ECE8DA] transition-colors cursor-pointer"
                          title="Add to Calendar"
                          aria-label={`Add ${item.title} to calendar`}
                        >
                          <Calendar className="w-4 h-4 text-[#C5A568]" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => handleDownload(e, item)}
                          className="p-1.5 rounded-lg text-[#173F35] hover:bg-[#ECE8DA] transition-colors cursor-pointer"
                          title="Download Circular PDF"
                          aria-label={`Download PDF for ${item.title}`}
                        >
                          <Download className="w-4 h-4 text-[#C5A568]" />
                        </button>
                      )}
                      <span className="inline-flex items-center text-xs font-semibold text-[#173F35] group-hover:text-[#C5A568]">
                        Details <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table / List View */
            <div className="bg-[#FAF9F5] rounded-2xl border border-[#D8D4C8] shadow-sm overflow-hidden text-left">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-[#173F35] text-[#FAF9F5] uppercase text-[10px] tracking-wider font-semibold">
                    <tr>
                      <th className="px-5 py-3.5">Ref ID</th>
                      <th className="px-5 py-3.5">Category</th>
                      <th className="px-5 py-3.5">Title & Summary</th>
                      <th className="px-5 py-3.5">Date</th>
                      <th className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ECE8DA]">
                    {displayedItems.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="hover:bg-white transition-colors cursor-pointer"
                      >
                        <td className="px-5 py-4 font-mono font-semibold text-[#89948E]">
                          {item.id}
                        </td>
                        <td className="px-5 py-4">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#ECE8DA] text-[#173F35]">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-5 py-4 space-y-0.5">
                          <p className="font-semibold text-sm text-[#173F35]">
                            {item.title}
                          </p>
                          <p className="text-[#5C6761] text-[11px] line-clamp-1">
                            {item.summary}
                          </p>
                        </td>
                        <td className="px-5 py-4 text-[#3E4641] whitespace-nowrap">
                          {item.displayDate}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(item);
                            }}
                            className="px-3 py-1.5 bg-[#173F35] text-white rounded text-[11px] font-semibold hover:bg-[#24584a] transition-colors cursor-pointer"
                          >
                            Read
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* 4. LOAD MORE / PAGINATION */}
        {hasMore && (
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF9F5] border-2 border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs"
            >
              <span>Load More Bulletins</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#89948E] mt-2">
              Showing {displayedItems.length} of {filteredItems.length} items
            </p>
          </div>
        )}

      </div>

      {/* Notice Detail Modal */}
      <NoticeModal
        notice={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

    </div>
  );
}
