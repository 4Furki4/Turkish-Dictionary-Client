import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'sozluk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor() { }
  ngAfterViewInit(): void {
  }
  @ViewChild('selected__font', { static: true }) selectedFontSpan!: HTMLSpanElement;
  ngOnInit(): void {
    const selectedFontSpan = document.querySelector("#selected__font")!
    this.checkDarkMode()
    let fontFamilyLocalStorage = localStorage.getItem("selectedFontFamily")
    if (fontFamilyLocalStorage) {
      this.selectedFontSpan.textContent = fontFamilyLocalStorage
      this.setSelectedFontFamily(fontFamilyLocalStorage, selectedFontSpan);
    }
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
      document.documentElement.style.setProperty("--font-family", "Mono");
      fontSpan.textContent = "Mono";
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
    else if (selectedFontFamily === "Roboto Mono") {
      document.documentElement.style.setProperty("--font-family", "Roboto Mono");
      fontSpan.textContent = "Roboto Mono";
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
    else {
      document.documentElement.style.setProperty("--font-family", "Inconsolata");
      fontSpan.textContent = "Inconsolata";
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
  }
}