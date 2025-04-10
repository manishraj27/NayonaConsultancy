import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, MapPin, Calendar, DollarSign, 
  Building, GraduationCap, CheckCircle, 
  Users, Target, Share2, Clock, AlertCircle
} from 'lucide-react';
import Button from './Button';
import apiconfig from '../../configurations/APIConfig';
import ReactQuill from 'react-quill';
import Heading from './Heading';

const JobDetail = () => {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(`${apiconfig.nayona_api}/api/jobs/${slug}`);
        if (!response.ok) throw new Error('Job not found');
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobDetail();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: job.title,
          text: `Check out this job opportunity: ${job.title} at ${job.company}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  if (isLoading) {
    return (
        <section
        id="job-detail"
        aria-label="job-detail"
        className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full lg:py-16 py-24 min-h-screen dark-section bg-background-100"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-300"></div>
      </section>
    );
  }

  if (error) {
    return (
        <section
        id="job-detail"
        aria-label="job-detail"
        className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full lg:py-16 py-24 min-h-screen dark-section bg-background-100"
      >
        <div className="flex items-center gap-2 text-red-500 mt-32">
          <AlertCircle className="w-6 h-6" />
          <span>{error}</span>
        </div>
      </section>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section
      id="job-detail"
      aria-label="job-detail"
      className="rounded-b-3xl overflow-hidden lg:px-8 px-6 w-full lg:py-16 py-24 min-h-screen dark-section bg-background-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-32 mb-8"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-sm ${
                job.status === 'active' 
                  ? 'bg-green-500/20 text-green-500' 
                  : 'bg-red-500/20 text-red-500'
              }`}>
                {job.status?.toUpperCase()}
              </span>
              <span className="text-primary-300 font-medium">
                {job.jobFunction?.replace('-', ' ').toUpperCase()}
              </span>
            </div>
            <Heading
              title={job.title}
              description="CAREER OPPORTUNITY"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Button
            text="Apply Now"
            theme="dark"
            className="bg-primary-300 hover:bg-primary-400"
          />
          <Button
            text="Share Position"
            theme="dark"
            className="bg-background-200/50 hover:bg-background-200/70"
            onClick={handleShare}
            icon={<Share2 className="w-4 h-4" />}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <Building className="w-5 h-5 text-primary-300" />
              <h3 className="text-lg font-semibold text-on-dark">Company</h3>
            </div>
            <p className="text-secondary-300">{job.company}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-primary-300" />
              <h3 className="text-lg font-semibold text-on-dark">Function</h3>
            </div>
            <p className="text-secondary-300 capitalize">{job.jobFunction?.replace('-', ' ')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-background-200/50 backdrop-blur-sm p-6 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-primary-300" />
              <h3 className="text-lg font-semibold text-on-dark">Employment</h3>
            </div>
            <p className="text-secondary-300 capitalize">{job.employmentType?.replace('-', ' ')}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background-200/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
        >
          <div className="flex flex-wrap gap-4 text-secondary-300 mb-8 p-4 bg-background-300/20 rounded-xl">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>
                {job.location.type === 'remote' 
                  ? 'Remote' 
                  : `${job.location.state}, ${job.location.country}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-5 h-5" />
              <span className="capitalize">{job.employmentType?.replace('-', ' ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>
                {job.salaryRange 
                  ? `$${job.salaryRange.min}k - $${job.salaryRange.max}k` 
                  : 'Competitive'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Apply by: {formatDate(job.applicationDeadline)}</span>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-on-dark mb-4">About This Role</h2>
              <ReactQuill
                value={job.description || ''}
                readOnly={true}
                theme="bubble"
                modules={{ toolbar: false }}
               className="custom-quill prose prose-invert max-w-none"
              />
            </section>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-on-dark mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 text-secondary-300">
                      <CheckCircle className="w-5 h-5 text-primary-300 mt-1 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {job.requiredSkills && job.requiredSkills.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-on-dark mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {job.requiredSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary-300/10 text-primary-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {job.qualifications && job.qualifications.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-on-dark mb-4">Qualifications</h2>
                <ul className="space-y-3">
                  {job.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3 text-secondary-300">
                      <GraduationCap className="w-5 h-5 text-primary-300 mt-1 flex-shrink-0" />
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-semibold text-on-dark mb-4">How to Apply</h2>
              <div className="bg-background-300/20 rounded-xl p-6">
                <p className="text-secondary-300 mb-4">
                  Ready to join our team? Follow these steps to apply:
                </p>
                <ul className="space-y-3 text-secondary-300 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-300" />
                    <span>Review all requirements carefully</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-300" />
                    <span>Prepare your updated resume</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-300" />
                    <span>Include a cover letter highlighting your relevant experience</span>
                  </li>
                </ul>
                <Button
                  text="Submit Application"
                  theme="dark"
                  className="w-full md:w-auto bg-primary-300 hover:bg-primary-400"
                />
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobDetail;