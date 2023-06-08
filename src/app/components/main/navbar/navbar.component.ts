import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'sozluk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) { }
  @ViewChild('selected__font', { static: true }) selectedFontSpan!: HTMLSpanElement;
  @ViewChild('darkModeCheckbox', { static: true }) darkModeCheckbox!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
    this.checkDarkMode()
    let fontFamilyLocalStorage = localStorage.getItem("selectedFontFamily")
    if (fontFamilyLocalStorage) {
      this.selectedFontSpan.textContent = fontFamilyLocalStorage
      this.setSelectedFontFamily(fontFamilyLocalStorage, this.selectedFontSpan);
    }
  }

  setDarkmode(checkbox: HTMLInputElement) {
    if (checkbox.checked) {
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
    if (localStorage.getItem("darkMode") === "enabled") {
      this.enableDarkMode();
      this.darkModeCheckbox.nativeElement.checked = true;
    }
  }
  setSelectedFontFamily(selectedFontFamily: string, fontSpan: Element) {

    if (selectedFontFamily === "Roboto") {
      document.documentElement.style.setProperty("--font-family", "Roboto");
      fontSpan.textContent = selectedFontFamily;
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
    else if (selectedFontFamily === "Roboto Mono") {
      document.documentElement.style.setProperty("--font-family", "Roboto Mono");
      fontSpan.textContent = selectedFontFamily;
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
    else {
      document.documentElement.style.setProperty("--font-family", "Inconsolata");
      fontSpan.textContent = "Inconsolata";
      localStorage.setItem("selectedFontFamily", selectedFontFamily);
    }
  }
}