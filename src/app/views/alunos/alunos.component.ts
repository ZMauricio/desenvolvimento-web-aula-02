import { Component, OnInit } from '@angular/core';

import { AlunosService } from '../../services/alunos.service';

interface Aluno {
  nome: string;
  curso: string;
}

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  profissao: string = 'Fazendeiro';

  valor: number = 10;

  caminho: string = '../../../assets/img/logo.png';



  aluno: Aluno;

  constructor(private service: AlunosService) {

    this.aluno = {nome: 'Goku', curso: 'kame style'};
  }

  ngOnInit() {

  }

  exibirAluno() {
    console.log('Aluno', this.aluno);
  }

  testarServico() {
    this.service.testeService();
  }
}
