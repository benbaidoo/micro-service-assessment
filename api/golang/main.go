package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

const PORT = ":8003"

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{"*"},
	}))

	router.GET("/browser", func(c *gin.Context) {
		fmt.Println(c.Request.Header.Get("User-Agent"))
		browser := c.Request.Header.Get("User-Agent")
		c.JSON(200, gin.H{
			"data": gin.H{
				"browser": browser,
			},
		})
	})

	router.Run(PORT)
}
