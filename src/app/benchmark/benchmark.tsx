import Login from '@/components/button/Login';
import Logout from '@/components/button/Logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId =
  '319846472582-5ed06sfi9a0abt0t4pggqboru0j6lrjd.apps.googleusercontent.com';

export const Benchmark = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ' ',
      });
    }

    gapi.load('client:auth2', start);
  });

  return (
    <div>
      <h2 className="text-4xl font-extrabold">Dashboard</h2>
      <h1>some data</h1>
      <button
        type="button"
        className="center text-black bg-blue-3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Login to DV360
      </button>
      <Login />
      <Logout />
    </div>
  );
};
