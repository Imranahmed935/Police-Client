import React from 'react';
import { FaAward, FaEdit, FaPlus } from 'react-icons/fa';

const Reward = ({rewards, sections}) => {
    return (
        <div>
           <section className="mb-6 relative group">
                         <div className="flex justify-between items-center mb-3">
                           <h2 className="text-xl font-semibold flex items-center gap-2">
                             <FaAward className="text-yellow-500" /> পুরস্কার ও স্বীকৃতি
                           </h2>
                           <div className="flex gap-2">
                             <button className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100">
                               <FaPlus size={16} />
                             </button>
                             <button className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100">
                               <FaEdit size={16} />
                             </button>
                           </div>
                         </div>
                         <div className="space-y-4">
                           {rewards.map((reward) => (
                             <div
                               key={reward.id}
                               className="border-l-2 border-yellow-500 pl-4"
                             >
                               <div className="flex justify-between">
                                 {sections.rewards ? (
                                   <input
                                     type="text"
                                     className="font-medium w-full p-1 border border-gray-300 rounded"
                                     value={reward.title}
                                     onChange={(e) =>
                                       handleRewardChange(
                                         reward.id,
                                         "title",
                                         e.target.value
                                       )
                                     }
                                   />
                                 ) : (
                                   <h3 className="font-medium">{reward.title}</h3>
                                 )}
                                 {sections.rewards && (
                                   <button className="text-red-500 text-sm">Delete</button>
                                 )}
                               </div>
                               <div className="mt-1">
                                 {sections.rewards ? (
                                   <input
                                     type="text"
                                     className="text-sm text-gray-600 w-full p-1 border border-gray-300 rounded"
                                     value={reward.issuer}
                                     onChange={(e) =>
                                       handleRewardChange(
                                         reward.id,
                                         "issuer",
                                         e.target.value
                                       )
                                     }
                                   />
                                 ) : (
                                   <p className="text-sm text-gray-600">{reward.issuer}</p>
                                 )}
                               </div>
                               <div className="flex justify-between mt-1">
                                 {sections.rewards ? (
                                   <input
                                     type="text"
                                     className="text-sm text-gray-500 w-20 p-1 border border-gray-300 rounded"
                                     value={reward.year}
                                     onChange={(e) =>
                                       handleRewardChange(
                                         reward.id,
                                         "year",
                                         e.target.value
                                       )
                                     }
                                   />
                                 ) : (
                                   <span className="text-sm text-gray-500">
                                     {reward.year}
                                   </span>
                                 )}
                                 {sections.rewards && (
                                   <button className="text-blue-500 text-sm">Save</button>
                                 )}
                               </div>
                             </div>
                           ))}
                         </div>
                       </section> 
        </div>
    );
};

export default Reward;