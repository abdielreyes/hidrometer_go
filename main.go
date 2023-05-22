package main

import (
	"fmt"
	"os"
	// "strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	// "github.com/redis/go-redis/v9"

	"github.com/abdielreyes/hidrometer/configs"
	// "github.com/abdielreyes/hidrometer/middlewares"
	"github.com/abdielreyes/hidrometer/routes"
)

func main() {
	godotenv.Load()

	PORT := os.Getenv("PORT")
	HOST := os.Getenv("HOST")

	// REDIS_HOST := os.Getenv("REDIS_HOST")
	// REDIS_PORT := os.Getenv("REDIS_PORT")
	// REDIS_PASSWORD := os.Getenv("REDIS_PASSWORD")
	// REDIS_DB_NUMBER, _ := strconv.Atoi(os.Getenv("REDIS_DB_NUMBER"))
	//
	// redis.NewClient(&redis.Options{
	// 	Addr:     REDIS_HOST + ":" + REDIS_PORT,
	// 	Password: REDIS_PASSWORD,  // no password set
	// 	DB:       REDIS_DB_NUMBER, // use default DB
	// })

	configs.ConnectMongoDB()
	app := fiber.New()
	// middlewares.FiberMiddleware(app)

	app.Get("/", func(c *fiber.Ctx) error {
		err := c.SendString("Im a go server!")
		return err
	})
	routes.AdminRoute(app)
	app.Use(cors.New())
	app.Static("/", "./client/dist")

	app.Listen(HOST + ":" + PORT)
	fmt.Println("Server is running on port 3000")
}
