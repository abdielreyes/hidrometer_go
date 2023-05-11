package main

import (
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "3000"
	}
	app := fiber.New()
	app.Use(cors.New())
	app.Static("/", "./client/dist")

	app.Get("/users", func(c *fiber.Ctx) error {
		return c.JSON(&fiber.Map{
			"data": "users form backend",
		})
	})

	app.Listen(":" + PORT)
	fmt.Println("Server is running on port 3000")
}
