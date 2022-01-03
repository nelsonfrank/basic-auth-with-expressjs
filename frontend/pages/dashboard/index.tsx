import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import withAuth from '@/HOC/withAuth'


const Dashboard = () => {

  return <div>Dashboard</div>;
};

export default withAuth(Dashboard);
