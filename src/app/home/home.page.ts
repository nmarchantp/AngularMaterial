import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isChecked: boolean = false;  // Estado del checkbox
  selectedOption: string = '';  // Valor seleccionado en el grupo de radio buttons
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];  // Datos para la lista

  constructor(private animationCtrl: AnimationController) {}

  animateSquare() {
    const element = document.querySelector('.square');
    if (element) {
      const animation = this.animationCtrl.create()
        .addElement(element)
        .duration(1500)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.8' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]);
      animation.play();
    } else {
      console.error('Element with class .square not found');
    }
  }

  animateBox() {
    const element = document.querySelector('.box');
    if (element) {
      const animation = this.animationCtrl.create()
        .addElement(element)
        .duration(2000)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateX(0)', backgroundColor: '#3880ff' },
          { offset: 1, transform: 'translateX(200px)', backgroundColor: '#ff5733' }
        ]);
      animation.play();
    } else {
      console.error('Element with class .box not found');
    }
  }

  animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      const animation = this.animationCtrl.create()
        .addElement(card)
        .duration(1000)
        .iterations(1)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(100px)' },
          { offset: 1, opacity: '1', transform: 'translateY(0)' }
        ]);
      animation.delay(index * 200).play(); // Delay para cada tarjeta
    });
  }
}