import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId =
  '19846472582-5ed06sfi9a0abt0t4pggqboru0j6lrjd.apps.googleusercontent.com';

const onSuccess = (res: any) => {
  console.log('LOGIN : SUCCESS Current user :', res.profileObj);
  let accessToken = gapi.auth.getToken().access_token;
  accessToken ? console.log(accessToken) : console.log(' ');
};

const onFailure = (res: any) => {
  console.log('Login Failed : res', res);
};

function Login() {
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login!"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
