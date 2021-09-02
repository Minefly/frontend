package main

import (
	"os"

	"github.com/savsgio/atreugo/v11"
)

func main() {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		port = "2000"
	}
	config := atreugo.Config{
		Addr: "0.0.0.0:" + port,
	}
	server := atreugo.New(config)

	server.StaticCustom("", &atreugo.StaticFS{
		Root:            "./out",
		IndexNames:      []string{"index.html"},
		Compress:        true,
		AcceptByteRange: true,
		PathNotFound: func(rc *atreugo.RequestCtx) error {
			rc.NotFound()
			return nil
		},
	})

	if err := server.ListenAndServe(); err != nil {
		panic(err)
	}
}
