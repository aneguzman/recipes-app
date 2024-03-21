import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Output() onNavigationClicked = new EventEmitter<number>();

    onNavigationItemSelected(navigationItemIndex: number) {
        this.onNavigationClicked.emit(navigationItemIndex);
    }

}