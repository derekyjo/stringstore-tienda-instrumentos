// Datos de productos para la tienda de instrumentos
const products = [
    {
        id: 1,
        name: "Fender Stratocaster Player",
        category: "guitarras",
        price: 38500,
        image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500",
        description: "Guitarra eléctrica con excelente sonido"
    },
    {
        id: 2,
        name: "Gibson Les Paul Studio",
        category: "guitarras",
        price: 52500,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500",
        description: "Guitarra eléctrica clásica y versátil"
    },
    {
        id: 3,
        name: "Yamaha Pacifica 112V",
        category: "guitarras",
        price: 14500,
        image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=500",
        description: "Guitarra eléctrica ideal para principiantes"
    },
    {
        id: 4,
        name: "Martin LX1 Little Martin",
        category: "guitarras",
        price: 18500,
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500",
        description: "Guitarra acústica compacta y portátil"
    },
    {
        id: 5,
        name: "Epiphone DR-100",
        category: "guitarras",
        price: 9500,
        image: "https://images.unsplash.com/photo-1459305272254-33a7d593a851?w=500",
        description: "Guitarra acústica económica y resistente"
    },
    {
        id: 6,
        name: "Squier Affinity Precision Bass",
        category: "bajos",
        price: 16500,
        image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500",
        description: "Bajo eléctrico ideal para principiantes"
    },
    {
        id: 7,
        name: "Fender Player Precision Bass",
        category: "bajos",
        price: 28500,
        image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=500",
        description: "Bajo eléctrico clásico con gran tono"
    },
    {
        id: 8,
        name: "Ibanez GSR200",
        category: "bajos",
        price: 14500,
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500",
        description: "Bajo eléctrico ligero y cómodo"
    },
    {
        id: 9,
        name: "Alesis Nitro Mesh Kit",
        category: "baterias",
        price: 32500,
        image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500",
        description: "Batería electrónica con mallas silenciosas"
    },
    {
        id: 10,
        name: "Pearl Roadshow Jr.",
        category: "baterias",
        price: 24500,
        image: "https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=500",
        description: "Batería acústica completa para principiantes"
    },
    {
        id: 11,
        name: "Ludwig Accent Combo",
        category: "baterias",
        price: 29500,
        image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=500",
        description: "Batería acústica 5 piezas con platillos"
    },
    {
        id: 12,
        name: "Yamaha PSR-E373",
        category: "teclados",
        price: 9500,
        image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=500",
        description: "Teclado digital con 61 teclas"
    },
    {
        id: 13,
        name: "Casio CT-X700",
        category: "teclados",
        price: 8500,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
        description: "Teclado arranger portátil"
    },
    {
        id: 14,
        name: "Roland GO:PIANO88",
        category: "teclados",
        price: 24500,
        image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500",
        description: "Piano digital con 88 teclas pesadas"
    },
    {
        id: 15,
        name: "Arturia MiniLab 3",
        category: "teclados",
        price: 11500,
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500",
        description: "Controlador MIDI compacto"
    },
    {
        id: 16,
        name: "Set de Cuerdas Ernie Ball",
        category: "accesorios",
        price: 450,
        image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=500",
        description: "Cuerdas para guitarra eléctrica"
    },
    {
        id: 17,
        name: "Afinador Clip-On Snark",
        category: "accesorios",
        price: 650,
        image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500",
        description: "Afinador cromático para cualquier instrumento"
    },
    {
        id: 18,
        name: "Funda Acolchada para Guitarra",
        category: "accesorios",
        price: 1250,
        image: "https://images.unsplash.com/photo-1459305272254-33a7d593a851?w=500",
        description: "Funda acolchada para guitarra eléctrica/acústica"
    },
    {
        id: 19,
        name: "Amplificador Fender Frontman 10G",
        category: "accesorios",
        price: 9500,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
        description: "Amplificador para guitarra 10W"
    },
    {
        id: 20,
        name: "Pedal Boss DS-1 Distortion",
        category: "accesorios",
        price: 4200,
        image: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=500",
        description: "Pedal de distorsión clásico"
    },
    {
        id: 21,
        name: "Ukulele Soprano Kala",
        category: "guitarras",
        price: 2750,
        image: "https://images.unsplash.com/photo-1583225229447-0e5f0b4b1a97?w=500",
        description: "Ukulele soprano ideal para principiantes"
    },
    {
        id: 22,
        name: "Platillos Meinl HCS",
        category: "baterias",
        price: 8500,
        image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500",
        description: "Set de platillos económico y versátil"
    }
];

// Formatear precio a moneda dominicana
function formatPrice(price) {
    return new Intl.NumberFormat('es-DO', {
        style: 'currency',
        currency: 'DOP',
        minimumFractionDigits: 0
    }).format(price);
}
