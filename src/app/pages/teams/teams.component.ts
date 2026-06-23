import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TeamStat {
	label: string;
	value: string;
}

interface FeaturedTeam {
	name: string;
	pictureSrc: string;
	stats: TeamStat[];
}

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './teams.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
	protected readonly featuredTeams: FeaturedTeam[] = [
		{
			name: 'Navi',
			pictureSrc: 'profile/team-badge.svg',
			stats: [
				{
					label: 'World rank',
					value: '#4',
				},
				{
					label: 'Current form',
					value: '8 wins / 2 losses',
				},
				{
					label: 'Fan base',
					value: '1.4M fans',
				},
			],
		},
		{
			name: 'Inferno Syndicate',
			pictureSrc: 'profile/team-inferno-syndicate.svg',
			stats: [
				{
					label: 'World rank',
					value: '#8',
				},
				{
					label: 'Current form',
					value: '6 wins / 4 losses',
				},
				{
					label: 'Fan base',
					value: '820K fans',
				},
			],
		},
		{
			name: 'Ancient Five',
			pictureSrc: 'profile/team-ancient-five.svg',
			stats: [
				{
					label: 'World rank',
					value: '#12',
				},
				{
					label: 'Current form',
					value: '5 wins / 5 losses',
				},
				{
					label: 'Fan base',
					value: '640K fans',
				},
			],
		},
		{
			name: 'Mirage Club',
			pictureSrc: 'profile/team-mirage-club.svg',
			stats: [
				{
					label: 'World rank',
					value: '#16',
				},
				{
					label: 'Current form',
					value: '7 wins / 3 losses',
				},
				{
					label: 'Fan base',
					value: '510K fans',
				},
			],
		},
		{
			name: 'Nuke Academy',
			pictureSrc: 'profile/team-nuke-academy.svg',
			stats: [
				{
					label: 'World rank',
					value: '#21',
				},
				{
					label: 'Current form',
					value: '4 wins / 6 losses',
				},
				{
					label: 'Fan base',
					value: '390K fans',
				},
			],
		},
	];
}
