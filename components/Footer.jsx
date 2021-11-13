import React from 'react';
import { VscGitMerge, VscBroadcast, VscBell, VscCloudUpload, VscFeedback, VscError, VscWarning} from "react-icons/vsc";


function Footer() {
    return (
        <div className="flex items-center justify-between h-6 px-3 text-white bg-gray-900 border-t border-gray-600 cursor-pointer">
            <div className="flex items-center">
                <span className="flex items-center"><VscGitMerge className="mx-1" /> main*</span>
                <span className="flex items-center pl-4"><VscCloudUpload className="mx-1" /></span>
                <span className="flex items-center"><VscError className="mx-1" /> 0 <VscWarning className="mx-1" /> 0 </span>
            </div>
            <div className="flex items-center">
                <span className="text-sm">UTF-6</span>
                <span className="flex items-center px-2"> <VscBroadcast /> Go Live </span>
                <span className="flex items-center px-2"> <VscFeedback /> <VscBell /> </span>
            </div>
        </div>
    )
}

export default Footer
