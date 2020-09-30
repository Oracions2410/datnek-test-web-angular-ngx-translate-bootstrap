import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isOpen = !this.isOpen

  }

}
