import Html exposing (..)
import Html.Utils

view : Html
view =
    div
        []
        [ text "Hello, world!"
        ]

main =
    text <| Html.Utils.toString view
