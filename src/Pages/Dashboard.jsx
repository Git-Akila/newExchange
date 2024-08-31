import React, { useEffect } from 'react';
import UserList from '../Components/Userlist/UserList';
import Chart from '../Components/Userlist/Chart';
import DataTable from '../Components/Userlist/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Data/fetchUserData';

function Dashboard() {
  const dispatch = useDispatch();

  const { isLoading, data, isError } = useSelector((state) => state.userlist);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>There was an error fetching the data.</p>;
  }

  const users = data && data.data && data.data || [];
  console.log("userrrr", users);

  const totalUsers = users; // This should be an array
  const isActive = users ? users.filter((user) => user.isActive) : [];
  const inActive = users ? users.filter((user) => !user.isActive) : [];
  const verified = users ? users.filter((user) => user.emailVerified) : [];
  const notVeri = users ? users.filter((user) => !user.emailVerified) : []; // Keep this as an array

  return (
    <>
      <UserList 
        totalUsers={totalUsers} 
        isActive={isActive} 
        inActive={inActive} 
        verified={verified} 
        notVeri={notVeri} 
      />
      <Chart/>
      <DataTable 
        ActiveUsers={isActive} 
        inActiveUsers={inActive} 
        Emailverified={verified} 
        NotEmailVerified={notVeri} 
      />
    </>
  );
}

export default Dashboard;
