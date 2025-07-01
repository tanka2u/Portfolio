import { useState } from "react";
import { certifications } from "../../constants";

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => handleOpenModal(cert)}
            className="border border-white bg-gray-900 rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 bg-white rounded-xl">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm">
                Issued by <span className="font-medium">{cert.issuer}</span> —{" "}
                {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[95%] max-w-3xl overflow-hidden relative">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  Issued by {selectedCert.issuer} — {selectedCert.date}
                </p>

                {/* View Button - Updated to use webapp */}
                <button
                  onClick={() => window.open(selectedCert.webapp, "_blank")}
                  className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-base font-semibold"
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;
