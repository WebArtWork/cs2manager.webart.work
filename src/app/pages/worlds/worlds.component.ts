import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ButtonComponent, ModalService } from '@wawjs/ngx-ui';
import { WorldFormModalComponent } from './world-form-modal.component';

interface World {
	id: number;
	name: string;
}

@Component({
	imports: [ButtonComponent],
	templateUrl: './worlds.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorldsComponent {
	private readonly _modalService = inject(ModalService);
	private readonly _nextWorldId = signal(3);

	protected readonly worlds = signal<World[]>([
		{
			id: 1,
			name: 'Dust League',
		},
		{
			id: 2,
			name: 'Mirage Club',
		},
	]);
	protected readonly worldCount = computed(() => this.worlds().length);

	protected openCreateWorld() {
		this._modalService.small({
			component: WorldFormModalComponent,
			panelClass: 'max-w-lg',
			onCreate: (name: string) => this.addWorld(name),
		});
	}

	private addWorld(name: string) {
		const id = this._nextWorldId();
		this._nextWorldId.set(id + 1);
		this.worlds.update((worlds) => [{ id, name }, ...worlds]);
	}
}
