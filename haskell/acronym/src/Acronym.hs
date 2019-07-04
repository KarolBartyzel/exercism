module Acronym (abbreviate) where

import qualified Data.Char as Char
import qualified Data.Text as Text

includeFirst :: Bool -> String -> String
includeFirst True s = s
includeFirst False (x:xs) = xs
includeFirst False x = []

splitOn :: (Char -> Bool) -> Bool -> (String -> [String])
splitOn f i [] = []
splitOn f i xxs@(x:xs) = if all f xxs
    then [xxs]
    else
        let (first, second) = break f xs
        in (x:first):(splitOn f i (includeFirst i second))

camel :: String -> [String]
camel = splitOn Char.isUpper True

hyphen :: String -> [String]
hyphen = splitOn (\c -> c == '-') False

abbreviate :: String -> String
abbreviate = concat
    . (:[])
    . (filter Char.isLetter)
    . (map (Char.toUpper . head))
    . (concat . map hyphen)
    . (concat . map camel)
    . words
