export interface NavigationLink {
	ariaLabel: string;
	icon: string;
	label: string;
	path: string;
}

export const primaryNavigationLinks: readonly NavigationLink[] = [
	{
		ariaLabel: 'Go to homepage',
		icon: 'home',
		label: 'Landing',
		path: '/',
	},
	{
		ariaLabel: 'Profile',
		icon: 'person',
		label: 'Profile',
		path: '/profile',
	},
	{
		ariaLabel: 'Worlds',
		icon: 'public',
		label: 'Worlds',
		path: '/worlds',
	},
	{
		ariaLabel: 'Teams',
		icon: 'groups',
		label: 'Teams',
		path: '/teams',
	},
	{
		ariaLabel: 'Tournaments',
		icon: 'trophy',
		label: 'Tournaments',
		path: '/tournaments',
	},
	{
		ariaLabel: 'Gameplay',
		icon: 'sports_esports',
		label: 'Gameplay',
		path: '/gameplay',
	},
	{
		ariaLabel: 'Team profile',
		icon: 'shield',
		label: 'Team',
		path: '/team-profile',
	},
];
