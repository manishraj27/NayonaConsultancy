export const SeriveCardContent = ({ serviceType }) => {

    const svgMap = {
      "Implementation": (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
          <rect x="10" y="20" width="80" height="60" rx="5" fill="#E5E7EB" stroke="#374151" strokeWidth="2"/>
          <rect x="20" y="30" width="60" height="10" rx="2" fill="#60A5FA"/>
          <rect x="20" y="45" width="25" height="25" rx="2" fill="#34D399"/>
          <rect x="55" y="45" width="25" height="10" rx="2" fill="#F472B6"/>
          <rect x="55" y="60" width="25" height="10" rx="2" fill="#F472B6"/>
          <circle cx="50" cy="90" r="5" fill="#374151"/>
        </svg>
      ),
      "Financial Solutions": (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
          <rect x="15" y="15" width="70" height="70" rx="5" fill="#E5E7EB" stroke="#374151" strokeWidth="2"/>
          <path d="M25 70 L25 40 L35 30 L45 50 L55 35 L65 45 L75 25 L75 70 Z" fill="#60A5FA" fillOpacity="0.7" stroke="#2563EB" strokeWidth="2"/>
          <circle cx="25" cy="40" r="3" fill="#2563EB"/>
          <circle cx="35" cy="30" r="3" fill="#2563EB"/>
          <circle cx="45" cy="50" r="3" fill="#2563EB"/>
          <circle cx="55" cy="35" r="3" fill="#2563EB"/>
          <circle cx="65" cy="45" r="3" fill="#2563EB"/>
          <circle cx="75" cy="25" r="3" fill="#2563EB"/>
          <line x1="15" y1="70" x2="85" y2="70" stroke="#374151" strokeWidth="1"/>
          <line x1="25" y1="15" x2="25" y2="85" stroke="#374151" strokeWidth="1"/>
        </svg>
      ),
      "Data Management": (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
          <ellipse cx="50" cy="25" rx="30" ry="10" fill="#E5E7EB" stroke="#374151" strokeWidth="2"/>
          <path d="M20 25 L20 45 C20 50.5 33 55 50 55 C67 55 80 50.5 80 45 L80 25" fill="none" stroke="#374151" strokeWidth="2"/>
          <ellipse cx="50" cy="45" rx="30" ry="10" fill="#A7F3D0" fillOpacity="0.6" stroke="#374151" strokeWidth="1"/>
          <path d="M20 45 L20 65 C20 70.5 33 75 50 75 C67 75 80 70.5 80 65 L80 45" fill="none" stroke="#374151" strokeWidth="2"/>
          <ellipse cx="50" cy="65" rx="30" ry="10" fill="#BFDBFE" fillOpacity="0.6" stroke="#374151" strokeWidth="1"/>
          <path d="M30 25 L40 45 M60 25 L55 45 M45 25 L35 45" stroke="#4B5563" strokeWidth="1"/>
          <path d="M30 45 L40 65 M60 45 L55 65 M45 45 L35 65" stroke="#4B5563" strokeWidth="1"/>
        </svg>
      ),
      "Cloud Services": (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
          <path d="M25 55 C25 43 35 35 45 35 C55 30 70 35 75 45 C85 45 90 55 85 65 C90 75 80 80 75 80 L35 80 C20 80 15 65 25 55Z" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2"/>
          <path d="M45 55 L55 55 L55 65 L65 65 L50 80 L35 65 L45 65 Z" fill="#60A5FA" stroke="#2563EB" strokeWidth="1.5"/>
          <circle cx="50" cy="45" r="5" fill="#3B82F6" stroke="#2563EB" strokeWidth="1"/>
          <rect x="40" y="60" width="20" height="5" rx="1" fill="#93C5FD"/>
        </svg>
      ),
      "Reporting": (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
          <rect x="15" y="15" width="70" height="70" rx="5" fill="#E5E7EB" stroke="#374151" strokeWidth="2"/>
          <rect x="25" y="25" width="30" height="20" rx="2" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1"/>
          <rect x="60" y="25" width="15" height="20" rx="2" fill="#A7F3D0" stroke="#10B981" strokeWidth="1"/>
          <rect x="25" y="55" width="50" height="20" rx="2" fill="#DDD6FE" stroke="#8B5CF6" strokeWidth="1"/>
          <line x1="30" y1="30" x2="50" y2="30" stroke="#F59E0B" strokeWidth="2"/>
          <line x1="30" y1="35" x2="45" y2="35" stroke="#F59E0B" strokeWidth="2"/>
          <line x1="30" y1="40" x2="40" y2="40" stroke="#F59E0B" strokeWidth="2"/>
          <line x1="65" y1="30" x2="70" y2="30" stroke="#10B981" strokeWidth="2"/>
          <line x1="65" y1="35" x2="70" y2="35" stroke="#10B981" strokeWidth="2"/>
          <line x1="65" y1="40" x2="70" y2="40" stroke="#10B981" strokeWidth="2"/>
          <line x1="30" y1="60" x2="70" y2="60" stroke="#8B5CF6" strokeWidth="2"/>
          <line x1="30" y1="65" x2="60" y2="65" stroke="#8B5CF6" strokeWidth="2"/>
          <line x1="30" y1="70" x2="50" y2="70" stroke="#8B5CF6" strokeWidth="2"/>
        </svg>
      ),
      "Support": (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-20 h-20 lg:w-32 lg:h-32 mx-auto mb-6">
          <circle cx="50" cy="50" r="35" fill="#E5E7EB" stroke="#374151" strokeWidth="2"/>
          <path d="M50 25 Q65 25 65 45 L65 55 Q65 75 50 75 Q35 75 35 55 L35 45 Q35 25 50 25Z" fill="#FCA5A5" fillOpacity="0.7" stroke="#EF4444" strokeWidth="1.5"/>
          <circle cx="42" cy="45" r="5" fill="#FECACA"/>
          <circle cx="58" cy="45" r="5" fill="#FECACA"/>
          <path d="M42 60 Q50 70 58 60" fill="none" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M35 50 L25 40 M65 50 L75 40" stroke="#374151" strokeWidth="2"/>
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

  