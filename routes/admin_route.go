package routes

import (
	"github.com/abdielreyes/hidrometer/controllers"
	"github.com/gofiber/fiber/v2"
)

func AdminRoute(app *fiber.App) {
	app.Post("/admin", controllers.CreateAdmin)
	app.Get("/admin/:admin_id", controllers.GetAnAdmin)
	app.Put("/admin/:admin_id", controllers.EditAnAdmin)
	app.Delete("/admin/:admin_id", controllers.DeleteAnAdmin)
	app.Get("/admins", controllers.GetAllAdmins)

	app.Post("admin/login", controllers.LoginAdmin)
}
