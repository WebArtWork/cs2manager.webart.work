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
		path: 'teams',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/teams'),
				title: 'Teams',
				description: 'Create and review local CS2 teams before API integration.',
			},
		},
		loadComponent: () =>
			import('./pages/teams/teams.component').then((m) => m.TeamsComponent),
	},
	{
		path: 'tournaments',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/tournaments'),
				title: 'Tournaments',
				description: 'Create and review local CS2 tournaments before API integration.',
			},
		},
		loadComponent: () =>
			import('./pages/tournaments/tournaments.component').then(
				(m) => m.TournamentsComponent,
			),
	},
	{
		path: 'tournaments/:id',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/tournaments'),
				title: 'Tournament',
				description: 'CS2 tournament overview with start time, end time, teams, and winners.',
			},
		},
		loadComponent: () =>
			import('./pages/tournament/tournament.component').then(
				(m) => m.TournamentComponent,
			),
	},
	{
		path: 'gameplay',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/gameplay'),
				title: 'Gameplay',
				description: 'CS2 gameplay overview with map, score, teams, players, economy, HP, weapons, armor, and grenades.',
			},
		},
		loadComponent: () =>
			import('./pages/gameplay/gameplay.component').then(
				(m) => m.GameplayComponent,
			),
	},
	{
		path: 'team-profile',
		data: {
			meta: {
				...buildRouteMeta(companyProfile, '/team-profile'),
				title: 'Team Profile',
				description: 'CS2 team profile with roster, manager, money, articles, games, and tournaments.',
			},
		},
		loadComponent: () =>
			import('./pages/team-profile/team-profile.component').then(
				(m) => m.TeamProfileComponent,
			),
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
