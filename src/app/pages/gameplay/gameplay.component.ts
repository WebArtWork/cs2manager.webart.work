import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TeamScore {
	name: string;
	score: number;
	side: 'CT' | 'T';
	colorClass: string;
}

interface Player {
	team: string;
	name: string;
	money: number;
	hp: number;
	weapon: string;
	kills: number;
	deaths: number;
	armor: number;
	grenades: string[];
}

interface MapMarker {
	team: string;
	label: string;
	top: string;
	left: string;
	colorClass: string;
}

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './gameplay.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameplayComponent {
	protected readonly tournamentName = 'Eastern Open';
	protected readonly matchFormat = 'BO3';
	protected readonly gameScore = 'Navi 1 - 1 Vitality';
	protected readonly currentMap = 'Sandhold';

	protected readonly teams: TeamScore[] = [
		{
			name: 'Navi',
			score: 11,
			side: 'CT',
			colorClass: 'bg-sky-500',
		},
		{
			name: 'Vitality',
			score: 9,
			side: 'T',
			colorClass: 'bg-amber-400',
		},
	];

	protected readonly matchMaps = ['Sandhold', 'Dust II', 'Inferno'];

	protected readonly markers: MapMarker[] = [
		{
			team: 'Navi',
			label: 'N1',
			top: '28%',
			left: '35%',
			colorClass: 'bg-sky-500',
		},
		{
			team: 'Navi',
			label: 'N2',
			top: '35%',
			left: '45%',
			colorClass: 'bg-sky-500',
		},
		{
			team: 'Navi',
			label: 'N3',
			top: '47%',
			left: '38%',
			colorClass: 'bg-sky-500',
		},
		{
			team: 'Vitality',
			label: 'V1',
			top: '55%',
			left: '62%',
			colorClass: 'bg-amber-400',
		},
		{
			team: 'Vitality',
			label: 'V2',
			top: '64%',
			left: '52%',
			colorClass: 'bg-amber-400',
		},
		{
			team: 'Vitality',
			label: 'V3',
			top: '72%',
			left: '66%',
			colorClass: 'bg-amber-400',
		},
	];

	protected readonly players: Player[] = [
		{
			team: 'Navi',
			name: 'b1t',
			money: 4200,
			hp: 100,
			weapon: 'M4A1-S',
			kills: 18,
			deaths: 11,
			armor: 100,
			grenades: ['HE', 'Flash', 'Smoke'],
		},
		{
			team: 'Navi',
			name: 'w0nderful',
			money: 5750,
			hp: 87,
			weapon: 'AWP',
			kills: 21,
			deaths: 9,
			armor: 100,
			grenades: ['Smoke', 'Flash'],
		},
		{
			team: 'Navi',
			name: 'Aleksib',
			money: 3100,
			hp: 64,
			weapon: 'FAMAS',
			kills: 10,
			deaths: 14,
			armor: 82,
			grenades: ['Molotov', 'Smoke', 'Flash'],
		},
		{
			team: 'Navi',
			name: 'jL',
			money: 4600,
			hp: 100,
			weapon: 'M4A4',
			kills: 17,
			deaths: 12,
			armor: 100,
			grenades: ['HE', 'Flash'],
		},
		{
			team: 'Navi',
			name: 'iM',
			money: 2900,
			hp: 42,
			weapon: 'MP9',
			kills: 13,
			deaths: 16,
			armor: 67,
			grenades: ['Smoke'],
		},
		{
			team: 'Vitality',
			name: 'ZywOo',
			money: 6400,
			hp: 100,
			weapon: 'AK-47',
			kills: 24,
			deaths: 10,
			armor: 100,
			grenades: ['HE', 'Flash', 'Smoke'],
		},
		{
			team: 'Vitality',
			name: 'apEX',
			money: 2600,
			hp: 58,
			weapon: 'Galil AR',
			kills: 11,
			deaths: 17,
			armor: 74,
			grenades: ['Flash', 'Molotov'],
		},
		{
			team: 'Vitality',
			name: 'flameZ',
			money: 3900,
			hp: 91,
			weapon: 'AK-47',
			kills: 16,
			deaths: 13,
			armor: 100,
			grenades: ['Smoke', 'Flash'],
		},
		{
			team: 'Vitality',
			name: 'Spinx',
			money: 3500,
			hp: 73,
			weapon: 'MAC-10',
			kills: 14,
			deaths: 15,
			armor: 92,
			grenades: ['HE', 'Smoke'],
		},
		{
			team: 'Vitality',
			name: 'mezii',
			money: 4800,
			hp: 100,
			weapon: 'AK-47',
			kills: 15,
			deaths: 12,
			armor: 100,
			grenades: ['Flash', 'Smoke', 'Molotov'],
		},
	];

	protected playersByTeam(team: string) {
		return this.players.filter((player) => player.team === team);
	}

	protected formatMoney(value: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0,
		}).format(value);
	}
}
