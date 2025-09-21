"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import UniversityIcon from "../../components/UniversityIcon";
import { QRCodeCanvas } from "qrcode.react";

// Mock Certificates
const mockCertificates = [
  {
    token_id: "certificate-123abc",
    owner_id: "mockstudent.testnet",
    metadata: {
      title: "Certificate in Blockchain Development",
      extra: JSON.stringify({ grade: "A+", issued_date: "2023-01-15" }),
    },
  },
  {
    token_id: "certificate-456def",
    owner_id: "mockstudent.testnet",
    metadata: {
      title: "Web Security Fundamentals",
      extra: JSON.stringify({ score: "92%", instructor: "Dr. Smith" }),
    },
  },
  {
    token_id: "certificate-789ghi",
    owner_id: "mockstudent.testnet",
    metadata: {
      title: "Data Science Immersion",
      extra: JSON.stringify({ project_grade: "Excellent" }),
    },
  },
];

export default function Dashboard() {
  const [origin, setOrigin] = useState("");
  const [showQR, setShowQR] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);

  const handleShare = (nft) => {
    const shareLink = `${origin}/certificate/${nft.token_id}`;
    navigator.clipboard.writeText(shareLink);
    alert("Shareable link copied:\n" + shareLink);
  };

  const toggleQR = (tokenId) => {
    setShowQR(showQR === tokenId ? null : tokenId);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
    
        <main className="flex-1 p-10 ">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 ">Your Certificates</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {mockCertificates.map((nft) => (
              <div
                key={nft.token_id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <UniversityIcon />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{nft.metadata.title}</h2>

                  <div className="text-xs text-gray-500 mb-3">
                    <p><strong>Token ID:</strong> {nft.token_id}</p>
                    <p><strong>Owner:</strong> {nft.owner_id}</p>
                   {nft.metadata.extra && (
  <div className="mt-2 text-gray-600 text-sm space-y-1">
    {Object.entries(JSON.parse(nft.metadata.extra)).map(([key, value]) => (
      <p key={key}>
        <span className="font-semibold">{key.replace(/_/g, " ").toUpperCase()}:</span> {value}
      </p>
    ))}
  </div>
)}
                  </div>

                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleShare(nft)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-2 px-3 rounded"
                    >
                      Share
                    </button>
                    <button
                      onClick={() => toggleQR(nft.token_id)}
                      className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-3 rounded"
                    >
                      {showQR === nft.token_id ? "Hide QR" : "Show QR"}
                    </button>
                  </div>

                  {showQR === nft.token_id && (
                    <div className="mt-4 flex justify-center">
                      <QRCodeCanvas
                        value={`${origin}/certificate/${nft.token_id}`}
                        size={150}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                        includeMargin={true}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
