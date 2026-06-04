import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Country {
	name: string;
	flagSrc: string;
}

interface TeamMember {
	name: string;
	role: string;
	country: Country;
}

interface Article {
	title: string;
	source: string;
	date: string;
}

interface Game {
	opponent: string;
	event: string;
	result: string;
	date: string;
}

interface Tournament {
	name: string;
	placement: string;
	prize: number;
}

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './team-profile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamProfileComponent {
	protected readonly team = {
		fullName: 'Kyiv Falcons',
		pictureSrc: 'profile/team-badge.svg',
		country: {
			name: 'Ukraine',
			flagSrc: 'flags/ukraine.svg',
		},
		money: 840000,
		manager: {
			fullName: 'Dmytro Kovalenko',
			country: {
				name: 'Ukraine',
				flagSrc: 'flags/ukraine.svg',
			},
		},
	};
	protected readonly members: TeamMember[] = [
		{
			name: 'Oleksandr Marchenko',
			role: 'In-game leader',
			country: {
				name: 'Ukraine',
				flagSrc: 'flags/ukraine.svg',
			},
		},
		{
			name: 'Mateusz Nowak',
			role: 'AWPer',
			country: {
				name: 'Poland',
				flagSrc: 'flags/poland.svg',
			},
		},
		{
			name: 'Lukas Novak',
			role: 'Entry fragger',
			country: {
				name: 'Czechia',
				flagSrc: 'flags/czechia.svg',
			},
		},
		{
			name: 'Erik Lindholm',
			role: 'Rifler',
			country: {
				name: 'Sweden',
				flagSrc: 'flags/sweden.svg',
			},
		},
		{
			name: 'Andrei Popescu',
			role: 'Support',
			country: {
				name: 'Romania',
				flagSrc: 'flags/romania.svg',
			},
		},
	];
	protected readonly articles: Article[] = [
		{
			title: 'Kyiv Falcons announce a refreshed practice schedule',
			source: 'CS2 Manager Daily',
			date: 'Jun 1',
		},
		{
			title: 'Falcons focus on economy control before qualifier run',
			source: 'Tactical Round',
			date: 'May 28',
		},
		{
			title: 'New analyst workflow improves map veto preparation',
			source: 'Demo Desk',
			date: 'May 24',
		},
		{
			title: 'Academy scrims feed first-team roster decisions',
			source: 'Roster Watch',
			date: 'May 20',
		},
		{
			title: 'Kyiv Falcons extend bootcamp ahead of summer events',
			source: 'Counter Press',
			date: 'May 16',
		},
	];
	protected readonly games: Game[] = [
		{
			opponent: 'Inferno Syndicate',
			event: 'Eastern Open',
			result: '16-12 W',
			date: 'Jun 3',
		},
		{
			opponent: 'Ancient Five',
			event: 'Eastern Open',
			result: '13-9 W',
			date: 'Jun 1',
		},
		{
			opponent: 'Mirage Club',
			event: 'Dust League',
			result: '10-13 L',
			date: 'May 29',
		},
		{
			opponent: 'Vertigo Union',
			event: 'Dust League',
			result: '13-7 W',
			date: 'May 27',
		},
		{
			opponent: 'Nuke Academy',
			event: 'Practice Cup',
			result: '13-11 W',
			date: 'May 23',
		},
	];
	protected readonly tournaments: Tournament[] = [
		{
			name: 'Eastern Open',
			placement: '1st',
			prize: 120000,
		},
		{
			name: 'Dust League',
			placement: '3rd',
			prize: 45000,
		},
		{
			name: 'Practice Cup',
			placement: '2nd',
			prize: 18000,
		},
		{
			name: 'Spring Qualifier',
			placement: '4th',
			prize: 12000,
		},
		{
			name: 'Academy Clash',
			placement: '1st',
			prize: 9000,
		},
	];

	protected formatMoney(value: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0,
		}).format(value);
	}
}
