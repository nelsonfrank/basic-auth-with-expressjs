import Link from "next/link";
import {
    IoMdSearch,
    IoIosPeople,
    IoIosClipboard,
    IoIosDesktop,
} from "react-icons/io";

const Sidebar = () => {
    return (
        <div className="nxt-w-36 nxt-bg-gray-200 nxt-text-gray-700 nxt-inline-block">
            <ul className="nxt-text-sm nxt-font-medium nxt-inline-flex nxt-flex-col nxt-min-h-screen nxt-w-full nxt-px-2 nxt-pt-2">
                <Link href="#">
                    <li
                        tabIndex={0}
                        className="nxt-py-2 nxt-pl-2 nxt-flex nxt-items-center hover:nxt-bg-gray-300 focus:nxt-bg-gray-300 nxt-cursor-pointer nxt-rounded-sm"
                    >
                        <IoMdSearch /> <span className="nxt-ml-2">Search</span>{" "}
                    </li>
                </Link>

                <Link href="/dashboard">
                    <li
                        tabIndex={0}
                        className="nxt-py-2 nxt-pl-2 nxt-flex nxt-items-center hover:nxt-bg-gray-300 focus:nxt-bg-gray-300 nxt-cursor-pointer nxt-rounded-sm"
                    >
                        <IoIosDesktop /> <span className="nxt-ml-2">Dashboard</span>{" "}
                    </li>
                </Link>
                <Link href="/dashboard/users">
                    <li
                        tabIndex={0}
                        className="nxt-py-2 nxt-pl-2 nxt-flex nxt-items-center hover:nxt-bg-gray-300 focus:nxt-bg-gray-300 nxt-cursor-pointer nxt-rounded-sm"
                    >
                        <IoIosPeople /> <span className="nxt-ml-2">Users</span>{" "}
                    </li>
                </Link>
                <Link href="/dashboard/notes">
                    <li
                        tabIndex={0}
                        className="nxt-py-2 nxt-pl-2 nxt-flex nxt-items-center hover:nxt-bg-gray-300 focus:nxt-bg-gray-300 nxt-cursor-pointer nxt-rounded-sm"
                    >
                        <IoIosClipboard /> <span className="nxt-ml-2">Notes</span>{" "}
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
