import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ButtonComponent, ModalService } from '@wawjs/ngx-ui';
import { TeamFormModalComponent } from './team-form-modal.component';

interface Team {
	id: number;
	name: string;
}

interface TeamStat {
	label: string;
	value: string;
}

@Component({
	imports: [ButtonComponent, NgOptimizedImage],
	templateUrl: './teams.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
	private readonly _modalService = inject(ModalService);
	private readonly _nextTeamId = signal(4);

	protected readonly teams = signal<Team[]>([
		{
			id: 1,
			name: 'Navi',
		},
		{
			id: 2,
			name: 'Inferno Syndicate',
		},
		{
			id: 3,
			name: 'Ancient Five',
		},
	]);
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
	protected readonly teamCount = computed(() => this.teams().length);

	protected openCreateTeam() {
		this._modalService.small({
			component: TeamFormModalComponent,
			panelClass: 'max-w-lg',
			onCreate: (name: string) => this.addTeam(name),
		});
	}

	private addTeam(name: string) {
		const id = this._nextTeamId();
		this._nextTeamId.set(id + 1);
		this.teams.update((teams) => [{ id, name }, ...teams]);
	}
}
