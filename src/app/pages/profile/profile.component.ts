import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

interface Country {
	name: string;
	flagSrc: string;
}

interface TeamMember {
	name: string;
	role: string;
	country: Country;
}

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './profile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
	protected readonly manager = {
		fullName: 'Dmytro Kovalenko',
		pictureSrc: 'profile/manager-avatar.svg',
		country: {
			name: 'Ukraine',
			flagSrc: 'flags/ukraine.svg',
		},
		money: 125000,
	};
	protected readonly team = {
		fullName: 'Navi',
		pictureSrc: 'profile/team-badge.svg',
		country: {
			name: 'Ukraine',
			flagSrc: 'flags/ukraine.svg',
		},
		money: 840000,
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
	protected readonly totalMoney = computed(() => this.manager.money + this.team.money);

	protected formatMoney(value: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0,
		}).format(value);
	}
}
