import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TeamStat {
	label: string;
	value: string;
}

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './teams.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
	protected readonly featuredTeam = {
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
		] satisfies TeamStat[],
	};
}
