import { Component, inject, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

   private readonly overlay = inject(Overlay);
   private readonly injector = inject(Injector);
 
   openOverlay() {
     const overlayRef = this.overlay.create({
       positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
       hasBackdrop: true,
     });
 
     const overlayInjector = Injector.create({
       providers: [{ provide: OverlayRef, useValue: overlayRef }],
       parent: this.injector
     });

     const portal = new ComponentPortal(ModalContainerComponent, null, overlayInjector);
     overlayRef.attach(portal);
   }
}
