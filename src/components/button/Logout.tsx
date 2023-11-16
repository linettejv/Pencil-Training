import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId =
  '19846472582-5ed06sfi9a0abt0t4pggqboru0j6lrjd.apps.googleusercontent.com';

const onSuccess = () => {
  console.log('Logout : SUCCESS ');
};

function Logout() {
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
