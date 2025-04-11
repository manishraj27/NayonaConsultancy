import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Building2, Filter, X } from 'lucide-react';
import apiconfig from '../../configurations/APIConfig';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import { JobCardSkeleton } from '../ui/Skeleton/JobCardSkeleton';
import countryList from '../../lib/countryCodes';

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
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

  const FilterSection = ({ title, name, options, value, onChange }) => (
    <div className="mb-6">
      <label className="text-secondary-300 mb-2 block">{title}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-background-300/50 rounded-lg p-3 text-on-dark"
      >
        <option value="">All {title}</option>
        {options.map(option => (
          <option key={option} value={typeof option === 'object' ? option.code : option}>
            {typeof option === 'object' ? option.name : option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );

  const FiltersPanel = () => (
    <div className="bg-background-200/50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-heading-4 font-grotesk text-on-dark flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </h3>
        <button
          onClick={resetFilters}
          className="text-secondary-300 hover:text-primary-300 transition-colors"
        >
          Reset
        </button>
      </div>

      <FilterSection
        title="Country"
        name="country"
        options={countryList}
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
        options={['latest', 'oldest', 'salary-high-low', 'salary-low-high']}
        value={filters.sort}
        onChange={handleFilterChange}
      />
    </div>
  );

  return (
    <section className="dark-section rounded-b-3xl overflow-hidden w-full min-h-screen bg-background-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-32">
        <Heading 
          title="Find Your Next Opportunity" 
          description="Career Opportunities"
        />

        {/* Search Bar */}
        <form onSubmit={(e) => e.preventDefault()} className="mt-8">
          <div className="flex gap-4 items-center bg-background-200/50 p-4 rounded-xl">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-300" />
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search jobs..."
                className="w-full pl-12 pr-4 py-3 bg-background-300/50 rounded-lg text-on-dark focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
            </div>
            <Button 
              text="Filter"
              theme="dark"
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden"
            />
          </div>
        </form>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Desktop Filters */}
          <div className="lg:col-span-3 hidden lg:block">
            <FiltersPanel />
          </div>

          {/* Mobile Filters */}
          {showMobileFilters && (
            <div className="fixed inset-0 bg-background-100 z-50 lg:hidden overflow-auto p-4">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="absolute top-4 right-4 text-secondary-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="mt-12">
                <FiltersPanel />
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
              <div className="text-red-500 bg-red-500/10 p-4 rounded-xl">
                {error}
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-12 text-secondary-300">
                No jobs found matching your criteria
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map(job => (
                  <div
                    key={job._id}
                    className="bg-background-200/50 p-6 rounded-xl hover:bg-background-200/70 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-heading-4 font-grotesk text-on-dark">
                        {job.title}
                      </h3>
                      <span className="text-primary-300 text-sm px-3 py-1 bg-primary-300/10 rounded-full">
                        {job.employmentType}
                      </span>
                    </div>
                    <div className="flex gap-4 text-secondary-300 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.jobFunction}
                      </span>
                    </div>
                    <p className="text-secondary-300 mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    <Button 
                      text="View Details" 
                      theme="dark" 
                      onClick={() => navigate(`/careers/${job.slug}`)} 
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-background-200/50 text-secondary-300 disabled:opacity-50"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === i + 1
                        ? 'bg-primary-300 text-on-dark'
                        : 'bg-background-200/50 text-secondary-300'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-background-200/50 text-secondary-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchPage;