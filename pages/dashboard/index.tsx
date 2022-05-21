import withAuth from "@/HOC/withAuth";
import DashboardLayout from '@/ui/dashboard-layout'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1>Home</h1>
    </DashboardLayout>
  );
};

export default withAuth(Dashboard);
