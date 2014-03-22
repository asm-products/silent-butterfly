import Grunt._

name := "silent-butterfly"

playRunHooks <+= baseDirectory.map(ui => Grunt(ui))

libraryDependencies ++= Seq(
  jdbc,
  cache,
  "ws.securesocial" %% "securesocial" % "2.1.3"
)     

play.Project.playScalaSettings
