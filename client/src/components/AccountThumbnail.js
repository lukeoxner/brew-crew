// *** USER AUTHENTICATION FEATURES NOT USED FOR MVP - WILL BE ADDED IN FUTURE DEVELOPMENT ***

import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuth0 } from '@auth0/auth0-react';

function AccountThumbnail() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <AccountCircle />;
	}

	return (
		<>
			{isAuthenticated ? (
				<img
					src={user.picture}
					style={{ height: '30px', width: '30px', borderRadius: '50%' }}
				/>
			) : (
				<AccountCircle />
			)}
		</>
	);
}

export default AccountThumbnail;
