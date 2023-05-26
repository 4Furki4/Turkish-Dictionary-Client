import { Component } from '@angular/core';

@Component({
  selector: 'sozluk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor() { }

  ngOnInit(): void {
    const selectedFontSpan = document.querySelector("#selected__font")!
    const navDropdownListItems = document.querySelectorAll(
      ".nav__dropdown__list__item"
    )!;
    this.checkDarkMode()
    let fontFamilyLocalStorage = localStorage.getItem("selectedFontFamily")
    if (fontFamilyLocalStorage) {
      selectedFontSpan.textContent = fontFamilyLocalStorage
      this.setSelectedFontFamily(fontFamilyLocalStorage, selectedFontSpan);
    }
    navDropdownListItems.forEach((listItem) => {
      listItem.addEventListener("click", () => {
        this.setSelectedFontFamily(listItem.textContent!, selectedFontSpan)
      })
    })
  }
  setDarkmode() {
    const darkModeSwitchCheck: HTMLInputElement = document.querySelector('input[type="checkbox"]')!
    if (darkModeSwitchCheck.checked) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }
  enableDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }
  disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
  checkDarkMode() {
    const darkModeSwitchCheck: HTMLInputElement = document.querySelector('input[type="checkbox"]')!
    if (localStorage.getItem("darkMode") === "enabled") {
      this.enableDarkMode();
      darkModeSwitchCheck.checked = true;
    }
  }
  setSelectedFontFamily(selectedFontFamily: string, fontSpan: Element) {
    if (selectedFontFamily === "Mono") {
      document.documentElement.style.setProperty("--font-family", "Inconsolata");
      fontSpan.textContent = "Mono";
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
    else if (selectedFontFamily === "Sans Serif") {
      document.documentElement.style.setProperty("--font-family", "Inter");
      fontSpan.textContent = "Sans Serif";
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
    else {
      document.documentElement.style.setProperty("--font-family", "Lora");
      fontSpan.textContent = "Serif";
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
  }
}