import Html exposing (..)
import Html.Server

view : Html
view =
    div
        []
        [ text "Hello, world!"
        ]

main =
    text <| Html.Server.toString view
