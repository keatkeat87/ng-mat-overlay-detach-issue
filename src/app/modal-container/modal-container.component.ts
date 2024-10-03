import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-modal-container',
  standalone: true,
  imports: [],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalContainerComponent {
  private readonly overlayRef = inject(OverlayRef);
  private cdk = inject(ChangeDetectorRef);

  close() {
    this.overlayRef.detach();
    // this.cdk.detectChanges(); // without detectChanges no work
  }
}
