import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="p-6">
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-xl font-bold text-gray-800">ব্যক্তিগত তথ্য</h2>
        </div>

        <div>
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">জন্ম তারিখ</h3>
              <p className="text-gray-800">১৫ জানুয়ারি, ১৯৯৫</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                মোবাইল নম্বর
              </h3>
              <p className="text-gray-800">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">ইমেইল</h3>
              <p className="text-gray-800">imran.ahmed@example.com</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">
                বর্তমান ঠিকানা
              </h3>
              <p className="text-gray-800">১২৩/বি, গ্রীন রোড, ঢাকা-১২১৫</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">
                স্থায়ী ঠিকানা
              </h3>
              <p className="text-gray-800">৪৫৬, স্টেশন রোড, চট্টগ্রাম</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">জাতীয়তা</h3>
              <p className="text-gray-800">বাংলাদেশী</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">ধর্ম</h3>
              <p className="text-gray-800">ইসলাম</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">
                বৈবাহিক অবস্থা
              </h3>
              <p className="text-gray-800">অবিবাহিত</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">
                রক্তের গ্রুপ
              </h3>
              <p className="text-gray-800">বি+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
