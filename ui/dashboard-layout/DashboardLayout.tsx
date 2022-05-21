import Link from 'next/link';
import Sidebar from './sidebar';

interface DashboardLayoutProps {
    children: JSX.Element
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div>
            <div className='nxt-w-full nxt-h-16 nxt-flex nxt-items-center nxt-px-4 nxt-bg-gray-200 nxt-text-gray-700'>
                <Link href='/'>
                    <h1 className='nxt-text-3xl'>Dashboard</h1>
                </Link>
            </div>
            <div className='nxt-flex'>
                <Sidebar />
                <div className='nxt-p-4 nxt-flex-1'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default DashboardLayout