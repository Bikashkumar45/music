const songs = [
  {
    id: 1,
    title: "Tame Mo Riban Fita",
    artist: "Ankit Tiwari",
    cover: "https://picsum.photos/300?random=1",
    audio:
      "/music/Tame Mo Riban Fita (REMIX) DJ SK TALCHER X DJ SURYA REMIX-(OdishaDjs.Net).mp3",
  },
  {
    id: 2,
    title: "A Raja Ji Baja Baji Ki Na Baji",
    artist: "Arijit Singh",
    cover: "https://picsum.photos/300?random=2",
    audio:
      "/music/A Raja Ji Baja Baji Ki Na Baji (Bhojpuri Dance Mix) Dj Pabitra Rkl(RemixOdia.Com)-(RemixOdia.Net).mp3",
  },
  {
    id: 3,
    title: "Anugulu ra tokil",
    artist: "Original Artist",
    cover: "/images/images.jpg",
    audio:
      "/music/Anugul Ra Tukuli [ Edm x Circuit Remix ] Dj Unique Bbsr-(OdishaDjs.Net).mp3",
  },
  {
    id: 4,
    title: "TUT JAI RAJA JI",
    cover: "https://picsum.photos/300?random=4",
    audio: "/music/TUT JAI RAJA JI.mp3",
  },
  {
    id: 5,
    title: "Rana ji mujko maf karana hindi song",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Rana ji mujko maf karana hindi song.mp3",
  },
  {
    id: 6,
    title: "mo priya gadhaye jeun pokhorire",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/mo priya gadhaye jeun pokhorire.mp3",
  },
  {
    id: 7,
    title: "mu chalijibi lo sakhi sasu ghara ku",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/mu chalijibi lo sakhi sasu ghara ku.mp3",
  },
  {
    id: 8,
    title: "chatitale maridela talapathaka",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/chatitale maridela talapathaka.mp3",
  },
  {
    id: 9,
    title: "hai re mo ra nua odhani",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/hai re mo ra nua odhani.mp3",
  },
  {
    id: 10,
    title: "barisija megha tu barisi ja",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/barisija megha tu barisi ja.mp3",
  },
  {
    id: 11,
    title: "agana tora dakuchi mate sate ki ajana",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/agana tora dakuchi mate sate ki ajana.mp3",
  },
  {
    id: 12,
    title: "tinku jia",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/tinku jia.mp3",
  },
  {
    id: 13,
    title: "nagin gori bin bajede",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/nagin gori bin bajede.mp3",
  },
  {
    id: 14,
    title: "raja ji bojpuri song",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/raja ji bojpuri song.mp3",
  },
  {
    id: 15,
    title: "sasughar chalijibi",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/sasughar chalijibi.mp3",
  },
  {
    id: 16,
    title: "Monalisha dj",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Monalisha dj.mp3",
  },
  {
    id: 17,
    title: "Ayoda ama aoye re",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Ayoda ama aoye re.mp3",
  },
  {
    id: 18,
    title: "Rohi sange elish ra bahaghar",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Rohi sange elish ra bahaghar.mp3",
  },
  {
    id: 19,
    title: "Lekhichi na tora odia dj song",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Lekhichi na tora odia dj song.mp3",
  },
  {
    id: 20,
    title: "Alo akash re udiba dj",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Alo akash re udiba dj.mp3",
  },
  {
    id: 21,
    title: "Deba jay ganesh deba",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Deba jay ganesh deba.mp3",
  },
  {
    id: 22,
    title: "Chata upare kia lo",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Chata upare kia lo.mp3",
  },
  {
    id: 23,
    title: "Mahumachi maila re",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Mahumachi maila re.mp3",
  },
  {
    id: 24,
    title: "Nabama seni jhia ta odia mix",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Nabama seni jhia ta odia mix.mp3",
  },
  {
    id: 25,
    title: "odhani phankare kia re",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/odhani phankare kia re.mp3",
  },
  {
    id: 26,
    title: "Pateni khasi",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Pateni khasi.mp3",
  },
  {
    id: 27,
    title: "Silabati silabati dj remix",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/Silabati silabati dj remix.mp3",
  },
  {
    id: 28,
    title: "raja ji bojpuri song",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/raja ji bojpuri song.mp3",
  },
  {
    id: 29,
    title: "barisija megha tu barisi ja",
    cover: "https://picsum.photos/300?random=5",
    audio: "/music/barisija megha tu barisi ja.mp3",
  },
  {
    id: 30,
    title: "Bara Jauchi Dekha Rosani Kari",
    artist: "Edm Singhabaja",
    cover: "https://picsum.photos/300?random=1",
    audio:
      "/music/Bara Jauchi Dekha Rosani Kari - Edm Singhabaja Remix - Dj Tutu Bbsr & Dj Jitu Machhipada-(OdishaDjs.Net).mp3",
  },
];

export default songs;
