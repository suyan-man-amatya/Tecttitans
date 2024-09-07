import React, { useState } from "react";
import Sidebar from "./Sidebar";

// Example data for ambulances
const ambulancesData = [
  { serial: "A001", plate: "XYZ 1234", location: "Balkhu, Kathmandu" },
  { serial: "A002", plate: "ABC 5678", location: "Kalanki, Kathmandu" },
  { serial: "A003", plate: "DEF 9101", location: "789 Oak St, City C" },
  { serial: "A004", plate: "GHI 2345", location: "101 Pine St, City D" },
  { serial: "A005", plate: "JKL 6789", location: "202 Maple St, City E" },
  { serial: "A006", plate: "MNO 3456", location: "303 Birch St, City F" },
  { serial: "A007", plate: "PQR 7890", location: "404 Cedar St, City G" },
  { serial: "A008", plate: "STU 1234", location: "505 Spruce St, City H" },
  { serial: "A009", plate: "VWX 5678", location: "606 Fir St, City I" },
  { serial: "A010", plate: "YZA 9101", location: "707 Redwood St, City J" },
  { serial: "A010", plate: "YZA 9101", location: "707 Redwood St, City J" },
  // Add more entries as needed
];

const Ambulance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ambulancesPerPage = 3; // Number of ambulances to show per page

  // Calculate the number of pages
  const totalPages = Math.ceil(ambulancesData.length / ambulancesPerPage);

  // Get the ambulances for the current page
  const indexOfLastAmbulance = currentPage * ambulancesPerPage;
  const indexOfFirstAmbulance = indexOfLastAmbulance - ambulancesPerPage;
  const currentAmbulances = ambulancesData.slice(
    indexOfFirstAmbulance,
    indexOfLastAmbulance
  );

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="ambulance">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Ambulance Status</h1>
          <div className="overflow-x-auto">
            <table className="min-w-[85vw] bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Serial Number</th>
                  <th className="py-2 px-4 text-left">License Plate</th>
                  <th className="py-2 px-4 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {currentAmbulances.map((ambulance, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{ambulance.serial}</td>
                    <td className="py-2 px-4">{ambulance.plate}</td>
                    <td className="py-2 px-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.1909408003526!2d85.29253342531146!3d27.6864515761946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18418484f5cb%3A0x47248c3878873e24!2sBalkhu%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1725556417829!5m2!1sen!2snp"
                        width="200"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${ambulance.location}`}
                      ></iframe>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } rounded`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
            >
              Next
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Ambulance;
