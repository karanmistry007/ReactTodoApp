import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { TbMenu2 } from "react-icons/tb";

import { MdOutlineToday } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineStarBorder } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";


interface sidebarItem {
    name: string,
    link: string,
    icon: IconType
}

const sidebarItems: sidebarItem[] = [
    {
        name: "My Day",
        link: "/my-day/list",
        icon: MdOutlineToday,
    },
    {
        name: "Important",
        link: "/important/list",
        icon: MdOutlineStarBorder,
    },
    {
        name: "Inbox",
        link: "/inbox/list",
        icon: RiInboxArchiveLine,
    },
    {
        name: "Planned",
        link: "/planned/list",
        icon: RxCalendar,
    },
    {
        name: "Tasks",
        link: "/tasks/list",
        icon: IoHomeOutline,
    },
]

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [sidebarCollapseActive, setSidebarCollapseActive] = useState<boolean>(true);
    const [activeSidebarItem, setActiveSidebarItem] = useState<string>(sidebarItems.filter((item) => (item.link == location?.pathname))[0]?.name ? sidebarItems.filter((item) => (item.link == location?.pathname))[0]?.name : "My Day");
    return (
        <>
            <div className={`sidebar py-2 mt-[1px] h-auto sm:h-[calc(100dvh_-_60px)] shadow-md sm:shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.25)] sm:pr-2 ${sidebarCollapseActive ? "w-full sm:max-w-[280px]" : "w-full sm:w-fit"}`}>
                {/* SIDEBAR HEAD */}
                <div className="sidebar-head flex gap-2 items-center px-4 sm:px-8 my-4 w-full">
                    <div className="sidebar-collapse cursor-pointer" onClick={() => { setSidebarCollapseActive(!sidebarCollapseActive) }}>
                        <FaAngleRight className="w-6 h-6 hidden" />
                        <TbMenu2 className="w-6 h-6" />
                    </div>
                    <h2 className={`sidebar-heading text-xl font-semibold  select-none ${sidebarCollapseActive ? "" : "sm:hidden"}`}>
                        {activeSidebarItem}
                    </h2>
                </div>
                {/* END SIDEBAR HEAD */}

                {/* SIDEBAR ITEM CONTAINER */}
                <div className={`sidebar-item-container flex flex-col gap-1 items-center rounded-lg ${sidebarCollapseActive ? "w-full sm:max-w-[280px]" : "hidden sm:flex w-fit"}`}>
                    {sidebarItems.map((item, index) => (
                        <button key={index} onClick={() => { setActiveSidebarItem(item.name); navigate(item.link) }} className={`sidebar-item flex items-center gap-2 w-full hover:bg-gray-200 rounded-r-lg  py-1.5 sm:py-2 ${sidebarCollapseActive ? "px-4 sm:px-8" : "px-4 sm:px-6"} ${activeSidebarItem == item.name ? "sidebar-active" : ""}`}>
                            <div className="sidebar-icon">
                                <item.icon className={`${sidebarCollapseActive ? "w-6 h-6" : "w-10 h-10"}`} />
                            </div>
                            <div className={`sidebar-link select-none ${sidebarCollapseActive ? "" : "hidden"}`}>
                                {item.name}
                            </div>
                        </button>
                    ))}
                </div>
                {/* END SIDEBAR ITEM CONTAINER */}

            </div>
        </>
    )
}