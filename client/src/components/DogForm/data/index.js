import React from "react";

export const breed = ["Alano", "Alaskan Malamute", "American Staffordshire Terrier", "American Water Spaniel", "Antiguo Pastor Inglés", "Basset Azul de Gaseogne", "Basset Hound", "Basset leonado de Bretaña", "Beagle", "Bearded Collie", "Bichón Maltés", "Bobtail", "Border Collie", "Boston Terrier", "Boxer", "Bull Terrier", "Bulldog Americano", "Bulldog Francés", "Bulldog Inglés", "Caniche", "Carlino", "Chihuahua", "Cirneco del Etna", "Chow Chow", "Cocker Spaniel Americano", "Cocker Spaniel Inglés", "Dálmata", "Dobermann", "Dogo Alemán", "Dogo Argentino", "Dogo de Burdeos", "Finlandés", "Fox Terrier de pelo liso", "Fox Terrier", "Foxhound Americano", "Foxhound Inglés", "Galgo", "Galgo Afgano", "Gigante de los Pirineos", "Golden Retriever", "Gos d'Atura", "Gran Danés", "Husky Siberiano", "Laika de Siberia Occidental", "Laika Ruso-europeo", "Labrador Retriever", "Mastín del Pirineo", "Mastin del Tibet", "Mastín Español", "Mastín Napolitano", "Pastor Alemán", "Pastor Australiano", "Pastor Belga", "Pastor de Brie", "Pastor de los Pirineos de Cara Rosa", "Pekinés", "Perdiguero Chesapeake Bay", "Perdiguero de Drentse", "Perdiguero de Pelo lido", "Perdiguero de pelo rizado", "Perdiguero Portugués", "Pitbull", "Podenco Ibicenco", "Podenco Portugués", "presa canario", "Presa Mallorquin", "Rottweiler", "Rough Collie", "Sabueso Español", "Sabueso Hélenico", "Sabueso Italiano", "Sabueso Suizo", "Samoyedo", "San Bernardo", "Scottish Terrier", "Setter Irlandés", "Shar Pei", "Shiba Inu", "Siberian Husky", "Staffordshire Bull Terrier", "Teckel", "Terranova", "Terrier Australiano", "Terrier Escocés", "Terrier Irlandés", "Terrier Japonés", "Terrier Negro Ruso", "Terrier Norfolk", "Terrier Norwich", "Yorkshire Terrier"];

export const character = (sex) => [
  { value: "shy", label: sex === "female" ? "Tímida" : "Tímido" },
  { value: "sociable", label: "Sociable" },
  { value: "hiperactive", label: sex === "female" ? "Hiperactiva" : "Hiperactivo" },
  { value: "calm", label: sex === "female" ? "Tranquila" : "Tranquilo" },
];

export const vaccines = [
  { value: "rabies", label: "Antirábica" },
  { value: "parvovirus", label: "Parvovirus" },
  { value: "hepatitis", label: "Hepatitis" },
  { value: "distemper", label: "Moquillo" },
];
