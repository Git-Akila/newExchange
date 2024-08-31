import React from "react";

const UserList = ({ totalUsers, isActive, inActive, verified, notVeri }) => {
  return (
    <div className="px-10 py-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 xs:grid-cols-4 gap-4 mt-5">
        <div className="bg-blue-300 p-6 flex flex-col rounded-lg mb-4">
          <p>Total Users: {totalUsers.length}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex flex-col py-2">
              <p>Active Users</p>
              {isActive.length}
            </div>
            <div className="flex flex-col py-2 text-center">
              <p>Inactive Users</p>
              {inActive.length}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-slate-50 p-6 rounded-lg">
          <p>Email Verification</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col py-2">
              <p>Verified</p>
              {verified.length}
            </div>
            <div className="flex flex-col py-2 text-center">
              <p>Not Verified</p>
              {notVeri.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
