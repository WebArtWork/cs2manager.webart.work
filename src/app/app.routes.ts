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
				description: 'Create CS2 Manager worlds for tactical esports seasons, teams, tournaments, and map strategy planning.',
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
				description: 'Build your CS2 esports team, manage players, and prepare the roster for tactical competition.',
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
				description: 'Organize CS2 tournaments, track teams, and compete to become the best tactical esports manager.',
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
				description: 'Review a CS2 Manager tournament with teams, timing, winners, and tactical esports results.',
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
				description: 'Plan CS2 tactics across maps, scorelines, teams, players, economy, weapons, armor, and grenades.',
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
				description: 'Inspect your CS2 team profile, roster, manager, finances, match history, and tournament progress.',
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
				description: 'Manage your CS2 Manager profile, team identity, player countries, and tactical esports finances.',
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
