import React, { useEffect } from "react";
import whiteCarSvg from "./images/white.svg";
import blackCarSvg from "./images/black.svg";
import PlayButton from "./components/PlayButton";
import Stack from "@mui/material/Stack";



const textStyle: React.CSSProperties = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '3rem',
    textAlign: "center"
};

const Homepage = () => {

    useEffect(() => {
        const canvas = document.getElementById("raceCanvas") as HTMLCanvasElement;
        const context = canvas?.getContext("2d"); // Add the null check with '?'

        if (!context) {
            console.error("Canvas context not available.");
            return;
        }

        // Load the SVG image
        const blackCarImage = new Image(); // Create an image object
        blackCarImage.src = blackCarSvg;

        const whiteCarImage = new Image(); // Create an image object
        whiteCarImage.src = whiteCarSvg;


        const car1 = {
            x: 60,
            y: 150,
            speed: 2,
            image: blackCarImage, // Use the loaded image
            draw: function () {
                // Draw the car image on the canvas
                context.drawImage(this.image, this.x, this.y, 80, 50);
            },
            update: function () {
                // Update car position
                this.x += this.speed;
                // Reset car position when it goes off-screen
                if (this.x > canvas.width) {
                    this.x = -50;
                }
            },
        };

        const car2 = {
            x: 40,
            y: 300,
            speed: 2,
            image: whiteCarImage,
            draw: function () {
                context.drawImage(this.image, this.x, this.y, 80, 50);
            },
            update: function () {
                this.x += this.speed;
                if (this.x > canvas.width) {
                    this.x = -50;
                }
            },
        };


        const car3 = {
            x: 25,
            y: 225,
            speed: 2.25,
            image: blackCarImage,
            draw: function () {
                context.drawImage(this.image, this.x, this.y, 80, 50);
            },
            update: function () {
                this.x += this.speed;
                if (this.x > canvas.width) {
                    this.x = -50;
                }
            },
        };


        // Game loop
        function gameLoop() {
            context?.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw all cars
            car1.update();
            car1.draw();

            car2.update();
            car2.draw();

            car3.update();
            car3.draw();

            requestAnimationFrame(gameLoop);
        }

        gameLoop(); // Start the game loop

    }, []);

    return (
        <>
            <canvas
                id="raceCanvas"
                width={1200}
                height={400}
                style={{ display: "block" }}
            ></canvas>
            <Stack spacing={2}>
                <div style={textStyle}>Code F(x)</div>
                <PlayButton />
            </Stack>

        </>
    );
};

export default Homepage;
