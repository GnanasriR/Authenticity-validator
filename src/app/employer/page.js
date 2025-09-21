"use client";

import { useState } from "react";
import EmployerNavbar from "../../components/EmployerNavbar";
import QrImageReader from "./QrImageReader";

// Mock NFT certificates
const mockNFTs = [
  {
    tokenId: "certificate-123abc",
    studentName: "Alice Johnson",
    degree: "Bachelor of Blockchain",
    university: "NEAR University",
    issuedDate: "2024-06-15",
    blockchainTx: "0xabc123def456",
    issuer: "Registrar, NEAR University",
  },
  {
    tokenId: "certificate-456def",
    studentName: "Bob Smith",
    degree: "Web Security Fundamentals",
    university: "CyberTech Institute",
    issuedDate: "2024-07-10",
    blockchainTx: "0xdef456ghi789",
    issuer: "Admin, CyberTech",
  },
  {
    tokenId: "certificate-789ghi",
    studentName: "Charlie Lee",
    degree: "Data Science Immersion",
    university: "Data Academy",
    issuedDate: "2024-08-01",
    blockchainTx: "0xghi789jkl012",
    issuer: "Head of Academics, Data Academy",
  },
];

export default function EmployerPortal() {
  const [inputData, setInputData] = useState("");
  const [verifiedNFT, setVerifiedNFT] = useState(null);

  const verifyCertificate = (data) => {
    const tokenId = data.includes("/") ? data.split("/").pop() : data.trim();
    const nft = mockNFTs.find((n) => n.tokenId === tokenId);
    setVerifiedNFT(nft || false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.trim()) return;
    verifyCertificate(inputData);
    
  };

  const handleDecode = (qrData) => {
    setInputData(qrData);
    verifyCertificate(qrData);
  };

  return (
    <>
      <EmployerNavbar />

      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-5 px-4">
        <h1 className="text-2xl font-bold text-indigo-800 mb-3 text-center italic border-l-4 border-indigo-600 pl-4">
  “Hire with confidence, trust through verification.”
</h1>


        {/* Verification Card */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 pl-20 pr-20">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-3">
            Verify Student Certificate
             {/* Divider */}
      <div className="border-t border-gray-300 my-2"></div>
          </h2>

          {/* Input + Button */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-gray-700 font-medium mb-2 block">
                Verify Using Certificate ID
              </label>
              <div className="flex flex-row gap-4">
                <input aria-label="Certificate ID"
                  type="text"
                  placeholder="Enter Certificate ID"
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  className="flex-[3] border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button aria-label="Verify Certificate"
                  type="submit"
                  className="flex-[1] bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-bold transition-all duration-200"
                >
                  Verify
                </button>
              </div>
            </div>

            {/* QR Code Upload */}
            <div className="flex flex-col items-center">
              <p className="text-gray-600 mb-2 text-center">
                Or upload a QR code image
              </p>
              <QrImageReader onDecode={handleDecode} />
            </div>
          </form>
        </div>
{/* Verification Result */}
{verifiedNFT !== null && (
  <div className="w-full max-w-4xl mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
    
    {/* Certificate Details */}

    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Certificate Details
          {/* Divider */}
      <div className="border-t border-gray-300 my-2"></div>
      </h3>
     
      {verifiedNFT ? (
        <div className="space-y-2 text-gray-700">
          <p><strong>Student:</strong> {verifiedNFT.studentName}</p>
          <p><strong>Degree:</strong> {verifiedNFT.degree}</p>
          <p><strong>University:</strong> {verifiedNFT.university}</p>
          <p><strong>Token ID:</strong> {verifiedNFT.tokenId}</p>
        </div>
      ) : (
        <p className="text-red-600 font-medium">No certificate found</p>
      )}
    </div>

    {/* Verification + Blockchain */}
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Verification Details
         {/* Divider */}
      <div className="border-t border-gray-300 my-2"></div>
      </h3>

      {verifiedNFT ? (
        <div className="flex items-center p-2 gap-2 text-green-700 font-medium rounded-2xl border-2 border-green-600">
          {/* ✅ Circle with Tick */}
          <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-600 text-green-600 text-lg">
            ✓
          </span>
          Certificate is Authentic.
        </div>
      ) : (
        <div><div className="flex items-center p-2 gap-3 text-red-700 font-medium rounded-2xl border-2 border-red-600">
          {/* ❌ Circle with Cross */}
          <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-red-600 text-red-600 text-lg">
            ✕
          </span>
          The Certificate is not Authorized.
        </div>
      <p className="p-2 text-red-700 text-semibold">  Blockchain Details does not exist for this certificate Id.<br></br>
        Ensure whether you have entered correct Certificate/token Id.</p>
        </div>
      )}

      {/* Verification Info */}
      {verifiedNFT && (
        <div className="text-black space-y-1">
          <p><strong>Student:</strong> {verifiedNFT.studentName}</p>
          <p><strong>University:</strong> {verifiedNFT.university}</p>
          <p><strong>Degree:</strong> {verifiedNFT.degree}</p>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-gray-300 my-2"></div>

     {/* Blockchain Details */}
{verifiedNFT && (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
    <h4 className="text-md font-semibold text-gray-800 mb-2">
      Blockchain Details
    </h4>
    <p><strong>Transaction Hash:</strong> {verifiedNFT.blockchainTx}</p>
    <p><strong>Issuer:</strong> {verifiedNFT.issuer}</p>
    <p><strong>Network:</strong> NEAR Testnet</p>
  </div>
)}

    </div>
  </div>
)}

      </div>
    </>
  );
}
