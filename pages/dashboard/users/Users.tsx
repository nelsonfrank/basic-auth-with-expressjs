import DashboardLayout from '@/ui/dashboard-layout';
import UsersTable from '@/ui/table';

const Users = () => {
    return (
        <DashboardLayout>
            <>
                <div className="nxt-mx-2 nxt-mb-4">
                    <h2 className="nxt-text-3xl nxt-font-semibold">Users</h2>
                </div>
                <div>
                    <UsersTable />
                </div>
            </>
        </DashboardLayout>
    )
}

export default Users