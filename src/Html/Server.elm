module Html.Server (toString) where

import Html exposing (Html)
import Native.HtmlUtils

toString : Html -> String
toString = Native.HtmlUtils.toString
