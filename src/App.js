export default {
    data() {
        return {
            reels: [
                { name: 'cherry', img: 'cherry.png', points: 10 },
                { name: 'lemon', img: 'lemon.png', points: 20 },
                { name: 'orange', img: 'orange.png', points: 30 },
                { name: 'watermelon', img: 'watermelon.png', points: 50 }
            ],
            currentReels: [],
            message: '',
            budget: 100, // Presupuesto inicial
            costPerSpin: 10, // Costo por tirada
            gameOver: false // Para saber si el juego ha terminado
        };
    },
    methods: {
        spin() {
            if (this.budget < this.costPerSpin) { //  valida que el coste es mayor al presupuesto
                this.message = "No tienes suficiente presupuesto";
                return;
            }

            this.budget -= this.costPerSpin;// Restar el costo de la tirada
            this.message = '';
            const newReels = [];

            // Generar 3 imágenes aleatorias
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * this.reels.length);
                newReels.push(this.reels[randomIndex]);
            }

            this.currentReels = newReels;

            // Verificar si las 3 imágenes son iguales
            if (newReels[0].name === newReels[1].name && newReels[1].name === newReels[2].name) {
                const prize = newReels[0].points * 3;
                this.budget += prize;
                this.message = `¡Ganaste! Premio: ${prize} monedas`;
            } else {
                // valorar si tiene suficiente presupuesto
                if (this.budget <= 0) {
                    this.gameOver = true;
                } else {
                    this.message = 'Sigue intentándolo...';
                }
            }
        },
        restartGame() {
            // Reiniciar el juego
            this.budget = 100; // Volver a establecer el presupuesto inicial
            this.message = '';
            this.gameOver = false;
            this.spin(); // Empezar con imágenes aleatorias
        }
    },
    mounted() {
        this.spin(); // Inicializar con imágenes aleatorias
    }
};
