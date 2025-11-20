import { Component } from '@angular/core';

@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {



  constructor() { }

  ngOnInit(): void {
    this.listarPlantas();
  }

  guardarPlanta(): void {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value.trim();
    const nombreCientifico = (document.getElementById('nombreCientifico') as HTMLInputElement).value.trim();
    const descripcion = (document.getElementById('descripcion') as HTMLTextAreaElement).value.trim();
    const stock = (document.getElementById('stock') as HTMLInputElement).value.trim();

    
    let isValid = true;
    document.getElementById('errorNombre')!.textContent = '';
    document.getElementById('errorNombreCientifico')!.textContent = '';
    document.getElementById('errorDescripcion')!.textContent = '';

    if (!nombre) {
      document.getElementById('errorNombre')!.textContent = 'El nombre es obligatorio.';
      isValid = false;
    }
    if (!nombreCientifico) {
      document.getElementById('errorNombreCientifico')!.textContent = 'El nombre científico es obligatorio.';
      isValid = false;
    }
    if (!descripcion) {
      document.getElementById('errorDescripcion')!.textContent = 'La descripción es obligatoria.';
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    
    const plantas = JSON.parse(localStorage.getItem('plantas') || '[]');

    
    plantas.push({
      nombre,
      nombreCientifico,
      descripcion,
      stock: stock || 0 
    });

    
    localStorage.setItem('plantas', JSON.stringify(plantas));

    
    (document.getElementById('plantForm') as HTMLFormElement).reset();

    
    this.listarPlantas();
  }

  listarPlantas(): void {
    const plantas = JSON.parse(localStorage.getItem('plantas') || '[]');
    const plantListDiv = document.getElementById('plantList') as HTMLElement;

    if (plantas.length === 0) {
      plantListDiv.innerHTML = '<p>No hay plantas registradas.</p>';
      return;
    }

    let plantListHtml = '<ul>';
    plantas.forEach((planta: any) => {
      plantListHtml += `
        <li>
          <strong>Nombre :</strong> ${planta.nombre}<br>
          <strong>Nombre Científico:</strong> ${planta.nombreCientifico}<br>
          <strong>Descripción:</strong> ${planta.descripcion}<br>
          <strong>Stock:</strong> ${planta.stock}
        </li>
      `;
    });
    plantListHtml += '</ul>';

    plantListDiv.innerHTML = plantListHtml;
  }

}
