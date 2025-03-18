export const SeriveCardContent = ({ serviceType }) => {

  const svgMap = {
    "Implementation": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
      <g fill="none" fill-rule="evenodd">
    <polygon fill="#FFDD95" points="31 5 55.249 19 55.249 47 31 61 6.751 47 6.751 19"/>
    <circle cx="31" cy="5" r="3" fill="#E43535"/>
    <circle cx="31" cy="60" r="3" fill="#E43535"/>
    <circle cx="55" cy="47" r="3" fill="#E43535"/>
    <circle cx="7" cy="47" r="3" fill="#E43535"/>
    <circle cx="55" cy="19" r="3" fill="#E43535"/>
    <circle cx="7" cy="19" r="3" fill="#E43535"/>
    <path fill="#22BA8E" d="M23.3800958,28.2085229 L21.8076118,26.636039 L24.636039,23.8076118 L26.2085229,25.3800958 C27.0544216,24.8470663 27.9952899,24.4509973 29,24.2230164 L29,22 L33,22 L33,24.2230164 C34.0047101,24.4509973 34.9455784,24.8470663 35.7914771,25.3800958 L37.363961,23.8076118 L40.1923882,26.636039 L38.6199042,28.2085229 C39.1529337,29.0544216 39.5490027,29.9952899 39.7769836,31 L42,31 L42,35 L39.7769836,35 C39.5490027,36.0047101 39.1529337,36.9455784 38.6199042,37.7914771 L40.1923882,39.363961 L37.363961,42.1923882 L35.7914771,40.6199042 C34.9455784,41.1529337 34.0047101,41.5490027 33,41.7769836 L33,44 L29,44 L29,41.7769836 C27.9952899,41.5490027 27.0544216,41.1529337 26.2085229,40.6199042 L24.636039,42.1923882 L21.8076118,39.363961 L23.3800958,37.7914771 C22.8470663,36.9455784 22.4509973,36.0047101 22.2230164,35 L20,35 L20,31 L22.2230164,31 C22.4509973,29.9952899 22.8470663,29.0544216 23.3800958,28.2085229 Z M31,36 C32.6568542,36 34,34.6568542 34,33 C34,31.3431458 32.6568542,30 31,30 C29.3431458,30 28,31.3431458 28,33 C28,34.6568542 29.3431458,36 31,36 Z"/>
  </g>
    </svg>
    ),
    "Financial Solutions": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
<g fill="none" fill-rule="evenodd">
    <rect width="54" height="33" x="4" y="12" fill="#FFDD95"/>
    <rect width="60" height="4" x="1" y="8" fill="#BD7575" rx="2"/>
    <rect width="60" height="4" x="1" y="45" fill="#BD7575" rx="2"/>
    <rect width="4" height="11" x="29" y="49" fill="#9D4C4C"/>
    <rect width="12" height="4" x="25" y="58" fill="#BD7575"/>
    <polyline stroke="#4796E7" stroke-linecap="round" stroke-width="2" points="11 36.869 24.072 26.562 34.838 34.455 50.627 17.779"/>
    <circle cx="24" cy="27" r="3" fill="#4796E7"/>
    <circle cx="35" cy="34" r="3" fill="#4796E7"/>
    <circle cx="51" cy="17" r="3" fill="#4796E7"/>
    <circle cx="11" cy="36" r="3" fill="#4796E7"/>
  </g>
      </svg>
    ),
    "Data Management": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
        <defs>
          <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#A7F3D0", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#34D399", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Database Layers */}
        <ellipse cx="50" cy="30" rx="35" ry="15" fill="#E5E7EB" stroke="#374151" strokeWidth="2" />
        <ellipse cx="50" cy="50" rx="35" ry="15" fill="url(#dataGrad)" stroke="#34D399" strokeWidth="2" />
        <ellipse cx="50" cy="70" rx="35" ry="15" fill="#E5E7EB" stroke="#374151" strokeWidth="2" opacity="0.8" />
        {/* Connecting Lines */}
        <path d="M30 30 Q50 40 70 30" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M30 50 Q50 60 70 50" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="5,5" />
        <path d="M30 70 Q50 80 70 70" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="5,5" />
      </svg>
    ),
    "Cloud Services": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#BFDBFE", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#60A5FA", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Cloud Shape */}
        <path
          d="M20 60 C20 45 30 35 45 35 C55 30 70 35 80 45 C90 45 95 55 90 65 C95 75 85 85 75 85 H25 C15 85 10 75 20 60 Z"
          fill="url(#cloudGrad)"
          stroke="#2563EB"
          strokeWidth="2"
        />
        {/* Upload Arrow */}
        <path
          d="M45 55 L55 55 L55 65 L65 65 L50 80 L35 65 L45 65 Z"
          fill="#2563EB"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        {/* Small Node */}
        <circle cx="50" cy="45" r="5" fill="#3B82F6" stroke="#2563EB" strokeWidth="1" />
      </svg>
    ),
    "Reporting": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
        <defs>
          <linearGradient id="reportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#DDD6FE", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Background */}
        <rect x="15" y="15" width="70" height="70" rx="8" fill="#E5E7EB" stroke="#374151" strokeWidth="2" />
        {/* Bars */}
        <rect x="25" y="45" width="15" height="30" rx="3" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1" />
        <rect x="45" y="30" width="15" height="45" rx="3" fill="url(#reportGrad)" stroke="#8B5CF6" strokeWidth="1" />
        <rect x="65" y="55" width="15" height="20" rx="3" fill="#A7F3D0" stroke="#34D399" strokeWidth="1" />
        {/* Magnifying Glass */}
        <circle cx="75" cy="25" r="8" fill="none" stroke="#2563EB" strokeWidth="2" />
        <path d="M80 30 L85 35" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Support": (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
          <g fill="none" fill-rule="evenodd">
    <path fill="#5B68C0" d="M8,50.9206814 C8,48.707202 9.77500008,46.6994337 11.9692715,46.4356406 L31.875,44.0425936 L51.7807285,46.4356406 C53.9728966,46.6991808 55.75,48.7006188 55.75,50.9206814 L55.75,63.0425936 L8,63.0425936 L8,50.9206814 Z"/>
    <path fill="#FFDD95" d="M23.9659091,41.0820517 C19.997906,37.3171352 17.375,31.2233999 17.375,26.1331692 C17.375,18.1250403 23.8668711,11.6331692 31.875,11.6331692 C39.8831289,11.6331692 46.375,18.1250403 46.375,26.1331692 C46.375,31.2233999 43.752094,37.3171352 39.7840909,41.0820517 L39.7840909,49.9058965 C39.7840909,49.9058965 34.4224889,51.8154815 31.875,51.8154815 C29.3275111,51.8154815 23.9659091,49.9058965 23.9659091,49.9058965 L23.9659091,41.0820517 Z"/>
    <path fill="#FFAF40" d="M17.875,14.5 C17.875,11.4624339 20.3328519,9 23.3759961,9 L49.875,9 L49.875,14.5 C49.875,17.5375661 47.4171481,20 44.3740039,20 L17.875,20 L17.875,14.5 Z"/>
    <path stroke="#979797" stroke-linecap="round" stroke-width="2" d="M15,28 L15,12.9911656 L15,12.9911656 C15,9.13005145 17.5416212,6 20.6716936,6 L43.3283064,6 C46.4606963,6 49,9.12869969 49,12.9911656 L49,28"/>
    <path stroke="#868686" stroke-linecap="round" stroke-width="2" d="M38,46 L38,46 C47.9411255,46 56,37.9411255 56,28"/>
    <rect width="9" height="2" x="29" y="45" stroke="#FF5EAC" stroke-width="2" rx="1"/>
    <rect width="8" height="17" x="46" y="18" fill="#FF5EAC" rx="2"/>
    <rect width="8" height="17" x="10" y="18" fill="#FF5EAC" rx="2"/>
    <rect width="1" height="5" x="55" y="24" stroke="#979797" stroke-width="2"/>
  </g>
      </svg>
    ),
  };
    
    const contentMap = {
      "Implementation": (
        <>
          <div className="text-center mb-8">
            {svgMap["Implementation"]}
            <h2 className="text-2xl md:text-3xl font-medium font-open-sans text-on-light mb-4">Oracle EPM Implementation Excellence</h2>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold font-grotesk text-primary-300">
                End-to-end Oracle EPM implementation for your business needs.
              </span>{" "}
              Our team of certified Oracle EPM experts will guide you through the entire implementation process, from initial assessment and planning to deployment and post-implementation support. We follow industry best practices to ensure a smooth transition and optimal performance.
            </p>
            <ul className="mt-6 space-y-3 text-on-dark text-base md:text-xl font-grotesk max-w-3xl mx-auto">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Requirements gathering and gap analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Solution architecture and design</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Development and configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Testing and quality assurance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Deployment and go-live support</span>
              </li>
            </ul>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Our implementation methodology ensures project success.
              </span>{" "}
              We utilize a proven implementation framework that includes requirement gathering, solution design, development, testing, and deployment. Our approach minimizes risks and ensures that your EPM solution meets your specific business requirements.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Our 5-Phase Implementation Approach:</h3>
              <ol className="space-y-4 text-on-dark text-base md:text-lg">
                <li className="flex">
                  <span className="font-bold text-blue-400 mr-2">1.</span>
                  <div>
                    <span className="font-semibold font-open-sans">Discovery & Planning</span> - Analyze current processes, define requirements, and develop project plan
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-blue-400 mr-2">2.</span>
                  <div>
                    <span className="font-semibold font-open-sans">Design & Architecture</span> - Design application structure, data flows, integration points, and security model
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-blue-400 mr-2">3.</span>
                  <div>
                    <span className="font-semibold font-open-sans">Build & Configure</span> - Develop custom applications, configure modules, and establish integrations
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-blue-400 mr-2">4.</span>
                  <div>
                    <span className="font-semibold font-open-sans">Testing & Validation</span> - Execute unit tests, integration tests, user acceptance testing, and performance testing
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-blue-400 mr-2">5.</span>
                  <div>
                    <span className="font-semibold font-open-sans">Deployment & Support</span> - Deploy to production, provide go-live support, and transition to ongoing maintenance
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Tailored solutions for every Oracle EPM module.
              </span>{" "}
              Whether you need Planning, Financial Consolidation and Close, Account Reconciliation, or Profitability and Cost Management, our team has the expertise to implement and customize the solution to fit your organization's specific needs and processes.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                <h4 className="font-open-sans text-blue-600 text-lg mb-3">Planning & Budgeting</h4>
                <p className="text-on-light font-grotesk">Streamline your planning cycles with automated workflows, driver-based forecasting, and scenario modeling capabilities.</p>
              </div>
              <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                <h4 className="font-open-sans text-blue-600 text-lg mb-3">Financial Consolidation</h4>
                <p className="text-on-light font-grotesk">Accelerate your close process with automated consolidations, currency translations, and intercompany eliminations.</p>
              </div>
              <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                <h4 className="font-open-sans text-blue-600 text-lg mb-3">Account Reconciliation</h4>
                <p className="text-on-light font-grotesk">Improve accuracy and compliance with automated account reconciliations, balance comparisons, and variance analysis.</p>
              </div>
              <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                <h4 className="font-open-sans text-blue-600 text-lg mb-3">Profitability Analysis</h4>
                <p className="text-on-light font-grotesk">Gain insights into product, customer, and channel profitability with advanced allocation methodologies and cost modeling.</p>
              </div>
            </div>
          </div>
        </>
      ),
      "Financial Solutions": (
        <>
          <div className="text-center mb-8">
            {svgMap["Financial Solutions"]}
            <h2 className="text-2xl md:text-3xl font-medium font-open-sans text-on-light mb-4">Strategic Financial Planning Solutions</h2>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Transform your financial planning and analysis with Oracle EPM.
              </span>{" "}
              Our financial planning solutions help you streamline budgeting, forecasting, and reporting processes. We implement tools that provide real-time insights, enabling your finance team to make data-driven decisions quickly and efficiently.
            </p>
            <div className="mt-6 bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Key Benefits:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-xl font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Reduce planning cycle times by up to 70%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Improve forecast accuracy by 25-40%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Decrease budgeting process costs by 50%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Enable real-time visibility into performance</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Advanced scenario modeling and sensitivity analysis.
              </span>{" "}
              Our financial solutions enable you to create multiple scenarios and perform what-if analyses to better prepare for different business conditions. This capability helps you identify risks and opportunities in advance and develop appropriate strategies.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Scenario Planning Capabilities:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-lg font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Multi-dimensional Modeling</span> - Create scenarios across any combination of business dimensions (products, regions, channels)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Driver-based Forecasting</span> - Utilize business drivers to automatically cascade changes throughout your financial models
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Sensitivity Analysis</span> - Test how changes in key variables impact overall financial performance
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Monte Carlo Simulations</span> - Perform statistical analyses to evaluate risks and probabilities across multiple scenarios
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Seamless integration with your existing financial systems.
              </span>{" "}
              Our solutions integrate with your ERP, CRM, and other financial systems to provide a unified view of your financial data. This integration eliminates manual data entry, reduces errors, and provides a single source of truth for financial reporting.
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-4">Supported Integration Points:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Oracle ERP Cloud</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Oracle NetSuite</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">SAP</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Workday</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Salesforce</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Microsoft Dynamics</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      "Data Management": (
        <>
          <div className="text-center mb-8">
            {svgMap["Data Management"]}
            <h2 className="text-2xl md:text-3xl font-medium font-open-sans text-on-light mb-4">Data Integration & Management Solutions</h2>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Comprehensive data integration and management solutions.
              </span>{" "}
              Our data management services ensure that your Oracle EPM applications have access to accurate, timely, and relevant data. We implement robust data integration frameworks that connect to various source systems, transforming and loading data efficiently.
            </p>
            <div className="mt-6 bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Key Features:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-xl font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Seamless integration with ERP, CRM, and other systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Automated data validation and cleansing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Real-time data synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Scalable data architecture for growing needs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Advanced data governance and quality assurance.
              </span>{" "}
              We implement robust data governance frameworks within your EPM environment to ensure data quality, consistency, and compliance. Our solutions include validation rules, data lineage tracking, and audit trails to maintain the integrity of your financial data.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Data Governance Framework:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-lg font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Data Quality Management</span> - Implement validation rules, data cleansing, and enrichment processes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Data Lineage & Auditing</span> - Track data flow from source to report for transparency and compliance
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Role-based Access Control</span> - Ensure data security with granular access permissions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Metadata Management</span> - Maintain a centralized repository of data definitions and business rules
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Automated data workflows and orchestration.
              </span>{" "}
              We design and implement automated data workflows that streamline the data management process. These workflows include scheduling, dependencies, notifications, and error handling, ensuring that your EPM applications always have the most up-to-date information.
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-4">Workflow Automation Benefits:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Efficiency Gains</h4>
                  <p className="text-on-light font-grotesk">Reduce manual effort and processing time by up to 80% with automated workflows.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Error Reduction</h4>
                  <p className="text-on-light font-grotesk">Minimize data errors and inconsistencies with automated validation and error handling.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Real-time Updates</h4>
                  <p className="text-on-light font-grotesk">Ensure your EPM applications always reflect the latest data with real-time synchronization.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Scalability</h4>
                  <p className="text-on-light font-grotesk">Easily scale your data processes as your business grows without additional overhead.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      "Cloud Services": (
        <>
          <div className="text-center mb-8">
            {svgMap["Cloud Services"]}
            <h2 className="text-2xl md:text-3xl font-medium font-open-sans text-on-light mb-4">Cloud Migration & Optimization Services</h2>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Seamless migration to Oracle EPM Cloud.
              </span>{" "}
              Our cloud migration services help you transition from on-premises EPM applications to Oracle EPM Cloud. We follow a structured approach that includes assessment, planning, migration, and validation to ensure a smooth transition with minimal disruption.
            </p>
            <div className="mt-6 bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Migration Process:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-xl font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Comprehensive assessment of current environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Customized migration plan and timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Data migration and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Post-migration support and optimization</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Hybrid cloud solutions for optimal performance.
              </span>{" "}
              We design and implement hybrid cloud architectures that combine the benefits of both on-premises and cloud environments. This approach allows you to leverage existing investments while taking advantage of cloud capabilities for scalability and agility.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Hybrid Cloud Benefits:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-lg font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Flexibility</span> - Choose the best deployment model for each application
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Cost Efficiency</span> - Optimize costs by leveraging existing infrastructure
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Scalability</span> - Easily scale resources up or down based on demand
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Security</span> - Maintain control over sensitive data while benefiting from cloud innovation
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Continuous cloud optimization and enhancement.
              </span>{" "}
              Our cloud services include ongoing optimization and enhancement of your Oracle EPM Cloud environment. We monitor performance, implement best practices, and apply the latest updates to ensure that your cloud investment delivers maximum value.
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-4">Optimization Services:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Performance Tuning</h4>
                  <p className="text-on-light font-grotesk">Optimize query performance, data loads, and system responsiveness.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Cost Management</h4>
                  <p className="text-on-light font-grotesk">Monitor and optimize cloud resource usage to control costs.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Security Updates</h4>
                  <p className="text-on-light font-grotesk">Implement the latest security patches and best practices.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Feature Adoption</h4>
                  <p className="text-on-light font-grotesk">Leverage new features and capabilities as they become available.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      "Reporting": (
        <>
          <div className="text-center mb-8">
            {svgMap["Reporting"]}
            <h2 className="text-2xl md:text-3xl font-medium font-open-sans text-on-light mb-4">Custom Reporting & Analytics Solutions</h2>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Transform data into actionable insights with tailored reporting.
              </span>{" "}
              Our custom reporting solutions are designed to meet the unique needs of your organization, providing stakeholders with the right information at the right time. Whether you need executive dashboards, operational reports, or ad-hoc analytics, we deliver solutions that drive informed decision-making.
            </p>
            <div className="mt-6 bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Key Features:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-xl font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Interactive dashboards with real-time data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Customizable reports for different user roles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Drill-down capabilities for detailed analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Automated report generation and distribution</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Advanced visualization tools for better insights.
              </span>{" "}
              We leverage cutting-edge visualization tools to create intuitive and interactive reports. From bar charts and heatmaps to trend analysis and predictive analytics, our solutions make complex data easy to understand and act upon.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Visualization Capabilities:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-lg font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Dynamic Dashboards</span> - Real-time updates with drag-and-drop functionality
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Predictive Analytics</span> - Forecast trends and identify opportunities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Geospatial Mapping</span> - Visualize data on maps for location-based insights
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Custom Themes</span> - Match your organization's branding and style
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Seamless integration with your data sources.
              </span>{" "}
              Our reporting solutions integrate with your existing data sources, including ERP systems, CRM platforms, and cloud databases. This ensures that your reports are always up-to-date and reflect the latest information.
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-4">Supported Data Sources:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Oracle ERP Cloud</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Salesforce</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Microsoft Dynamics</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">SAP</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Workday</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-4 rounded-lg text-center shadow-sm">
                  <p className="font-medium font-grotesk text-blue-600">Google BigQuery</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      "Support": (
        <>
          <div className="text-center mb-8">
            {svgMap["Support"]}
            <h2 className="text-2xl md:text-3xl font-medium font-open-sans text-on-light mb-4">Comprehensive Training & Support Services</h2>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Empower your team with expert training programs.
              </span>{" "}
              We offer customized training sessions tailored to your team's needs, ensuring they have the skills and knowledge to maximize the value of your Oracle EPM investment. From beginner to advanced levels, our training covers all aspects of the platform.
            </p>
            <div className="mt-6 bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Training Programs:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-xl font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>End-user training for day-to-day operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Administrator training for system management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Advanced analytics and reporting training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom workshops for specific business needs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Ongoing support to keep your systems running smoothly.
              </span>{" "}
              Our support services include proactive monitoring, troubleshooting, and regular updates to ensure your Oracle EPM applications perform optimally. We offer flexible support plans to meet your organization's needs.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-3">Support Services:</h3>
              <ul className="space-y-3 text-on-dark text-base md:text-lg font-grotesk">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">24/7 Technical Support</span> - Round-the-clock assistance for critical issues
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">System Health Checks</span> - Regular performance and security audits
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">Patch Management</span> - Timely updates and bug fixes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <span className="font-semibold font-open-sans">User Support Portal</span> - Self-service resources and FAQs
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
            <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
              <span className="font-bold text-primary-300">
                Knowledge transfer and documentation for long-term success.
              </span>{" "}
              We provide comprehensive documentation, including user manuals, technical guides, and best practices, to ensure your team can independently manage and optimize your Oracle EPM environment.
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <h3 className="font-bold font-open-sans text-primary-300 text-lg md:text-xl mb-4">Documentation & Resources:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">User Guides</h4>
                  <p className="text-on-light font-grotesk">Step-by-step instructions for end-users and administrators.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Technical Documentation</h4>
                  <p className="text-on-light font-grotesk">Detailed technical specifications and architecture diagrams.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Best Practices</h4>
                  <p className="text-on-light font-grotesk">Proven strategies for optimizing system performance.</p>
                </div>
                <div className="bg-white dark:bg-primary-text-primary-300 p-6 rounded-xl shadow-sm">
                  <h4 className="font-open-sans text-blue-600 text-lg mb-3">Video Tutorials</h4>
                  <p className="text-on-light font-grotesk">On-demand video resources for quick learning.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    };
  
    return contentMap[serviceType] || (
      <>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium font-open-sans text-on-light mb-4">Oracle EPM Solutions</h2>
        </div>
        <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
          <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
            <span className="font-bold text-primary-300">
              Expert Oracle EPM solutions for your business.
            </span>{" "}
            We specialize in delivering Oracle Enterprise Performance Management solutions that help organizations streamline their financial processes, improve decision-making, and drive business performance.
          </p>
        </div>
        <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
          <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
            <span className="font-bold text-primary-300">
              Tailored solutions for your unique needs.
            </span>{" "}
            Our team of experts works closely with you to understand your specific requirements and challenges. We then design and implement Oracle EPM solutions that address your unique business needs and help you achieve your strategic objectives.
          </p>
        </div>
        <div className="bg-secondary-700 p-8 md:p-14 rounded-3xl mb-6">
          <p className="text-on-dark text-base md:text-2xl font-grotesk max-w-3xl mx-auto">
            <span className="font-bold text-primary-300">
              Proven expertise and industry experience.
            </span>{" "}
            With years of experience in implementing Oracle EPM solutions across various industries, our team brings deep knowledge and best practices to every project. We have successfully delivered solutions for organizations of all sizes, from mid-sized businesses to large enterprises.
          </p>
        </div>
      </>
    );
  };

  