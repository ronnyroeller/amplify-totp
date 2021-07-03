import Auth from '@aws-amplify/auth';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifyTotpSetup } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';

Auth.configure({
  region: 'eu-west-1',
  userPoolId: 'XXX',
  userPoolWebClientId: 'XXX',
});

function App() {
	const [user, setUser] = useState<CognitoUserInterface>();
	useEffect(() => {
    const loadCognitoUser = async () => {
      setUser(await Auth.currentAuthenticatedUser());
    };
    void loadCognitoUser();
	}, []);

  return (
    <AmplifyAuthenticator>
      <AmplifyTotpSetup user={user} />
    </AmplifyAuthenticator>
  );
}

export default App;
