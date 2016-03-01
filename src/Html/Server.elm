module Html.Server (toString) where

import Html exposing (Html)
import Native.Html

toString : Html -> String
toString = Native.Html.toString
