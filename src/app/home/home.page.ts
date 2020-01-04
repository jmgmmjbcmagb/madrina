import { Component } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  entrada = false;
  rasca = false;
  percent = 0;
  contadorMensajes = 0;
  instrucciones = true;
  notas = false;
  mensajeAEnviar = '';
  mensajes = [];
  mensajesRamdom = [
    {
      user: 'mire',
      time: '',
      msg: `Genial 👏.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Que bueno 😉.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Eso suena bien 😛.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Yeah 😘.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Ok 😚.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `¿Te ha gustado la sorpresa? 🎁.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `No me digas 😃.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `😘😘😘.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Increible 😘.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Pintame las uñas porfa 💅.`,
      img: 'assets/mire.jpg'
    }
  ];
  mensajesMireia = [
    {
      user: 'mire',
      time: '',
      msg: `Hola Rocío 🖐, soy Mireia y quería contarte algo.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Hace unos 14 años, las vidas de mis papis
      dieron un gran cambio, decidieron
      compartir su vida juntos 💑 con todo lo que
      ello conlleva, ambos ganaron una nueva
      familia y aquí comienza esta historia…`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Un 21 de Junio de 2005 mi mami vino a las fiestas de
      San Juan Bautista 💃 buscando al amor de su
      vida (ya que él no se decidía a ir a aljaraque,
      y fijaros donde ha acabado 😂) días más
      tarde, tuvo que pasar el mal trago de decir
      que no a una comida 🤢 de la abuela Dolores,
      pero ella gustosamente le hizo una rica
      hamburguesa 🍔 (a mamá no se le olvida ese
      detalle)`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Y ahora viene lo más importante, papi ya le
      había hablado de que el tenía una sobrina
      que era la niña de sus ojos 😍 y mami estaba
      deseando conocerla, cuando por fin la
      conoció entendió porque el la quería
      tant, era una niña encantadora, cariñosa,
      con una carita de porcelana 👸, era todo
      amor. y claro, la tita nueva, como llamaban
      a mi mamá, cayo tambien rendida a sus pies 🙌.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Eran horas ⌚ las que mamá se llevaba
      jugando con ella en la escalera de la abuela
      Dolores, a la pizarra 🎨, a las muñecas, a la
      peluquería… sin importar el cansancio ya
      que a ambas les encantaba pasar tiempo
      juntas 👩‍❤️‍💋‍👩. papá tambien adoraba pasar tiempo
      con ella.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Fueron pasando los años 📆 y ese cariño fue
      creciendo más aún, al igual que cuando
      fueron naciendo el resto de mis
      primitos… mamá ya se sentía desde el primer
      día una más de la familia 👩‍👩‍👦, porque así se lo
      hicieron sentir desde que la conocisteis.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Aunque ya mis papis sabían que aquella niña
      inocente y buena 👼 se convertiría en una
      bellísima persona y maduraría a la
      velocidad de la luz 👩‍🔬, lo fue demostrando ella
      solita con creces y eso les hace sentir mas
      orgullosos aún de ella 💖.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Mis papis me han contado que cuando era
      pequeña incluso tuvo la gran valentía ✌ y
      fuerza 💪 de superar como nadie algún que
      otro revés que le tenía guardado la vida y
      que gracias a dios y a sus fuerzas eso no fue
      para ella nigún impedimento en la vida, sino
      todo lo contrario, una vez mas demostró a
      todos de que pasta está hecha 👩‍🍳.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Mis papis me cuentan que cuando yo nací 👶 fue
      una gran alegría para todos, incluído para
      ella, porque su tito ai y su tita nueva
      (aunque ya no tan nueva) le habían dado
      una sobrina preciosa 😍 y desde el minuto uno
      empezó a adorarme.`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Os he contado todo esto 💌 porque quería
      deciros algo… como ya sabéis, mi mami tiene
      un bebe en la barriga 🤰 con el que ya estoy
      loquita y aún no ha nacido, pero mis papis y
      yo estamos buscando a una persona que sea
      muy especial para nosotros, que nos quiera
      con toda el alma 💟 y haga lo mismo con mi
      hermanito/a 👶, nose si nos puedes ayudar…`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `Aunque, pensándolo bien 🤔, creo que ya
      tenemos a la persona perfecta, alguien que
      quiera a mi hermanito/a tanto como a mi y a
      mis papis 🤩, que sirva de referente para el/ella
      y que este dispuesta a todo lo que conlleva
      este nuevo título, asi que, tata Rocío…`,
      img: 'assets/mire.jpg'
    },
    {
      user: 'mire',
      time: '',
      msg: `¿Quieres ser la MADRINA de mi hermanit@? 🙏`,
      img: 'assets/mire.jpg'
    },
  ];

  constructor() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.entrada = true;
    }, 1000);
  }

  abrirRasca() {
    this.rasca = true;
    setTimeout(() => {
      const scContainer = document.getElementById('js--sc--container');
      const sc = new ScratchCard('#js--sc--container', {
        scratchType: SCRATCH_TYPE.CIRCLE,
        containerWidth: scContainer.clientWidth,
        containerHeight: scContainer.clientHeight,
        imageForwardSrc: './assets/scratchcard.jpg',
        htmlBackground: `<div class="cardamountcss">
        <div class="won-text">Has ganado<br>
        el <strong>premio</strong><br>
        Mireia te va<br>
        a decir cual es.</br>`,
        clearZoneRadius: 25,
        callback: () => {}
      });

      sc.canvas.addEventListener('scratch.move', () => {
        const percent = sc.getPercent();
        this.instrucciones = false;
        if (percent > 45) {
          if (!this.notas) {
            this.empezarChat();
          }
          this.notas = true;
        }
      });

      sc.init();
    }, 1000);
  }

  empezar() {
    window.location.reload();
  }

  empezarChat() {
    if (this.contadorMensajes < this.mensajesMireia.length) {
      setTimeout(() => {
        this.mensajesMireia[this.contadorMensajes].time = this.obtenerFecha();
        this.mensajes.push(this.mensajesMireia[this.contadorMensajes]);
        this.contadorMensajes++;
      }, this.contadorMensajes === 0 ? 1000 : 0);
      this.scrollToBottom();
    } else {
      const indexRamdom = Math.floor(Math.random() * 10);
      this.mensajesRamdom[indexRamdom].time = this.obtenerFecha();
      this.mensajes.push(this.mensajesRamdom[indexRamdom]);
      this.scrollToBottom();
    }
  }

  enviarMensaje() {
    if (this.mensajeAEnviar.length) {
      setTimeout(() => {
        this.mensajes.push({
          user: 'rocio',
          time: this.obtenerFecha(),
          msg: this.mensajeAEnviar,
          img: 'assets/rocio.jpg'
        });
        this.mensajeAEnviar = '';
        this.scrollToBottom();
      }, 500);
      setTimeout(() => {
        this.empezarChat();
      }, 2000);
    }
  }

  scrollToBottom() {
    const el = document.getElementsByClassName('messenger-background')[0];
    if (el) {
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 100);
    }
  }

  obtenerFecha() {
    const fecha = new Date();
    return `${this.calculaDia(fecha)}/${this.calcularMes(fecha)}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
  }

  calculaDia(date: Date) {
    let dia = String(date.getDate());
    if (Number(dia) < 10) {
      dia = `0${dia}`;
    }
    return dia;
  }

  calcularMes(date: Date) {
    let mes = String(date.getMonth() + 1);
    if (Number(mes) < 10) {
      mes = `0${mes}`;
    }
    return mes;
  }
}
