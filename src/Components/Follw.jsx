import React, { useState, useEffect } from "react";

function FollowPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup when the page loads
    setIsVisible(true);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <p className="mb-6">Stay connected with us for the latest updates!</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#32C9DD] text-white py-2 px-4 rounded"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#32C9DD] text-white py-2 px-4 rounded"
              >
                Facebook
              </a>
            </div>
            <button
              onClick={closePopup}
              className="mt-6 text-gray-600 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FollowPopup;

