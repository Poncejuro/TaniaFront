export interface Episode {
  number: number
  /** Si es un especial, su número de especial (1, 2…); se muestra como "SP1" en vez del número. */
  special?: number
  title: string
  summary: string
  /** URL de la miniatura (o ruta en public/, p. ej. 'thumbs/01.jpg'). */
  thumb?: string
  /** Enlace del reproductor de Google Drive, versión en baja calidad. */
  lowUrl?: string
  /** Enlace del reproductor de Google Drive, versión escalada con IA. */
  highUrl?: string
}

export const show = {
  title: 'Goblin',
  subtitle: 'El guardián: El dios solitario y grande',
  year: 2016,
  genres: ['Fantasía', 'Romance', 'Drama'],
  synopsis:
    'Kim Shin, un general invencible de Goryeo, es traicionado por el joven rey y muere atravesado por su propia espada. ' +
    'Recibe una segunda vida que resulta ser una maldición: ver morir a todos los que ama sin poder olvidarlos. ' +
    'Solo una persona puede sacarle la espada y darle descanso: una chica misteriosa que ve fantasmas, conocida como la novia del Ser Inmortal.',
}

export const episodes: Episode[] = [
  {
    number: 1,
    thumb: 'thumbs/01.jpg',
    title: 'La espada en el pecho',
    summary:
      'El general Kim Shin es traicionado por el joven rey al que sirvió y ejecutado junto a su gente. Una maldición lo convierte en Goblin, un ser inmortal. Siglos después, en Seúl, una chica que ve fantasmas lo invoca sin querer el día de su cumpleaños.',
  },
  {
    number: 2,
    thumb: 'thumbs/02.jpg',
    title: 'La novia del Goblin',
    summary:
      'Ji Eun-tak está convencida de que es la novia del Goblin. Kim Shin no lo cree, hasta que descubre que ella puede ver lo que nadie más ve. Mientras tanto, un Ángel de la Muerte sin recuerdos se muda a su casa.',
  },
  {
    number: 3,
    thumb: 'thumbs/03.jpg',
    title: 'Una puerta a Quebec',
    summary:
      'Kim Shin le muestra a Eun-tak que puede cruzar puertas hacia otro lado del mundo. Ella empieza a ilusionarse, pero él descubre qué ocurrirá si la espada sale de su pecho.',
  },
  {
    number: 4,
    thumb: 'thumbs/04.jpg',
    title: 'Flores de trigo sarraceno',
    summary:
      'Eun-tak empieza a trabajar en el restaurante de Sunny, una dueña encantadora que deja sin palabras al Ángel de la Muerte. Kim Shin se debate entre alejarse de ella o quedarse a su lado.',
  },
  {
    number: 5,
    thumb: 'thumbs/05.jpg',
    title: 'El primer amor',
    summary:
      'Kim Shin le confiesa a Eun-tak que puede ver la espada y que ella es su novia, pero le oculta lo que le costará. La rivalidad entre el Goblin y el Ángel de la Muerte se vuelve una extraña amistad.',
  },
  {
    number: 6,
    thumb: 'thumbs/06.jpg',
    title: 'Lluvia en tu nombre',
    summary:
      'El ánimo del Goblin cambia el clima de la ciudad. Eun-tak sueña con un futuro junto a él, mientras el Ángel de la Muerte empieza a ver recuerdos que no reconoce como suyos.',
  },
  {
    number: 7,
    thumb: 'thumbs/07.jpg',
    title: 'Un cumpleaños en Canadá',
    summary:
      'Kim Shin le regala a Eun-tak un día especial al otro lado del mundo. Pero el nombre de ella aparece donde no debería, y el destino empieza a reclamarla.',
  },
  {
    number: 8,
    thumb: 'thumbs/08.jpg',
    title: 'El retrato',
    summary:
      'Un retrato antiguo despierta preguntas en Sunny y en el Ángel de la Muerte. Kim Shin entiende que su vida eterna y el futuro de Eun-tak no pueden coexistir.',
  },
  {
    number: 9,
    thumb: 'thumbs/09.jpg',
    title: 'La verdad de la espada',
    summary:
      'Eun-tak descubre lo que de verdad significa sacar la espada y se aleja para protegerlo. Kim Shin, por primera vez en siglos, no quiere morir.',
  },
  {
    number: 10,
    thumb: 'thumbs/10.jpg',
    title: 'Nombres en la lista',
    summary:
      'El Ángel de la Muerte confirma una verdad terrible sobre Eun-tak. Kim Shin desafía las reglas del cielo, y Sunny se acerca a un recuerdo que lleva novecientos años esperándola.',
  },
  {
    number: 11,
    thumb: 'thumbs/11.jpg',
    title: 'La reina y el rey',
    summary:
      'El pasado vuelve con fuerza: Sunny recuerda quién fue y el Ángel de la Muerte descubre el pecado que cometió en otra vida. La amistad con Kim Shin se rompe.',
  },
  {
    number: 12,
    thumb: 'thumbs/12.jpg',
    title: 'Perdón',
    summary:
      'Kim Shin enfrenta al hombre que lo traicionó y a la persona que más amó a su hermana. Un enemigo antiguo regresa como sombra para cobrar su venganza.',
  },
  {
    number: 13,
    thumb: 'thumbs/13.jpg',
    title: 'Polvo y luz',
    summary:
      'Eun-tak toma la decisión más difícil de su vida para salvar a Kim Shin del mal que los acecha. Una despedida que cambia todo.',
  },
  {
    number: 14,
    thumb: 'thumbs/14.jpg',
    title: 'Nueve años después',
    summary:
      'Eun-tak es ahora una productora de radio que siente que le falta algo sin saber qué. Kim Shin vaga entre la vida y la muerte por una sola razón: volver a verla.',
  },
  {
    number: 15,
    thumb: 'thumbs/15.jpg',
    title: 'El reencuentro',
    summary:
      'El Goblin regresa y los recuerdos vuelven. El Ángel de la Muerte y Sunny se enfrentan a lo que su pasado les dejó pendiente, mientras el tiempo de Eun-tak sigue corriendo.',
  },
  {
    number: 16,
    thumb: 'thumbs/16.jpg',
    title: 'El final es un comienzo',
    summary:
      'Un sacrificio, una promesa y una espera más larga que una vida. En la siguiente vida, todos vuelven a encontrarse.',
  },
  {
    number: 17,
    special: 1,
    thumb: 'thumbs/17.jpg',
    title: 'Especial 1: Resumen',
    summary:
      'Emitido el 14 de enero de 2017. Un repaso de la primera parte de la historia, los momentos más especiales entre Kim Shin y Ji Eun-tak, y escenas detrás de cámaras.',
  },
  {
    number: 18,
    special: 2,
    thumb: 'thumbs/18.jpg',
    title: 'Especial 2: Detrás de cámaras y bloopers',
    summary:
      'Emitido por tvN alrededor del 14 de enero de 2017. Entrevistas al elenco, errores de grabación y comentarios sobre las escenas más difíciles de filmar.',
  },
]

/** Etiqueta corta del episodio: "1", "2"… o "SP1", "SP2" para los especiales. */
export function episodeLabel(ep: Episode): string {
  return ep.special ? `SP${ep.special}` : String(ep.number)
}

/** URL del reproductor de Google Drive para un archivo. */
export const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`
