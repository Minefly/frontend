package main

import (
	"os"
	"path/filepath"

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

	cwd, err := os.Getwd()
	if err != nil {
		panic(err)
	}

	server.StaticCustom("", &atreugo.StaticFS{
		Root:            filepath.Join(cwd, "out"),
		IndexNames:      []string{"index.html"},
		Compress:        true,
		AcceptByteRange: true,
		PathNotFound: func(rc *atreugo.RequestCtx) error {
			// TODO: Send the 404 file
			rc.NotFound()
			return nil
		},
	})

	if err := server.ListenAndServe(); err != nil {
		panic(err)
	}
}
