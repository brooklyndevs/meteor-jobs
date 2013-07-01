Regulate('registerHere',[
{
	name: 'companyText',
	display_as: 'Company Name',
},
{
	name: 'addressText',
	display_as: 'Address',
},
{
	name: 'emailText',
	display_as: 'Email',
	email: true
},
// {
// 	name: 'phoneText',
// 	min_length: 2,
// 	max_length: 5
// },
{
	name: 'usernameText',
	display_as: 'Username',
	min_length: 5,
	max_length: 20
},
{
	name: 'password1Text',
	display_as: 'Password',
	min_length: 5,
	max_length: 20
},
{
	name: 'password2Text',
	display_as: 'Password Verify',
	match_field: 'password1Text'
	
}
// {
// 	name: 'urlText',
// 	min_length: 2,
// 	max_length: 5,
// 	display_as: 'Your password',
// 	display_error: '#password-error'	
// }
]);