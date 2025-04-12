import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Building2, Filter, X, ArrowRight, Clock, ChevronDown, SearchIcon } from 'lucide-react';
import apiconfig from '../../configurations/APIConfig';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import { JobCardSkeleton } from '../ui/Skeleton/JobCardSkeleton';
import countryList from '../../lib/countryCodes';
import { useNavigate } from 'react-router-dom';

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[name="search"]');
        searchInput?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);


  const [filters, setFilters] = useState({
    search: '',
    country: '',
    state: '',
    locationType: '',
    employmentType: '',
    jobFunction: '',
    experienceLevel: '',
    salaryRange: '',
    postedWithin: '',
    sort: 'latest'
  });

  const employmentTypes = ["full-time", "part-time", "contract", "freelance"];
  const jobFunctions = [
    "administrative", "support", "it", "sales",
    "marketing", "finance", "hr", "other"
  ];
  const locationTypes = ["remote", "on-site", "hybrid"];
  const experienceLevels = [
    "entry-level",
    "mid-level",
    "senior",
    "lead",
    "executive"
  ];
  const salaryRanges = [
    "0-50000",
    "50000-100000",
    "100000-150000",
    "150000+"
  ];
  const postedWithinOptions = [
    "24h",
    "3days",
    "week",
    "month"
  ];

  // Count active filters
  useEffect(() => {
    let count = 0;
    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== 'search' && key !== 'sort') count++;
    });
    setActiveFilters(count);
  }, [filters]);

  // Filter reset function
  const resetFilters = () => {
    setFilters({
      search: '',
      country: '',
      state: '',
      locationType: '',
      employmentType: '',
      jobFunction: '',
      experienceLevel: '',
      salaryRange: '',
      postedWithin: '',
      sort: 'latest'
    });
    setCurrentPage(1);
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        ...filters,
        page: currentPage,
        limit: 10
      });

      const response = await fetch(`${apiconfig.nayona_api}/api/jobs?${queryParams}`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      setJobs(data.jobs);
      setTotalPages(Math.ceil(data.total / 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, currentPage]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const formatSalaryRange = (range) => {
    if (!range) return 'Not specified';

    // If range is an object with min and max properties
    if (typeof range === 'object' && range.min !== undefined && range.max !== undefined) {
      return `$${range.min.toLocaleString()} - $${range.max.toLocaleString()}`;
    }

    // If range is a string
    if (typeof range === 'string') {
      const [min, max] = range.split('-');
      if (!max) {
        // For "150000+" format
        return `$${parseInt(min).toLocaleString()}+`;
      }
      return `$${parseInt(min).toLocaleString()} - $${parseInt(max).toLocaleString()}`;
    }

    // If range is a number
    if (typeof range === 'number') {
      return `$${range.toLocaleString()}`;
    }

    return 'Not specified';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)} ${Math.floor(diffDays / 7) === 1 ? 'week' : 'weeks'} ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const FilterSection = ({ title, name, options, value, onChange }) => (
    <div className="mb-6 last:mb-0">
      <label className="text-secondary-300 mb-2 block font-medium">{title}</label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-background-100 border border-secondary-600/30 rounded-lg p-3 text-on-dark appearance-none focus:border-primary-300 focus:outline-none transition-colors"
        >
          <option value="">All {title}</option>
          {options.map(option => (
            <option key={option} value={typeof option === 'object' ? option.code : option}>
              {typeof option === 'object' ? option.name : option.charAt(0).toUpperCase() + option.slice(1).replace(/-/g, ' ')}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-300 pointer-events-none w-4 h-4" />
      </div>
    </div>
  );

  const FiltersPanel = () => (
    <div className=" p-6 rounded-xl border border-secondary-600/20">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-heading-4 font-grotesk font-bold text-on-dark flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
          {activeFilters > 0 && (
            <span className="ml-2 text-body-5 px-2 py-0.5 bg-primary-300/20 rounded-full text-primary-300">
              {activeFilters}
            </span>
          )}
        </h3>
        <button
          onClick={resetFilters}
          className="text-secondary-300 hover:text-primary-300 transition-colors text-body-4"
        >
          Reset All
        </button>
      </div>

      <FilterSection
        title="Country"
        name="country"
        options={countryList.map(country => country.name)}
        value={filters.country}
        onChange={handleFilterChange}
      />

      <FilterSection
        title="Location Type"
        name="locationType"
        options={locationTypes}
        value={filters.locationType}
        onChange={handleFilterChange}
      />

      <FilterSection
        title="Employment Type"
        name="employmentType"
        options={employmentTypes}
        value={filters.employmentType}
        onChange={handleFilterChange}
      />

      <FilterSection
        title="Job Function"
        name="jobFunction"
        options={jobFunctions}
        value={filters.jobFunction}
        onChange={handleFilterChange}
      />

      <FilterSection
        title="Experience Level"
        name="experienceLevel"
        options={experienceLevels}
        value={filters.experienceLevel}
        onChange={handleFilterChange}
      />

      <FilterSection
        title="Salary Range"
        name="salaryRange"
        options={salaryRanges}
        value={filters.salaryRange}
        onChange={handleFilterChange}
      />

      <FilterSection
        title="Posted Within"
        name="postedWithin"
        options={postedWithinOptions}
        value={filters.postedWithin}
        onChange={handleFilterChange}
      />

      <FilterSection
        title="Sort By"
        name="sort"
        options={[
          { code: 'latest', name: 'Most Recent' },
          { code: 'oldest', name: 'Oldest First' },
          { code: 'salary-high-low', name: 'Salary: High to Low' },
          { code: 'salary-low-high', name: 'Salary: Low to High' }
        ]}
        value={filters.sort}
        onChange={handleFilterChange}
      />
    </div>
  );

  const ActiveFilterBadges = () => {
    const activeFilterEntries = Object.entries(filters).filter(([key, value]) =>
      value && key !== 'search' && key !== 'sort'
    );

    if (activeFilterEntries.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {activeFilterEntries.map(([key, value]) => {
          let displayValue = value;

          // Format display values for better readability
          if (key === 'salaryRange') {
            displayValue = formatSalaryRange(value);
          } else if (key === 'employmentType' || key === 'locationType' || key === 'experienceLevel') {
            displayValue = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');
          } else if (key === 'postedWithin') {
            const labels = {
              '24h': 'Last 24 hours',
              '3days': 'Last 3 days',
              'week': 'Last week',
              'month': 'Last month'
            };
            displayValue = labels[value] || value;
          }

          return (
            <div
              key={key}
              className="flex items-center gap-1 bg-primary-300/10 text-primary-300 px-3 py-1 rounded-full text-body-5"
            >
              <span>{displayValue}</span>
              <button
                onClick={() => setFilters(prev => ({ ...prev, [key]: '' }))}
                className="hover:text-primary-400 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          );
        })}

        <button
          onClick={resetFilters}
          className="text-secondary-300 hover:text-primary-300 transition-colors text-body-5 underline"
        >
          Clear All
        </button>
      </div>
    );
  };

  return (
    <section className="dark-section w-full min-h-screen bg-background-100 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-32 ">
        <Heading
          title="Find Your Next Opportunity"
          description="Browse open positions and discover your perfect career match"
        />

        {/* Search Bar */}
        <form onSubmit={(e) => e.preventDefault()} className="mt-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Enhanced Search Bar */}
            <div className="flex-1 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-secondary-300">
                <Search className="w-5 h-5 text-on-dark" />
                <div className="h-5 w-px bg-secondary-600/30 group-hover:bg-secondary-600/50 transition-colors" />
              </div>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search job titles, skills, or keywords..."
                className="w-full pl-16 pr-4 py-4 bg-background-100 backdrop-blur-sm border border-secondary-600 rounded-xl text-on-dark placeholder:text-secondary-300/70 focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-300/10 hover:border-secondary-600/40 transition-all duration-300"
              />
              <kbd className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-1 px-2 py-0.5 text-xs text-secondary-300/70 bg-secondary-600/10 rounded border border-secondary-600/20">
                <span className="text-[10px]">⌘</span>
                <span>K</span>
              </kbd>
            </div>

            {/* Sort and Filter Controls */}
            <div className="flex gap-3">
              <div className="relative flex-shrink-0">
                <FilterSection
                  title=""
                  name="sort"
                  options={[
                    { code: 'latest', name: 'Most Recent' },
                    { code: 'oldest', name: 'Oldest First' },
                    { code: 'salary-high-low', name: 'Salary: High to Low' },
                    { code: 'salary-low-high', name: 'Salary: Low to High' }
                  ]}
                  value={filters.sort}
                  onChange={handleFilterChange}
                />
              </div>

              <Button
                text={
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    <span className="hidden sm:inline">Filters</span>
                    {activeFilters > 0 && (
                      <span className="bg-primary-300/20 text-primary-300 px-2 py-0.5 rounded-full text-xs font-medium">
                        {activeFilters}
                      </span>
                    )}
                  </div>
                }
                theme="dark"
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden flex-shrink-0 py-3 hover:bg-background-200/50 transition-colors"
              />
            </div>
          </div>

          <ActiveFilterBadges />
        </form>

        <div className="mt-8 lg:mt-12 grid lg:grid-cols-12 gap-8">
          {/* Desktop Filters */}
          <div className="lg:col-span-3 hidden lg:block sticky top-8 self-start">
            <FiltersPanel />
          </div>

          {/* Mobile Filters */}
          {showMobileFilters && (
            <div className="fixed inset-0 bg-background-100 z-50 lg:hidden overflow-auto pt-6 px-4 pb-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-heading-4 font-grotesk font-bold text-on-dark">Filter Jobs</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 rounded-full bg-background-200/50 text-secondary-300 hover:bg-background-200 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <FiltersPanel />
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-100 border-t border-secondary-600/20">
                <div className="flex gap-4">
                  <button
                    onClick={resetFilters}
                    className="flex-1 py-3 text-center text-secondary-300 border border-secondary-600/30 rounded-xl hover:border-secondary-300 transition-colors"
                  >
                    Reset All
                  </button>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="flex-1 py-3 text-center bg-primary-300 text-on-dark rounded-xl hover:bg-primary-400 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="lg:col-span-9">
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <JobCardSkeleton key={i} />
                ))}
              </div>
            ) : error ? (
              <div className="text-red-500 bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <p className="font-medium">Error loading jobs</p>
                <p className="mt-1 text-body-4">{error}</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-16 px-6 bg-background-200/30 rounded-xl border border-secondary-600/20">
                <div className="max-w-md mx-auto">
                  <Search className="w-12 h-12 mx-auto text-secondary-300 mb-4" />
                  <h3 className="text-heading-4 font-grotesk font-bold text-on-dark mb-2">No jobs found</h3>
                  <p className="text-secondary-300 mb-6">No jobs match your current search criteria. Try adjusting your filters or search query.</p>
                  <Button text="Reset Filters" theme="dark" onClick={resetFilters} />
                </div>
              </div>
            ) : (
              <div className="space-y-4">


                {jobs.map(job => (
                  <div
                    key={job._id}
                    className="group bg-background-200/30 backdrop-blur-sm rounded-xl hover:bg-background-200/50 transition-all duration-300 border border-secondary-600/20 hover:border-secondary-600/40 overflow-hidden hover:shadow-lg hover:shadow-primary-300/5"
                  >
                    <div className="p-8">
                      {/* Header Section */}
                      <div className="flex justify-between items-start gap-6">
                        <div className="flex-1">
                          <h3 className="text-heading-4 font-grotesk font-bold text-on-dark group-hover:text-primary-300 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-2 text-secondary-300">
                            <div className="flex items-center">
                              <Building2 className="w-4 h-4 mr-1.5" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1.5" />
                              <span>Posted {formatDate(job.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-4 py-1.5 bg-primary-300/10 text-primary-300 rounded-full text-body-4 font-medium">
                            {job.employmentType.charAt(0).toUpperCase() + job.employmentType.slice(1).replace(/-/g, ' ')}
                          </span>
                          <span className="text-body-5 px-3 py-1 bg-secondary-600/10 rounded-full text-secondary-300">
                            {job.status === 'active' ? 'Active' : 'Closed'}
                          </span>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-secondary-300 mt-0.5" />
                          <div>
                            <p className="text-secondary-300 text-body-5 mb-1">Location</p>
                            <p className="text-on-dark">
                              {[job.location?.country, job.location?.state].filter(Boolean).join(', ')}
                              <span className="block text-primary-300 text-body-5 mt-0.5">
                                {job.location?.type.charAt(0).toUpperCase() + job.location?.type.slice(1)}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Briefcase className="w-5 h-5 text-secondary-300 mt-0.5" />
                          <div>
                            <p className="text-secondary-300 text-body-5 mb-1">Department</p>
                            <p className="text-on-dark capitalize">{job.jobFunction.replace(/-/g, ' ')}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-secondary-300 mt-0.5" />
                          <div>
                            <p className="text-secondary-300 text-body-5 mb-1">Application Deadline</p>
                            <p className="text-on-dark">
                              {job.applicationDeadline
                                ? new Date(job.applicationDeadline).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })
                                : 'Open until filled'
                              }
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Required Skills */}
                      {job.requiredSkills && job.requiredSkills.length > 0 && (
                        <div className="mt-6">
                          <p className="text-secondary-300 text-body-5 mb-2">Required Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {job.requiredSkills.map(skill => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-background-200/50 text-secondary-300 rounded-full text-body-5 border border-secondary-600/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex justify-between items-center mt-6 pt-6 border-t border-secondary-600/10">
                        <div className="flex flex-col">
                          <span className="text-secondary-300 text-body-5 mb-1">Salary Range</span>
                          <span className="text-primary-300 font-medium">
                            {formatSalaryRange(job.salaryRange)}
                          </span>
                        </div>
                        <button
                          onClick={() => navigate(`/careers/job/${job.slug}`)}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary-300/10 text-primary-300 hover:bg-primary-300 hover:text-on-dark transition-all duration-300"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            )}

            {/* Pagination */}
            {!loading && !error && totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-secondary-600/30 text-secondary-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-secondary-300 transition-colors"
                >
                  Previous
                </button>

                {totalPages <= 5 ? (
                  [...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`min-w-[40px] px-4 py-2 rounded-lg ${currentPage === i + 1
                        ? 'bg-primary-300 text-on-dark border border-primary-300'
                        : 'border border-secondary-600/30 text-secondary-300 hover:border-secondary-300'
                        } transition-colors`}
                    >
                      {i + 1}
                    </button>
                  ))
                ) : (
                  <>
                    {[...Array(Math.min(3, currentPage))].map((_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`min-w-[40px] px-4 py-2 rounded-lg ${currentPage === pageNum
                            ? 'bg-primary-300 text-on-dark border border-primary-300'
                            : 'border border-secondary-600/30 text-secondary-300 hover:border-secondary-300'
                            } transition-colors`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    {currentPage > 3 && <span className="self-end mb-2 mx-1 text-secondary-300">...</span>}

                    {currentPage > 3 && currentPage < totalPages - 2 && (
                      <button
                        className="min-w-[40px] px-4 py-2 rounded-lg bg-primary-300 text-on-dark border border-primary-300"
                      >
                        {currentPage}
                      </button>
                    )}

                    {currentPage < totalPages - 2 && <span className="self-end mb-2 mx-1 text-secondary-300">...</span>}

                    {[...Array(Math.min(3, totalPages - Math.max(currentPage - 1, 3)))].map((_, i) => {
                      const pageNum = totalPages - 2 + i;
                      if (pageNum <= 0) return null;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`min-w-[40px] px-4 py-2 rounded-lg ${currentPage === pageNum
                            ? 'bg-primary-300 text-on-dark border border-primary-300'
                            : 'border border-secondary-600/30 text-secondary-300 hover:border-secondary-300'
                            } transition-colors`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </>
                )}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-secondary-600/30 text-secondary-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-secondary-300 transition-colors"
                >
                  Next
                </button>
              </div>
            )}

            {/* Results Summary */}
            {!loading && !error && jobs.length > 0 && (
              <div className="mt-6 text-center text-secondary-300 text-body-4">
                Showing {(currentPage - 1) * 10 + 1} - {Math.min(currentPage * 10, (currentPage - 1) * 10 + jobs.length)} of many job openings
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchPage;