import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  words: string[] = ["anzol","andador","apontador","almofada","abajour","bola","balao","botas","bexiga","borracha","escolar","cd","colher","caneta","camisa","camiseta","calça","castiçal","copo","carimbo","dado","dedal","dicionario","diario","dvd","dentadura","escada","escova","espelho","espada","esmalte","faca","facao","folha","furadeira","ferradura","funil","farol","gaiola","garfo","gargantilha","garrafa","gaveta","guitarra","gaita","gravata","gorro","harpa","helice","holofote","isqueiro","ima","isopor","isca","inalador","incenso","jarra","joias","jaqueta","janela","lapis","luvas","lampada","luminaria","leque","lenço","livro","lanterna","lixeira","lapiseira","lata","mola","maquiagem","meias","mala","mochila","navalha","novelo","navio","de","brinquedo","oculos","obras","de","arte","Óculos","de","sol","panela","pedra","papel","pen","drive","prato","pulseira","queijeira","quebra","cabeça","quadro","regua","ratoeira","roleta","relogio","remo","roteador","rimel","revista","sandalia","sapato","saleiro","sino","saco","sacola","saco","de","pancadas","sabonete","shorts","tesoura","teclado","telefone","tampa","termometro","trena","telha","tatame","tamanco","urna","ursinho","de","pelucia","uniforme","umidificador","de","ar","vassoura","ventilador","vara","de","pescar","varal","vaso","vidro","viseira","vela","xicara","xadrez","xale","xarope","ziper","zarabatana"];

  randInt = this.generateRandom(this.words.length);

  word: string[] = this.words[this.randInt].split("");

  wordWithoutRep: string[] = [];

  exibitionArray: string[] = [];
  
  attempts: string[] = [];

  hits: string[] = [];

  mistakes: number = 0;

  buttonState: boolean = true;

  victories: number = 0;

  defeats: number = 0;

  message: string = "";

  

  

  constructor() {
    
    
   }

  ngOnInit(): void {
    this.generateArray()
  }

  ngDoCheck():void {
    this.gameOver();
    this.youWin();
  }



  setHits(lett: any): void {
    this.wordWithoutRep.map((letter) =>{
      
        if(letter === lett){          
            this.hits = [...this.hits, lett]
            const index = this.findIndex(lett)
            index.map((ind) => {
              this.exibitionArray[ind] = lett
            })
           
          //  console.log(this.exibitionArray)
        }
      }
    )
  }

  add(letter: any): void {
    letter = letter.value.toLowerCase();
    if(!this.attempts.includes(letter) && this.buttonState){
      this.attempts.push(letter)
      this.setHits(letter);
      this.mistakes = this.attempts.length - this.hits.length 
      console.log(this.attempts, this.word,this.hits, this.mistakes)
    }else{
      setTimeout(() =>{this.message = ""}, 1000)
      this.message ="Dado Inválido ou repetido"
    }
  }

  findIndex(element: any){
    let index = [];
    let idx = this.word.indexOf(element)
    while (idx != -1){
      index.push(idx)
      idx = this.word.indexOf(element, idx + 1);
    }
    return index;
  }

  generateRandom(max: number): number {
    return Math.floor(Math.random()*max);
  }

  generateArray(): void {
    for (let i=0; i < this.word.length; i++){
      this.exibitionArray = [...this.exibitionArray, '_']
    }
  }

  reset(message: string): void {
    alert(message)
    this.attempts= [];
    this.hits = [];
    this.mistakes = 0;
    this.buttonState = true;
    this.randInt = this.generateRandom(this.words.length);
    this.word = this.words[this.randInt].split("");
    this.wordWithoutRep = []
    this.exibitionArray = []
    this.generateArray();    
  }

  gameOver(): void {
    if(this.mistakes == 6 && this.buttonState){
      this.buttonState = false
      setTimeout(() => {this.reset("Você perdeu!")}, 1000);
      this.defeats++;
    }
  }

  youWin(): void {
    this.wordWithoutRep = [... new Set(this.word)];

    if(this.wordWithoutRep.length === this.hits.length && this.buttonState){
      this.buttonState = false
      setTimeout(() =>{this.reset("Você venceu!"), 1000})
      this.victories++;
    }
  }

  restartGame(): void {
    this.reset('Jogo Reiniciado ...')
    this.victories = 0;
    this.defeats = 0;
  }
}
