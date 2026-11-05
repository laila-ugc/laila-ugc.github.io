// Configuración pública del proyecto (no contiene secretos)
export const FIREBASE = {
  apiKey: "AIzaSyDAlzcvUZIXk7-KuIrcNTDZA6VI3lAM-co",
  authDomain: "laila-ugc.firebaseapp.com",
  projectId: "laila-ugc",
  storageBucket: "laila-ugc.firebasestorage.app",
  messagingSenderId: "271212930533",
  appId: "1:271212930533:web:50d05feb1bdbe01143fb0c"
};
export const CLOUD = { name: "f34n1kfu", preset: "laila_web" };
export const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";

// Colores disponibles
export const ACENTOS = { violeta: "#4D3DF5", coral: "#E4475A", verde: "#1F8F63", azul: "#2462D6", grafito: "#2B2533" };
export const TONOS = { amarillo: "#FFEDB3", verde: "#D3F1DE", rosa: "#FBDCE3", lila: "#E6DCF8", celeste: "#D6E8FB", durazno: "#FFDCC7" };
export const TONOS_OSC = { amarillo: "#4A4127", verde: "#22402F", rosa: "#4A2A33", lila: "#3A2F52", celeste: "#253A52", durazno: "#4A3226" };

// Inserta una transformación de Cloudinary en una URL
export function cl(url, tr, ext) {
  if (!url || !url.includes("/upload/")) return url || "";
  let u = url.replace("/upload/", "/upload/" + tr + "/");
  if (ext) u = u.replace(/\.[a-z0-9]+(\?.*)?$/i, "." + ext);
  return u;
}
export const videoSrc = v => cl(v.url, "c_limit,w_720,q_auto", "mp4");
export const posterSrc = v => v.portada ? cl(v.portada, "c_fill,w_480,h_854,g_auto,q_auto", "jpg") : cl(v.url, "c_limit,w_480,so_1,q_auto", "jpg");
export const imgSrc = (url, w) => cl(url, "c_limit,w_" + (w || 720) + ",q_auto", "jpg");

// Contenido inicial
export const INICIAL = {
  nombre: "Laila",
  rol: "Contenido UGC",
  frase: "¿Querés que tu marca se vea así?",
  intro: "Hago videos UGC para marcas: pienso la idea, filmo y edito, listo para publicar.",
  cierreTitulo: "Armemos el contenido de tu marca",
  cierreTexto: "Pienso la idea, filmo y edito. Escribime y te paso propuesta.",
  foto: "",
  acento: "violeta",
  categorias: [
    { id: "alimentos", nombre: "Alimentos", tono: "amarillo" },
    { id: "infusiones", nombre: "Infusiones", tono: "verde" },
    { id: "cafes", nombre: "Cafés y restaurantes", tono: "rosa" },
    { id: "moda", nombre: "Moda y accesorios", tono: "lila" },
    { id: "belleza", nombre: "Belleza y perfumes", tono: "celeste" }
  ],
  videos: [],
  contacto: { principal: "whatsapp", whatsapp: "", telefono: "", email: "", instagram: "", tiktok: "", facebook: "", linkedin: "", youtube: "", web: "",
    mensaje: "Hola Laila, vi tu portfolio y quiero consultarte por contenido para mi marca." }
};

// Videos que ya existían: al subirlos con el mismo nombre de archivo se completan solos
export const CONOCIDOS = {
  "wanna_v_receta_express": ["alimentos", "Wanna V", "Receta express"],
  "wanna_v_hamburguesas": ["alimentos", "Wanna V", "Hamburguesas que parecen de carne"],
  "wanna_v_crazy": ["alimentos", "Wanna V", "Milanesas, en clave humor"],
  "nutree_lifestyle": ["alimentos", "Nutree", "Llego a casa y cocino"],
  "nutree_nuggets": ["alimentos", "Nutree", "Nuggets para picar de a dos"],
  "nutree_trend": ["alimentos", "Nutree", "Trend: lo que me gusta del día"],
  "nutree_trend1": ["alimentos", "Nutree", "Milas al horno, versión horizontal"],
  "soyana_fideos": ["alimentos", "Soyana", "Fideos con tofu"],
  "soyana_empanadas": ["alimentos", "Soyana", "Empanadas caseras"],
  "soyana_crumble": ["alimentos", "Soyana", "Crumble paso a paso"],
  "soyana_flan_": ["alimentos", "Soyana", "Flan de tofu"],
  "veg_abundancia_": ["alimentos", "Veg", "La cena resuelta en 15 minutos"],
  "inti_zen_chai_": ["infusiones", "Inti Zen", "Lanzamiento del chai"],
  "inti_zen_logos": ["infusiones", "Inti Zen", "El secreto de cada color"],
  "inti_zen_mayorista": ["infusiones", "Inti Zen", "Caja de madera para locales"],
  "todo_viendo_haus_": ["cafes", "Haus", "Recorrido por el local"],
  "evento_fashion_": ["moda", "Jack & Jones y Only", "Cobertura de evento en tienda"],
  "oculto": ["moda", "Oculto", "Evento y producto"],
  "kogu": ["moda", "Kogu", "Reseña de bolso"],
  "tucci_perfume": ["belleza", "Tucci", "Campaña Cyber Monday"]
};

export function linksContacto(C) {
  const user = v => String(v || "").trim().replace(/^@/, "");
  const num = v => String(v || "").replace(/\D/g, "");
  const url = v => /^https?:\/\//.test(v) ? v : "https://" + String(v).trim();
  const lista = [
    ["whatsapp", "WhatsApp", v => "https://wa.me/" + num(v) + "?text=" + encodeURIComponent(C.mensaje || "")],
    ["telefono", "Llamar", v => "tel:+" + num(v)],
    ["email", "Email", v => "mailto:" + String(v).trim()],
    ["instagram", "Instagram", v => "https://instagram.com/" + user(v)],
    ["tiktok", "TikTok", v => "https://www.tiktok.com/@" + user(v)],
    ["facebook", "Facebook", v => url(v)],
    ["linkedin", "LinkedIn", v => url(v)],
    ["youtube", "YouTube", v => url(v)],
    ["web", "Web", v => url(v)]
  ].filter(([k]) => String(C[k] || "").trim()).map(([k, t, mk]) => ({ k, t, href: mk(C[k]), valor: String(C[k]).trim() }));
  lista.sort((a, b) => (b.k === C.principal) - (a.k === C.principal));
  return lista;
}
