import React, {useState} from 'react';
import { VscFiles, VscSearch, VscGitMerge, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear} from "react-icons/vsc";

function Sidebar( { open, setOpen, openEx, setOpenEx } ) {
    const [active, setActive] = useState(0);
    const toggleTab = (index) => {
        setActive(index);
      };

    return (
       <div>
         <div className="sidebar flex bg-gray-900 w-20 shadow-md border-r border-gray-700 h-almost">
            <div className="flex flex-col justify-between items-center text-gray-600">
                <div className="flex flex-col">
                    <div onClick={() => setOpen(!open)} className="flex flex-col group">
                        <a className="relative group"><VscFiles onClick={() => toggleTab(1)} className={active === 1 ? "activeSidebarBtn" : "sidebarBtn"} /> 
                        <span className="toolipt group-hover:scale-100">Explorer</span> 
                        </a>
                    </div>
                    <div className="flex flex-col group">
                    <a className="relative"><VscSearch onClick={() => toggleTab(2)} className={active === 2 ? "activeSidebarBtn" : "sidebarBtn"} /> 
                        <span className="toolipt group-hover:scale-100">Search</span> 
                        </a>
                    </div>
                    <div className="flex flex-col group">
                        <a className="relative"><VscGitMerge  onClick={() => toggleTab(3)} className={active === 3 ? "activeSidebarBtn" : "sidebarBtn"} /> 
                        <span className="toolipt group-hover:scale-100">Control</span> 
                        <p className="number">7</p>
                        </a>
                    </div>
                    <div className="flex flex-col group">
                        <a className="relative"><VscDebugAlt onClick={() => toggleTab(4)} className={active === 4 ? "activeSidebarBtn" : "sidebarBtn"} /> 
                        <span className="toolipt group-hover:scale-100">Bugs</span> 
                        </a>
                    </div>
                    <div onClick={() => setOpenEx(!openEx)} className="flex flex-col group">
                        <a className="relative"><VscExtensions onClick={() => toggleTab(5)} className={active === 5 ? "activeSidebarBtn" : "sidebarBtn"} /> 
                            <span className="toolipt group-hover:scale-100">Extention</span> 
                        </a>
                    </div>
                    </div>
                    <div >
                    <div className="flex flex-col group">
                        <a><VscAccount onClick={() => toggleTab(6)} className={active === 6 ? "activeSidebarBtn" : "sidebarBtn"} />
                            <span className="toolipt group-hover:scale-100">Accounts</span> 
                            <p className="account">1</p>
                        </a>
                    </div>
                    <div className="flex flex-col group">
                        <a><VscSettingsGear onClick={() => toggleTab(7)} className={active === 7 ? "activeSidebarBtn" : "sidebarBtn"}/>
                        <span className="toolipt group-hover:scale-100">Settings</span> 
                        <p className="number">3</p>
                        </a>
                    </div>
                </div>
            </div>
         </div>
       
       </div>
    )
}

export default Sidebar;

