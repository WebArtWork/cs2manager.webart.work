import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { companyProfile } from './feature/company/company.data';

export const routes: Routes = [
	{
		path: '',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/'),
				titleSuffix: '',
			},
		},
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'worlds',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/worlds'),
				title: 'Worlds',
				description: 'Create and review local worlds before API integration.',
			},
		},
		loadComponent: () =>
			import('./pages/worlds/worlds.component').then((m) => m.WorldsComponent),
	},
	{
		path: 'profile',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/profile'),
				title: 'Profile',
				description: 'CS2 manager profile with team, members, countries, and finances.',
			},
		},
		loadComponent: () =>
			import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
