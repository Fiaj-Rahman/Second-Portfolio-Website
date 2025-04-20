import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCode, FiCloud, FiDatabase, FiDownload } from "react-icons/fi";

const certificates = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-6X2P-1Q9Z",
    category: "cloud",
    skills: ["Cloud Architecture", "AWS Services", "Solution Design"],
    pdfUrl: "/certificates/aws-certificate.pdf"
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2024",
    credentialId: "GCP-8Y4R-3T6W",
    category: "cloud",
    skills: ["GCP Infrastructure", "System Design", "Security"],
    pdfUrl: "/certificates/google-cloud-certificate.pdf"
  },
  {
    title: "React Professional Certification",
    issuer: "Meta",
    date: "2024",
    credentialId: "META-REACT-2024",
    category: "frontend",
    skills: ["React 18", "State Management", "Performance Optimization"],
    pdfUrl: "/certificates/react-certificate.pdf"
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "MS-AZ-305",
    category: "cloud",
    skills: ["Azure Services", "Migration", "Cost Management"],
    pdfUrl: "/certificates/azure-certificate.pdf"
  },
  {
    title: "Python Developer Professional Certificate",
    issuer: "Python Institute",
    date: "2023",
    credentialId: "PCEP-32-101",
    category: "backend",
    skills: ["Advanced Python", "OOP", "Algorithm Design"],
    pdfUrl: "/certificates/python-certificate.pdf"
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    date: "2023",
    credentialId: "IBM-DS-2023",
    category: "data",
    skills: ["Machine Learning", "Data Analysis", "Python"],
    pdfUrl: "/certificates/ibm-certificate.pdf"
  }
];

const CategoryIcon = ({ category }) => {
  const iconClass = "w-6 h-6 text-white";
  switch (category) {
    case "cloud":
      return <FiCloud className={iconClass} />;
    case "frontend":
      return <FiCode className={iconClass} />;
    case "data":
      return <FiDatabase className={iconClass} />;
    default:
      return <FiAward className={iconClass} />;
  }
};

const CertificateCard = ({ certificate }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300"
  >
    <div className="p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
            <CategoryIcon category={certificate.category} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{certificate.title}</h3>
            <p className="text-gray-400 text-sm">{certificate.issuer}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {certificate.skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-700 pt-6">
        <div className="flex gap-6">
          <div>
            <p className="text-sm text-gray-400">Issued</p>
            <p className="text-gray-300 font-medium">{certificate.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Credential ID</p>
            <p className="text-gray-300 font-medium">{certificate.credentialId}</p>
          </div>
        </div>
        
        <motion.a
          href={certificate.pdfUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium text-white hover:from-purple-500 hover:to-blue-500 transition-all"
        >
          <FiDownload className="w-4 h-4" />
          Download
        </motion.a>
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

const Certificate_Section = () => {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-widest text-purple-500 uppercase">
            Verified Certifications
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Professional Credentials
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certifications validating technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-lg font-semibold text-white hover:shadow-xl transition-all duration-300"
          >
            View All Certifications
            <span className="ml-3">→</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Certificate_Section;