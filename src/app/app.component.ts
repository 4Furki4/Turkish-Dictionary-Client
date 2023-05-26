import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sozluk';

}
document.addEventListener("click", (e) => {
  const navDropdownList = document.querySelector(".nav__dropdown__list");
  if (e.target instanceof Element) {
    const isDropdown = e.target?.matches("[data-dropdown-selected]");
    if (!isDropdown && e.target?.closest("[data-dropdown]") != null) {
      return;
    }
    if (isDropdown) navDropdownList?.classList.toggle("active");
    if (!isDropdown) navDropdownList?.classList.remove("active");
  }
});