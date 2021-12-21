import React, {useState} from 'react'
import SidebarFirst from './SidebarFirst'
import SidebarDoc from './SidebarDoc'
// import SidebarEx from './SidebarEx'

function Sidebar() {
    const [openDoc, setOpenDoc] = useState(false)
    const [openEx, setOpenEx] = useState(false)
    return (
        <div className="flex">
            <SidebarFirst open={openDoc} setOpen={setOpenDoc} openEx={openEx} setOpenEx={setOpenEx} />
            <SidebarDoc open={openDoc} setOpen={setOpenDoc} />
            {/* <SidebarEx openEx={openEx} setOpenEx={setOpenEx} /> */}
        </div>
    )
}

export default Sidebar
