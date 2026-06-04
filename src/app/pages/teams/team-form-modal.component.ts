import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent, InputComponent } from '@wawjs/ngx-ui';

@Component({
	imports: [ButtonComponent, InputComponent],
	template: `
		<form class="space-y-6" (submit)="submit($event)">
			<div>
				<p class="text-xs font-semibold uppercase text-[var(--c-text-muted)]">
					New team
				</p>
				<h2 class="mt-2 text-2xl font-semibold text-[var(--c-text-strong)]">
					Create team
				</h2>
			</div>

			<winput
				label="Team name"
				name="team-name"
				placeholder="Enter team name"
				[wModel]="name()"
				(wModelChange)="setName($event)"
				(wSubmit)="save()"
				[clearable]="true"
			/>

			<div class="flex flex-wrap justify-end gap-3">
				<wbutton type="light" [disableSubmit]="true" (wClick)="close?.()">
					Cancel
				</wbutton>
				<wbutton type="primary" [disableSubmit]="true" (wClick)="save()">
					Create team
				</wbutton>
			</div>
		</form>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamFormModalComponent {
	close?: () => void;
	onCreate?: (name: string) => void;

	protected readonly name = signal('');

	protected setName(value: unknown) {
		this.name.set(typeof value === 'string' ? value : '');
	}

	protected submit(event: SubmitEvent) {
		event.preventDefault();
		this.save();
	}

	protected save() {
		const name = this.name().trim();

		if (!name) {
			return;
		}

		this.onCreate?.(name);
		this.close?.();
	}
}
